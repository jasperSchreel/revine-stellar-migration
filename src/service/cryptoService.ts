import {mnemonicToEntropy} from "bip39";
import {SiaBinaryEncoder} from "../tfchain/tfchain.encoding.siabin";
import {blake2b} from "@waves/ts-lib-crypto";
import {Keypair} from "stellar-sdk";
import {decodeHex} from "tweetnacl-ts";

export const keypairFromAccount: (seedPhrase: string, walletIndex: number) => Keypair = (seedPhrase: string, walletIndex: number) => {
    // gets run everytime, but is more convenient in usage
    const entropy: string = mnemonicToEntropy(seedPhrase);
    const seed: Uint8Array = decodeHex(entropy);

    const encoder = SiaBinaryEncoder();

    encoder.add_array(seed);
    encoder.add_int(walletIndex);

    // h in go file
    const blake2b1Hash: Uint8Array = blake2b(encoder.data);

    return Keypair.fromRawEd25519Seed(<Buffer>blake2b1Hash);
};