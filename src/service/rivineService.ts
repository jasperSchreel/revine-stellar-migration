import {Keypair, StrKey} from "stellar-sdk";
import {encodeHex} from "tweetnacl-ts";

export const convertStellarAddressToRivine: (pair: Keypair) => string = (pair: Keypair) => {
//back to rivine
    const stellarAddress = pair.publicKey();
    const decodedStellarPK = StrKey.decodeEd25519PublicKey(stellarAddress);

    return encodeHex(decodedStellarPK);
// rivineFromstellarUnlockHash, err := StrKey.NewEd25519PubKeyUnlockHash(rivinePublicKey)
// if err != nil {
//     panic("ERROR generating the rivine unlockhash from the decoded stellar address")
// }
// fmt.Println("Rivine address from Stellar address:", rivineFromstellarUnlockHash.String())
//     return rivineFromstellarUnlockHash
};

