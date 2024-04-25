/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace ExitFormat {
  export type AssetMetadataStruct = {
    assetType: BigNumberish;
    metadata: BytesLike;
  };

  export type AssetMetadataStructOutput = [number, string] & {
    assetType: number;
    metadata: string;
  };

  export type AllocationStruct = {
    destination: BytesLike;
    amount: BigNumberish;
    allocationType: BigNumberish;
    metadata: BytesLike;
  };

  export type AllocationStructOutput = [string, BigNumber, number, string] & {
    destination: string;
    amount: BigNumber;
    allocationType: number;
    metadata: string;
  };

  export type SingleAssetExitStruct = {
    asset: string;
    assetMetadata: ExitFormat.AssetMetadataStruct;
    allocations: ExitFormat.AllocationStruct[];
  };

  export type SingleAssetExitStructOutput = [
    string,
    ExitFormat.AssetMetadataStructOutput,
    ExitFormat.AllocationStructOutput[]
  ] & {
    asset: string;
    assetMetadata: ExitFormat.AssetMetadataStructOutput;
    allocations: ExitFormat.AllocationStructOutput[];
  };
}

export declare namespace INitroTypes {
  export type VariablePartStruct = {
    outcome: ExitFormat.SingleAssetExitStruct[];
    appData: BytesLike;
    turnNum: BigNumberish;
    isFinal: boolean;
  };

  export type VariablePartStructOutput = [
    ExitFormat.SingleAssetExitStructOutput[],
    string,
    number,
    boolean
  ] & {
    outcome: ExitFormat.SingleAssetExitStructOutput[];
    appData: string;
    turnNum: number;
    isFinal: boolean;
  };

  export type SignatureStruct = { v: BigNumberish; r: BytesLike; s: BytesLike };

  export type SignatureStructOutput = [number, string, string] & {
    v: number;
    r: string;
    s: string;
  };

  export type SignedVariablePartStruct = {
    variablePart: INitroTypes.VariablePartStruct;
    sigs: INitroTypes.SignatureStruct[];
  };

  export type SignedVariablePartStructOutput = [
    INitroTypes.VariablePartStructOutput,
    INitroTypes.SignatureStructOutput[]
  ] & {
    variablePart: INitroTypes.VariablePartStructOutput;
    sigs: INitroTypes.SignatureStructOutput[];
  };

  export type FixedPartStruct = {
    participants: string[];
    channelNonce: BigNumberish;
    appDefinition: string;
    challengeDuration: BigNumberish;
  };

  export type FixedPartStructOutput = [string[], BigNumber, string, number] & {
    participants: string[];
    channelNonce: BigNumber;
    appDefinition: string;
    challengeDuration: number;
  };
}

export declare namespace IMultiAssetHolder {
  export type ReclaimArgsStruct = {
    sourceChannelId: BytesLike;
    sourceStateHash: BytesLike;
    sourceOutcomeBytes: BytesLike;
    sourceAssetIndex: BigNumberish;
    indexOfTargetInSource: BigNumberish;
    targetStateHash: BytesLike;
    targetOutcomeBytes: BytesLike;
    targetAssetIndex: BigNumberish;
  };

  export type ReclaimArgsStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber
  ] & {
    sourceChannelId: string;
    sourceStateHash: string;
    sourceOutcomeBytes: string;
    sourceAssetIndex: BigNumber;
    indexOfTargetInSource: BigNumber;
    targetStateHash: string;
    targetOutcomeBytes: string;
    targetAssetIndex: BigNumber;
  };
}

