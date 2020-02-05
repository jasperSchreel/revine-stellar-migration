import {AccountResponse, Keypair, Server} from "stellar-sdk";

// @todo: config
const serverURL = "https://horizon-testnet.stellar.org";

export const generateAccount: (pair: Keypair) => Promise<void> = async (pair: Keypair) => {
    const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(
            pair.publicKey()
        )}`
    );
    const responseJSON = await response.json();

    if (responseJSON?.detail?.includes('createAccountAlreadyExist')) {
        console.log("Account already generated");
        return;
    }
    console.log("SUCCESS! You have a new account :)");
};

export const loadAcount: (pair: Keypair) => Promise<AccountResponse> = async (pair: Keypair) => {
    const server = new Server(serverURL);
    return await server.loadAccount(pair.publicKey())
};