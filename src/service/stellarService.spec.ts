import {keypairFromAccount} from "./cryptoService";
import {generateAccount, loadAcount} from "./stellarService";

const seedPhrase: string = "treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass";


const keypair = keypairFromAccount(seedPhrase, 0); // see cryptoService

describe('stellar', () => {
    // can only be done the once and generating an account for every tests isn't particulary good 💩
    it.skip('should generate an account', () => {
        generateAccount(keypair);
    });
    it('should load an account', async () => {
        let accountResponse = await loadAcount(keypair);
        expect(accountResponse.accountId()).toBe('GBTJEFDDMA5N4TDBFLJGA6K3MQFNHR2KUUFYAKYCOAEE43JD4CP3UTQC');
    });
},);