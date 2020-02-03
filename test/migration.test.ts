import {convertTfAccount} from "../src";
import {keypairFromAccount} from "../src/service/cryptoService";

/*
Test scenario
Generated seed: treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass
Private key (1st one generated from the seed): 1698405035c751f9cfb42089ce71345a03fa9a7ae66976e21299bfb3ebf37272
Generated address: 015c403d0bcf9b889c81a78cd4b93fbb27b6f31ef9c45ae73ed9c7ea3a01c938023160920f3d0b
Stellar Seed: SALJQQCQGXDVD6OPWQQITTTRGRNAH6U2PLTGS5XCCKM37M7L6NZHF7HN
Stellar address: GBTJEFDDMA5N4TDBFLJGA6K3MQFNHR2KUUFYAKYCOAEE43JD4CP3UTQC
Rivine address from Stellar address: 015c403d0bcf9b889c81a78cd4b93fbb27b6f31ef9c45ae73ed9c7ea3a01c938023160920f3d0b

Generated seed: treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass
Private key (2nd one generated from the seed): 7d88482f1b32b71bd6a5a7e35be0528924a710eb11f8c9e8a7c6de66ec6584f5
Generated address: 0115fcd76f2578cec7756ef7be1be75a872fc5c06235b44b545182f1fa49243a97a55b99e1b159
Stellar Seed: SB6YQSBPDMZLOG6WUWT6GW7AKKESJJYQ5MI7RSPIU7DN4ZXMMWCPLJE3
Stellar address: GCFN7ABBJYR2WMXX5YW55SZY5E6CVHZH6S6S6ZIWPAG4KNJ6TQOLOOYG
Rivine address from Stellar address: 0115fcd76f2578cec7756ef7be1be75a872fc5c06235b44b545182f1fa49243a97a55b99e1b159
 */

const seedPhrase: string = "treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass";

describe('migration', () => {
    it('should generate correct first stellar keypair', () => {
        const keypair = keypairFromAccount(seedPhrase, 0);

        expect(keypair.secret()).toBe("SALJQQCQGXDVD6OPWQQITTTRGRNAH6U2PLTGS5XCCKM37M7L6NZHF7HN");
        expect(keypair.publicKey()).toBe("GBTJEFDDMA5N4TDBFLJGA6K3MQFNHR2KUUFYAKYCOAEE43JD4CP3UTQC");

    });
    it('should generate correct second stellar keypair', () => {
        const keypair = keypairFromAccount(seedPhrase, 1);

        expect(keypair.secret()).toBe("SB6YQSBPDMZLOG6WUWT6GW7AKKESJJYQ5MI7RSPIU7DN4ZXMMWCPLJE3");
        expect(keypair.publicKey()).toBe("GCFN7ABBJYR2WMXX5YW55SZY5E6CVHZH6S6S6ZIWPAG4KNJ6TQOLOOYG");

    });
});
