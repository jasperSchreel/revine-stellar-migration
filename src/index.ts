import {keypairFromAccount} from "./service/cryptoService";

export const convertTfAccount = (seedPhrase: string, walletAmount: number = 1, startIndex: number = 0) => {
    for (let i = 0; i < walletAmount; i++) {
        let pair = keypairFromAccount(seedPhrase, startIndex + i);
        console.log(pair);
    }
};
