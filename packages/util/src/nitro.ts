import debug from 'debug';

import {
  Client, Destination, DurableStore, MemStore, P2PMessageService, Store, LedgerChannelInfo, PaymentChannelInfo,
} from '@cerc-io/nitro-client';
import { hex2Bytes } from '@cerc-io/nitro-util';

import { createOutcome, setupClient, subscribeVoucherLogs } from './helpers';

const log = debug('ts-nitro:util:nitro');

const CHALLENGE_DURATION = 0;
const ASSET = `0x${'00'.repeat(20)}`;

export class Nitro {
  client: Client;

  msgService: P2PMessageService;

  constructor(
    client: Client,
    msgService: P2PMessageService,
  ) {
    this.client = client;
    this.msgService = msgService;
  }

  static async setupClient(
    pk: string,
    chainURL: string,
    chainPk: string,
    relayMultiaddr: string,
    location?: string,
  ): Promise<Nitro> {
    let store: Store;
    if (location) {
      store = DurableStore.newDurableStore(hex2Bytes(pk), location);
    } else {
      store = new MemStore(hex2Bytes(pk));
    }

    // Type error thrown in NodeJS build
    // TODO: Move file to separate package which is only used for browser build
    const msgService = await (P2PMessageService as any).newMessageService(relayMultiaddr, store.getAddress(), hex2Bytes(pk));

    const client = await setupClient(
      msgService,
      store,
      {
        chainPk,
        chainURL,
      },
    );

    subscribeVoucherLogs(client);
    return new Nitro(client, msgService);
  }

  static async clearClientStorage(): Promise<boolean> {
    // Delete all databases in browser
    const dbs = await window.indexedDB.databases();
    dbs.forEach((db) => window.indexedDB.deleteDatabase(db.name!));
    return true;
  }

  // TODO: Implement close method

  async addPeerByMultiaddr(address: string, multiaddrString: string): Promise<void> {
    await this.msgService.addPeerByMultiaddr(address, multiaddrString);
  }

  async directFund(counterParty: string, amount: number): Promise<void> {
    const outcome = createOutcome(
      ASSET,
      this.client.address,
      counterParty,
      amount,
    );

    const response = await this.client.createLedgerChannel(
      counterParty,
      CHALLENGE_DURATION,
      outcome,
    );

    await this.client.objectiveCompleteChan(response.id).shift();
    log(`Ledger channel created with id ${response.channelId.string()}\n`);
  }

  async virtualFund(counterParty: string, amount: number): Promise<void> {
    const intermediaries: string[] = [];
    const outcome = createOutcome(
      ASSET,
      this.client.address,
      counterParty,
      amount,
    );

    const response = await this.client.createVirtualPaymentChannel(
      intermediaries,
      counterParty,
      CHALLENGE_DURATION,
      outcome,
    );

    await this.client.objectiveCompleteChan(response.id).shift();
    log(`Virtual payment channel created with id ${response.channelId.string()}\n`);
  }

  async pay(virtualPaymentChannel: string, amount: number): Promise<void> {
    const virtualPaymentChannelId = new Destination(virtualPaymentChannel);
    await this.client.pay(virtualPaymentChannelId, BigInt(amount));

    // TODO: Wait for the payment to be processed
  }

  async virtualDefund(virtualPaymentChannel: string): Promise<void> {
    const virtualPaymentChannelId = new Destination(virtualPaymentChannel);
    const closeVirtualChannelObjectiveId = await this.client.closeVirtualChannel(virtualPaymentChannelId);

    await this.client.objectiveCompleteChan(closeVirtualChannelObjectiveId).shift();
    log(`Virtual payment channel with id ${virtualPaymentChannelId.string()} closed`);
  }

  async directDefund(ledgerChannel: string): Promise<void> {
    const ledgerChannelId: Destination = new Destination(ledgerChannel);
    const closeLedgerChannelObjectiveId = await this.client.closeLedgerChannel(ledgerChannelId);

    await this.client.objectiveCompleteChan(closeLedgerChannelObjectiveId).shift();
    log(`Ledger channel with id ${ledgerChannelId.string()} closed`);
  }

  async getLedgerChannel(ledgerChannel: string): Promise<LedgerChannelInfo> {
    const ledgerChannelId = new Destination(ledgerChannel);
    return this.client.getLedgerChannel(ledgerChannelId);
  }

  async getAllLedgerChannels(): Promise<LedgerChannelInfo[]> {
    return this.client.getAllLedgerChannels();
  }

  async getPaymentChannel(paymentChannel: string): Promise<PaymentChannelInfo> {
    const paymentChannelId = new Destination(paymentChannel);
    return this.client.getPaymentChannel(paymentChannelId);
  }

  async getPaymentChannelsByLedger(ledgerChannel: string): Promise<PaymentChannelInfo[]> {
    const ledgerChannelId = new Destination(ledgerChannel);
    return this.client.getPaymentChannelsByLedger(ledgerChannelId);
  }
}