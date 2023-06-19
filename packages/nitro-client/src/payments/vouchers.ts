// A Voucher signed by Alice can be used by Bob to redeem payments in case of
// a misbehaving Alice.
//
// During normal operation, Alice & Bob would terminate the channel with an
// outcome reflecting the largest amount signed by Alice. For instance,
//   - if the channel started with balances {alice: 100, bob: 0}
//   - and the biggest voucher signed by alice had amount = 20
//   - then Alice and Bob would cooperatively conclude the channel with outcome
//     {alice: 80, bob: 20}

import { ethers } from 'ethers';

import { signVoucher } from '@statechannels/nitro-protocol';
import {
  FieldDescription, fromJSON, toJSON, zeroValueSignature,
} from '@cerc-io/nitro-util';

import { Signature } from '../channel/state/state';
import { Address } from '../types/types';
import { Destination } from '../types/destination';
import { equal, signatureJsonEncodingMap } from '../crypto/signatures';

export class Voucher {
  channelId: Destination = new Destination();

  amount: bigint = BigInt(0);

  signature: Signature = zeroValueSignature;

  static jsonEncodingMap: Record<string, FieldDescription> = {
    channelId: { type: 'class', value: Destination },
    amount: { type: 'bigint' },
    signature: { type: 'object', value: signatureJsonEncodingMap },
  };

  static fromJSON(data: string): Voucher {
    const props = fromJSON(this.jsonEncodingMap, data);
    return new Voucher(props);
  }

  toJSON(): any {
    return toJSON(Voucher.jsonEncodingMap, this);
  }

  constructor(params: {
    channelId?: Destination;
    amount?: bigint;
    signature?: Signature;
  }) {
    Object.assign(this, params);
  }

  // TODO: Can throw an error
  hash(): Buffer {
    // TODO: Implement
    return Buffer.from('');
  }

  async sign(pk: Buffer): Promise<void> {
    const wallet = new ethers.Wallet(pk);

    // Using util method from nitro-protocol instead of go-nitro port
    this.signature = await signVoucher(
      {
        amount: this.amount.toString(),
        channelId: this.channelId.string(),
      },
      wallet,
    );
  }

  // TODO: Can throw an error
  // TODO: Implement
  recoverSigner(): Address {
    return ethers.constants.AddressZero;
  }

  // Equal returns true if the two vouchers have the same channel id, amount and signatures
  equal(other: Voucher): boolean {
    return this.channelId === other.channelId
    && this.amount === other.amount
    && equal(this.signature, other.signature);
  }
}

// VoucherInfo contains the largest voucher we've received on a channel.
// As well as details about the balance and who the payee/payer is.
// TODO: Implement
export class VoucherInfo {
  channelPayer: Address = ethers.constants.AddressZero;

  channelPayee: Address = ethers.constants.AddressZero;

  startingBalance: bigint = BigInt(0);

  largestVoucher: Voucher = new Voucher({});

  static jsonEncodingMap: Record<string, FieldDescription> = {
    channelPayer: { type: 'string' },
    channelPayee: { type: 'string' },
    startingBalance: { type: 'bigint' },
    largestVoucher: { type: 'class', value: Voucher },
  };

  static fromJSON(data: string): VoucherInfo {
    const props = fromJSON(this.jsonEncodingMap, data);
    return new VoucherInfo(props);
  }

  toJSON(): any {
    return toJSON(VoucherInfo.jsonEncodingMap, this);
  }

  constructor(params: {
    channelPayer?: Address
    channelPayee?: Address
    startingBalance?: bigint
    largestVoucher?: Voucher
  }) {
    Object.assign(this, params);
  }

  // Paid is the amount of funds that already have been used as payments
  paid(): bigint {
    return this.largestVoucher.amount;
  }

  // Remaining returns the amount of funds left to be used as payments
  remaining(): bigint {
    return this.startingBalance - this.paid();
  }
}
