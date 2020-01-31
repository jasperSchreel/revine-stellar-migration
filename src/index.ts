import {SiaBinaryEncoder} from "./tfchain/tfchain.encoding.siabin";
import {base64Decode, base64Encode, blake2b} from "@waves/ts-lib-crypto";
import {mnemonicToEntropy} from "bip39";
import {sign_keyPair_fromSeed} from "tweetnacl-ts";

const seedPhrase: string = "weird derive razor only rally vault pulse live ignore wet kick tonight quiz host always vintage inmate garbage cherry blue target check february slide";

const entropy = mnemonicToEntropy(seedPhrase);

const seed: Uint8Array = base64Decode(entropy);


for (let i = 0; i < 3; i++) {
    const encoder = SiaBinaryEncoder();

    encoder.add_array(seed);
    encoder.add_int(i);

    // console.log(encoder.data);
    // h in go file
    const blake2b1Hash = blake2b(encoder.data);

    console.log(`hash ${i}:"${base64Encode(blake2b1Hash)}"`);
    const keyPair = sign_keyPair_fromSeed(blake2b1Hash);
    console.log(`pubkey:"${base64Encode(keyPair.publicKey)}"`)

}

