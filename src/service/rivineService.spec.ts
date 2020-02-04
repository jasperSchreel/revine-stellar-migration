import {keypairFromAccount} from "./cryptoService";
import {convertStellarAddressToRivine} from "./rivineService";

const seedPhrase: string = "treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass";


const keypair = keypairFromAccount(seedPhrase, 0); // see cryptoService

describe('rivine', () => {
    it('should convert adress from stellar to rivine', () => {
        const address = convertStellarAddressToRivine(keypair);
    });
});