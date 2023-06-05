import { Bytes32, isExternalDestination } from '@statechannels/nitro-protocol';
import { Address } from './types';

// A {tokenAddress: amount} map. Address 0 represents a chain's native token (ETH, FIL, etc)
export class Funds {
  // Access using value property
  // Can use prototype.valueOf method if necessary
  value: Map<Address, bigint>;

  constructor(value: Map<Address, bigint> = new Map()) {
    this.value = value;
  }

  // isNonZero returns true if the Holdings structure has any non-zero asset
  isNonZero(): boolean {
    for (const asset in this.value) {
      if (this.value.has(asset)) {
        const value = this.value.get(asset);

        if (value !== undefined && value > BigInt(0)) {
          return true;
        }
      }
    }

    return false;
  }

  // Add returns the sum of the receiver and the input Funds objects
  add(...a: Funds[]): Funds {
    a.push(this);
    return Funds.sum(...a);
  }

  static sum(...a: Funds[]): Funds {
    const sum = new Funds();

    for (const funds of a) {
      for (const asset in funds.value) {
        if (funds.value.has(asset)) {
          const amount = funds.value.get(asset)!;

          if (!sum.value.get(asset)) {
            sum.value.set(asset, BigInt(0));
          }

          sum.value.set(asset, sum.value.get(asset)! + amount);
        }
      }
    }

    return sum;
  }

  // clone returns a deep copy of the receiver.
  clone(): Funds {
    return Funds.sum(this, new Funds());
  }
}