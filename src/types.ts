import {ByteArray} from "tweetnacl-ts/src/array";

export type KeyPair = {
    publicKey: ByteArray;
    secretKey: ByteArray;
};