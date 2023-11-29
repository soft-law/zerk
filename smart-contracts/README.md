# zerk

RWA AppChain

1. yarn Install

2. change name .env.example to .env and add values

3. yarn hardhat compile

4. deploy Principal in moonbeam / moonbase:
   yarn hardhat run scripts/deployPrincipal.ts --network moonbaseAlpha

5. deploy Satellite polygon / mumbai:
   yarn hardhat run scripts/deploySatellite.ts --network polygonMumbai

6. Mint autoToken crossChain (In construction)

7. Watch cross chain transaction Axelar scan
   mainnet: https://axelarscan.io/
   testnet: https://testnet.axelarscan.io/
