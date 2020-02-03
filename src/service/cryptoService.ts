import {mnemonicToEntropy} from "bip39";
import {SiaBinaryEncoder} from "../tfchain/tfchain.encoding.siabin";
import {blake2b} from "@waves/ts-lib-crypto";
import {Keypair} from "stellar-sdk";

const convertHexstringToBuffer: (hexString: string) => Uint8Array = (hexString: string) => {
    return new Uint8Array(
        hexString
            .match(/.{1,2}/g)
            .map(
                byte => parseInt(byte, 16)
            )
    );
};

const convertBufferToHexString: (Uint8Array) => string = buffer => {
    var s = '', h = '0123456789ABCDEF';
    (new Uint8Array(buffer)).forEach((v) => {
        s += h[v >> 4] + h[v & 15];
    });
    return s;
};
export const keypairFromAccount: (seedPhrase: string, walletIndex: number) => Keypair = (seedPhrase: string, walletIndex: number) => {
    // gets run everytime, but is more convenient in usage
    const entropy: string = mnemonicToEntropy(seedPhrase);
    const seed: Uint8Array = convertHexstringToBuffer(entropy);

    const encoder = SiaBinaryEncoder();

    encoder.add_array(seed);
    encoder.add_int(walletIndex);

    // h in go file
    const blake2b1Hash: Uint8Array = blake2b(encoder.data);

    return Keypair.fromRawEd25519Seed(<Buffer>blake2b1Hash);
};