export interface NitroAdjudicatorInterface extends utils.Interface {
  functions: {
    "challenge((address[],uint64,address,uint48),(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[])[],(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[]),(uint8,bytes32,bytes32))": FunctionFragment;
    "checkpoint((address[],uint64,address,uint48),(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[])[],(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[]))": FunctionFragment;
    "compute_reclaim_effects((bytes32,uint256,uint8,bytes)[],(bytes32,uint256,uint8,bytes)[],uint256)": FunctionFragment;
    "compute_transfer_effects_and_interactions(uint256,(bytes32,uint256,uint8,bytes)[],uint256[])": FunctionFragment;
    "conclude((address[],uint64,address,uint48),(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[]))": FunctionFragment;
    "concludeAndTransferAllAssets((address[],uint64,address,uint48),(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[]))": FunctionFragment;
    "deposit(address,bytes32,uint256,uint256)": FunctionFragment;
    "holdings(address,bytes32)": FunctionFragment;
    "reclaim((bytes32,bytes32,bytes,uint256,uint256,bytes32,bytes,uint256))": FunctionFragment;
    "stateIsSupported((address[],uint64,address,uint48),(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[])[],(((address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes,uint48,bool),(uint8,bytes32,bytes32)[]))": FunctionFragment;
    "statusOf(bytes32)": FunctionFragment;
    "transfer(uint256,bytes32,bytes,bytes32,uint256[])": FunctionFragment;
    "transferAllAssets(bytes32,(address,(uint8,bytes),(bytes32,uint256,uint8,bytes)[])[],bytes32)": FunctionFragment;
    "unpackStatus(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "challenge"
      | "checkpoint"
      | "compute_reclaim_effects"
      | "compute_transfer_effects_and_interactions"
      | "conclude"
      | "concludeAndTransferAllAssets"
      | "deposit"
      | "holdings"
      | "reclaim"
      | "stateIsSupported"
      | "statusOf"
      | "transfer"
      | "transferAllAssets"
      | "unpackStatus"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "challenge",
    values: [
      INitroTypes.FixedPartStruct,
      INitroTypes.SignedVariablePartStruct[],
      INitroTypes.SignedVariablePartStruct,
      INitroTypes.SignatureStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint",
    values: [
      INitroTypes.FixedPartStruct,
      INitroTypes.SignedVariablePartStruct[],
      INitroTypes.SignedVariablePartStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compute_reclaim_effects",
    values: [
      ExitFormat.AllocationStruct[],
      ExitFormat.AllocationStruct[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compute_transfer_effects_and_interactions",
    values: [BigNumberish, ExitFormat.AllocationStruct[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "conclude",
    values: [INitroTypes.FixedPartStruct, INitroTypes.SignedVariablePartStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "concludeAndTransferAllAssets",
    values: [INitroTypes.FixedPartStruct, INitroTypes.SignedVariablePartStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "holdings",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reclaim",
    values: [IMultiAssetHolder.ReclaimArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "stateIsSupported",
    values: [
      INitroTypes.FixedPartStruct,
      INitroTypes.SignedVariablePartStruct[],
      INitroTypes.SignedVariablePartStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "statusOf", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAllAssets",
    values: [BytesLike, ExitFormat.SingleAssetExitStruct[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unpackStatus",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compute_reclaim_effects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compute_transfer_effects_and_interactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "conclude", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "concludeAndTransferAllAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "holdings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stateIsSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "statusOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferAllAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpackStatus",
    data: BytesLike
  ): Result;

  events: {
    "AllocationUpdated(bytes32,uint256,uint256,uint256)": EventFragment;
    "ChallengeCleared(bytes32,uint48)": EventFragment;
    "ChallengeRegistered(bytes32,uint48,tuple[],tuple)": EventFragment;
    "Checkpointed(bytes32,uint48)": EventFragment;
    "Concluded(bytes32,uint48)": EventFragment;
    "Deposited(bytes32,address,uint256)": EventFragment;
    "Reclaimed(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllocationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChallengeCleared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChallengeRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Checkpointed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Concluded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reclaimed"): EventFragment;
}

export interface AllocationUpdatedEventObject {
  channelId: string;
  assetIndex: BigNumber;
  initialHoldings: BigNumber;
  finalHoldings: BigNumber;
}
export type AllocationUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  AllocationUpdatedEventObject
>;

export type AllocationUpdatedEventFilter =
  TypedEventFilter<AllocationUpdatedEvent>;

export interface ChallengeClearedEventObject {
  channelId: string;
  newTurnNumRecord: number;
}
export type ChallengeClearedEvent = TypedEvent<
  [string, number],
  ChallengeClearedEventObject
>;

export type ChallengeClearedEventFilter =
  TypedEventFilter<ChallengeClearedEvent>;

export interface ChallengeRegisteredEventObject {
  channelId: string;
  finalizesAt: number;
  proof: INitroTypes.SignedVariablePartStructOutput[];
  candidate: INitroTypes.SignedVariablePartStructOutput;
}
export type ChallengeRegisteredEvent = TypedEvent<
  [
    string,
    number,
    INitroTypes.SignedVariablePartStructOutput[],
    INitroTypes.SignedVariablePartStructOutput
  ],
  ChallengeRegisteredEventObject
>;

export type ChallengeRegisteredEventFilter =
  TypedEventFilter<ChallengeRegisteredEvent>;

export interface CheckpointedEventObject {
  channelId: string;
  newTurnNumRecord: number;
}
export type CheckpointedEvent = TypedEvent<
  [string, number],
  CheckpointedEventObject
>;

export type CheckpointedEventFilter = TypedEventFilter<CheckpointedEvent>;

export interface ConcludedEventObject {
  channelId: string;
  finalizesAt: number;
}
export type ConcludedEvent = TypedEvent<[string, number], ConcludedEventObject>;

export type ConcludedEventFilter = TypedEventFilter<ConcludedEvent>;

export interface DepositedEventObject {
  destination: string;
  asset: string;
  destinationHoldings: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, string, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface ReclaimedEventObject {
  channelId: string;
  assetIndex: BigNumber;
}
export type ReclaimedEvent = TypedEvent<
  [string, BigNumber],
  ReclaimedEventObject
>;

export type ReclaimedEventFilter = TypedEventFilter<ReclaimedEvent>;

export interface NitroAdjudicator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NitroAdjudicatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    challenge(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      challengerSig: INitroTypes.SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    checkpoint(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    compute_reclaim_effects(
      sourceAllocations: ExitFormat.AllocationStruct[],
      targetAllocations: ExitFormat.AllocationStruct[],
      indexOfTargetInSource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ExitFormat.AllocationStructOutput[]]>;

    compute_transfer_effects_and_interactions(
      initialHoldings: BigNumberish,
      allocations: ExitFormat.AllocationStruct[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ExitFormat.AllocationStructOutput[],
        boolean,
        ExitFormat.AllocationStructOutput[],
        BigNumber
      ] & {
        newAllocations: ExitFormat.AllocationStructOutput[];
        allocatesOnlyZeros: boolean;
        exitAllocations: ExitFormat.AllocationStructOutput[];
        totalPayouts: BigNumber;
      }
    >;

    conclude(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    concludeAndTransferAllAssets(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deposit(
      asset: string,
      channelId: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    holdings(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    reclaim(
      reclaimArgs: IMultiAssetHolder.ReclaimArgsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    stateIsSupported(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    statusOf(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    transfer(
      assetIndex: BigNumberish,
      fromChannelId: BytesLike,
      outcomeBytes: BytesLike,
      stateHash: BytesLike,
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferAllAssets(
      channelId: BytesLike,
      outcome: ExitFormat.SingleAssetExitStruct[],
      stateHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unpackStatus(
      channelId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber] & {
        turnNumRecord: number;
        finalizesAt: number;
        fingerprint: BigNumber;
      }
    >;
  };

  challenge(
    fixedPart: INitroTypes.FixedPartStruct,
    proof: INitroTypes.SignedVariablePartStruct[],
    candidate: INitroTypes.SignedVariablePartStruct,
    challengerSig: INitroTypes.SignatureStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  checkpoint(
    fixedPart: INitroTypes.FixedPartStruct,
    proof: INitroTypes.SignedVariablePartStruct[],
    candidate: INitroTypes.SignedVariablePartStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  compute_reclaim_effects(
    sourceAllocations: ExitFormat.AllocationStruct[],
    targetAllocations: ExitFormat.AllocationStruct[],
    indexOfTargetInSource: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ExitFormat.AllocationStructOutput[]>;

  compute_transfer_effects_and_interactions(
    initialHoldings: BigNumberish,
    allocations: ExitFormat.AllocationStruct[],
    indices: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      ExitFormat.AllocationStructOutput[],
      boolean,
      ExitFormat.AllocationStructOutput[],
      BigNumber
    ] & {
      newAllocations: ExitFormat.AllocationStructOutput[];
      allocatesOnlyZeros: boolean;
      exitAllocations: ExitFormat.AllocationStructOutput[];
      totalPayouts: BigNumber;
    }
  >;

  conclude(
    fixedPart: INitroTypes.FixedPartStruct,
    candidate: INitroTypes.SignedVariablePartStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  concludeAndTransferAllAssets(
    fixedPart: INitroTypes.FixedPartStruct,
    candidate: INitroTypes.SignedVariablePartStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deposit(
    asset: string,
    channelId: BytesLike,
    expectedHeld: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  holdings(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  reclaim(
    reclaimArgs: IMultiAssetHolder.ReclaimArgsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  stateIsSupported(
    fixedPart: INitroTypes.FixedPartStruct,
    proof: INitroTypes.SignedVariablePartStruct[],
    candidate: INitroTypes.SignedVariablePartStruct,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  statusOf(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  transfer(
    assetIndex: BigNumberish,
    fromChannelId: BytesLike,
    outcomeBytes: BytesLike,
    stateHash: BytesLike,
    indices: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferAllAssets(
    channelId: BytesLike,
    outcome: ExitFormat.SingleAssetExitStruct[],
    stateHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unpackStatus(
    channelId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [number, number, BigNumber] & {
      turnNumRecord: number;
      finalizesAt: number;
      fingerprint: BigNumber;
    }
  >;

  callStatic: {
    challenge(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      challengerSig: INitroTypes.SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    checkpoint(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    compute_reclaim_effects(
      sourceAllocations: ExitFormat.AllocationStruct[],
      targetAllocations: ExitFormat.AllocationStruct[],
      indexOfTargetInSource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ExitFormat.AllocationStructOutput[]>;

    compute_transfer_effects_and_interactions(
      initialHoldings: BigNumberish,
      allocations: ExitFormat.AllocationStruct[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        ExitFormat.AllocationStructOutput[],
        boolean,
        ExitFormat.AllocationStructOutput[],
        BigNumber
      ] & {
        newAllocations: ExitFormat.AllocationStructOutput[];
        allocatesOnlyZeros: boolean;
        exitAllocations: ExitFormat.AllocationStructOutput[];
        totalPayouts: BigNumber;
      }
    >;

    conclude(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    concludeAndTransferAllAssets(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      asset: string,
      channelId: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    holdings(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reclaim(
      reclaimArgs: IMultiAssetHolder.ReclaimArgsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    stateIsSupported(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    statusOf(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    transfer(
      assetIndex: BigNumberish,
      fromChannelId: BytesLike,
      outcomeBytes: BytesLike,
      stateHash: BytesLike,
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferAllAssets(
      channelId: BytesLike,
      outcome: ExitFormat.SingleAssetExitStruct[],
      stateHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unpackStatus(
      channelId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, number, BigNumber] & {
        turnNumRecord: number;
        finalizesAt: number;
        fingerprint: BigNumber;
      }
    >;
  };

  filters: {
    "AllocationUpdated(bytes32,uint256,uint256,uint256)"(
      channelId?: BytesLike | null,
      assetIndex?: null,
      initialHoldings?: null,
      finalHoldings?: null
    ): AllocationUpdatedEventFilter;
    AllocationUpdated(
      channelId?: BytesLike | null,
      assetIndex?: null,
      initialHoldings?: null,
      finalHoldings?: null
    ): AllocationUpdatedEventFilter;

    "ChallengeCleared(bytes32,uint48)"(
      channelId?: BytesLike | null,
      newTurnNumRecord?: null
    ): ChallengeClearedEventFilter;
    ChallengeCleared(
      channelId?: BytesLike | null,
      newTurnNumRecord?: null
    ): ChallengeClearedEventFilter;

    "ChallengeRegistered(bytes32,uint48,tuple[],tuple)"(
      channelId?: BytesLike | null,
      finalizesAt?: null,
      proof?: null,
      candidate?: null
    ): ChallengeRegisteredEventFilter;
    ChallengeRegistered(
      channelId?: BytesLike | null,
      finalizesAt?: null,
      proof?: null,
      candidate?: null
    ): ChallengeRegisteredEventFilter;

    "Checkpointed(bytes32,uint48)"(
      channelId?: BytesLike | null,
      newTurnNumRecord?: null
    ): CheckpointedEventFilter;
    Checkpointed(
      channelId?: BytesLike | null,
      newTurnNumRecord?: null
    ): CheckpointedEventFilter;

    "Concluded(bytes32,uint48)"(
      channelId?: BytesLike | null,
      finalizesAt?: null
    ): ConcludedEventFilter;
    Concluded(
      channelId?: BytesLike | null,
      finalizesAt?: null
    ): ConcludedEventFilter;

    "Deposited(bytes32,address,uint256)"(
      destination?: BytesLike | null,
      asset?: null,
      destinationHoldings?: null
    ): DepositedEventFilter;
    Deposited(
      destination?: BytesLike | null,
      asset?: null,
      destinationHoldings?: null
    ): DepositedEventFilter;

    "Reclaimed(bytes32,uint256)"(
      channelId?: BytesLike | null,
      assetIndex?: null
    ): ReclaimedEventFilter;
    Reclaimed(
      channelId?: BytesLike | null,
      assetIndex?: null
    ): ReclaimedEventFilter;
  };

  estimateGas: {
    challenge(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      challengerSig: INitroTypes.SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    checkpoint(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    compute_reclaim_effects(
      sourceAllocations: ExitFormat.AllocationStruct[],
      targetAllocations: ExitFormat.AllocationStruct[],
      indexOfTargetInSource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compute_transfer_effects_and_interactions(
      initialHoldings: BigNumberish,
      allocations: ExitFormat.AllocationStruct[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    conclude(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    concludeAndTransferAllAssets(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deposit(
      asset: string,
      channelId: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    holdings(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reclaim(
      reclaimArgs: IMultiAssetHolder.ReclaimArgsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    stateIsSupported(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statusOf(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      assetIndex: BigNumberish,
      fromChannelId: BytesLike,
      outcomeBytes: BytesLike,
      stateHash: BytesLike,
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferAllAssets(
      channelId: BytesLike,
      outcome: ExitFormat.SingleAssetExitStruct[],
      stateHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unpackStatus(
      channelId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    challenge(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      challengerSig: INitroTypes.SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    checkpoint(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    compute_reclaim_effects(
      sourceAllocations: ExitFormat.AllocationStruct[],
      targetAllocations: ExitFormat.AllocationStruct[],
      indexOfTargetInSource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compute_transfer_effects_and_interactions(
      initialHoldings: BigNumberish,
      allocations: ExitFormat.AllocationStruct[],
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    conclude(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    concludeAndTransferAllAssets(
      fixedPart: INitroTypes.FixedPartStruct,
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deposit(
      asset: string,
      channelId: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    holdings(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reclaim(
      reclaimArgs: IMultiAssetHolder.ReclaimArgsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    stateIsSupported(
      fixedPart: INitroTypes.FixedPartStruct,
      proof: INitroTypes.SignedVariablePartStruct[],
      candidate: INitroTypes.SignedVariablePartStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    statusOf(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      assetIndex: BigNumberish,
      fromChannelId: BytesLike,
      outcomeBytes: BytesLike,
      stateHash: BytesLike,
      indices: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferAllAssets(
      channelId: BytesLike,
      outcome: ExitFormat.SingleAssetExitStruct[],
      stateHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unpackStatus(
      channelId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
