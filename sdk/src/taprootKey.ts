import assert from 'assert';
import { networks, payments } from 'bitcoinjs-lib';
import { tapTweakHash } from 'bitcoinjs-lib/src/payments/bip341.js';
import * as tinysecp from 'tiny-secp256k1';

export class TaprootKey {
  public readonly tweakedPrivkey: Uint8Array;
  public readonly internalPubkey: Buffer;
  public readonly tweakedPubkey: Buffer;
  public readonly address: string;
  public readonly output: Buffer;

  constructor(public readonly internalPrivkey: Uint8Array) {
    this.internalPubkey = Buffer.from(
      tinysecp.xOnlyPointFromScalar(internalPrivkey),
    );
    const tweak = tapTweakHash(this.internalPubkey, undefined);
    this.tweakedPrivkey = tinysecp.privateAdd(internalPrivkey, tweak)!;

    const walletP2tr = payments.p2tr({
      internalPubkey: this.internalPubkey,
      network: networks.testnet,
    });

    assert(walletP2tr.pubkey);
    assert(walletP2tr.address);
    assert(walletP2tr.output);
    this.tweakedPubkey = walletP2tr.pubkey;
    this.address = walletP2tr.address;
    this.output = walletP2tr.output;
  }
}
