import {keypairFromAccount} from "./service/cryptoService";
import {Keypair} from "stellar-sdk";
import {generateAccount} from "./service/stellarService";

export const convertTfAccount: (seedPhrase: string, walletAmount?: number, startIndex?: number) => Promise<void> = async (seedPhrase: string, walletAmount: number = 1, startIndex: number = 1) => {
    for (let i = 0; i < walletAmount; i++) {
        const pair: Keypair = keypairFromAccount(seedPhrase, startIndex + i);
        await generateAccount(pair);
    }
};
