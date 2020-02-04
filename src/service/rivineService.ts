import {Keypair, StrKey} from "stellar-sdk";
import {encodeHex} from "tweetnacl-ts";
import {tfwallet} from "../tfchain/tfchain.wallet";

export const convertStellarAddressToRivine: (pair: Keypair) => string = (pair: Keypair) => {
    throw new Error('not implemented yet');

    //back to rivine
    const stellarAddress = pair.publicKey();
    const decodedStellarPK = StrKey.decodeEd25519PublicKey(stellarAddress);
    tfwallet.return;
    encodeHex(decodedStellarPK);
    // rivineFromstellarUnlockHash, err := StrKey.NewEd25519PubKeyUnlockHash(rivinePublicKey)
    // if err != nil {
    //     panic("ERROR generating the rivine unlockhash from the decoded stellar address")
    // }
    // fmt.Println("Rivine address from Stellar address:", rivineFromstellarUnlockHash.String())
    //     return rivineFromstellarUnlockHash
};

