import {KeyPair} from "../types";
import {mnemonicToEntropy} from "bip39";
import {SiaBinaryEncoder} from "../tfchain/tfchain.encoding.siabin";
import {blake2b} from "@waves/ts-lib-crypto";
import {sign_keyPair_fromSeed} from "tweetnacl-ts";

const convertHexstringToEntropy: (hexString: string) => Uint8Array = (hexString: string) => {
    return new Uint8Array(
        hexString
            .match(/.{1,2}/g)
            .map(
                byte => parseInt(byte, 16)
            )
    );
};
export const keypairFromAccount: (seedPhrase: string, walletIndex: number) => KeyPair = (seedPhrase: string, walletIndex: number) => {
    // gets run everytime, but is more convenient in usage
    const entropy: string = mnemonicToEntropy(seedPhrase);
    const seed: Uint8Array = convertHexstringToEntropy(entropy);

    const encoder = SiaBinaryEncoder();

    encoder.add_array(seed);
    encoder.add_int(walletIndex);

    // h in go file
    const blake2b1Hash: Uint8Array = blake2b(encoder.data);

    const keyPair: KeyPair = sign_keyPair_fromSeed(blake2b1Hash);
    return keyPair;
};