import {SiaBinaryEncoder} from "./tfchain/tfchain.encoding.siabin";
import {base64Encode, blake2b} from "@waves/ts-lib-crypto";
import {mnemonicToEntropy} from "bip39";
import {sign_keyPair_fromSeed} from "tweetnacl-ts";
import {ByteArray} from "tweetnacl-ts/src/array";

// const seedPhrase: string = "weird derive razor only rally vault pulse live ignore wet kick tonight quiz host always vintage inmate garbage cherry blue target check february slide";
const seedPhrase: string = "intact planet sunset mad possible peanut enrich hollow reopen cannon silk pledge double spot stick lyrics clean wagon upgrade cluster van picnic steel master";

const entropy: string = mnemonicToEntropy(seedPhrase);

const convertHexstringToEntropy: (hexString: string) => Uint8Array = (hexString: string) => {
    return new Uint8Array(
        hexString
            .match(/.{1,2}/g)
            .map(
                byte => parseInt(byte, 16)
            )
    );
};

const seed: Uint8Array = convertHexstringToEntropy(entropy);


type KeyPair = {
    publicKey: ByteArray;
    secretKey: ByteArray;
};

for (let i = 0; i < 4; i++) {
    const encoder = SiaBinaryEncoder();

    encoder.add_array(seed);
    encoder.add_int(i);

    // h in go file
    const blake2b1Hash: Uint8Array = blake2b(encoder.data);

    // console.log(`hash ${i}:"${base64Encode(blake2b1Hash)}"`);
    const keyPair: KeyPair = sign_keyPair_fromSeed(blake2b1Hash);
    console.log(`pubkey:"${base64Encode(keyPair.publicKey)}"`)
    // console.log(`secretKey:"${base64Encode(keyPair.secretKey)}"`)
}

