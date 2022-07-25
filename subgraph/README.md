# Verified subgraphs 
The objective of this project is to create multiple sub graphs for indexing and querying payments, loans, issuing of security tokens, investments, trades and accounting for all these transactions on the Verified Network. The Verified Network is a decentralized network of regulated financial services providers that help issue and service traditional payments and investment products on the blockchain for Defi.  

This implementation follows the Verified SDK which provides a way for Dapp developers to create decentralized systems for regulation compliant payments, issuing of securities, investments and trading on the ethereum blockchain.

## How does the Verified subgraphs work ?
1. Verified account holders (wallets on the Verified Network) are entities on the Verified subgraph. It is possible to query the subgraph to check asset balances and operations related to each user - for example, digital cash balances, cash deposits, cash redemptions for fiat withdrawal, cash payments, bonds issued (ie, loans taken), bond purchases (ie, money lent), bond redemptions (ie, loan repayments), bond liquidations (ie, loan defaults), securities issued, securities invested in, trade orders created, trades filled, trade settlements completed.

2. Digital cash on the Verified Network that represent multiple fiat currencies are also entities on the Verified subgraph. It is possible to query the subgraph for digital cash balances and operations - for example, balances and deposits by currency, payment transfers by currency, loans taken and underwritten by currency, securities denominated in and investments made by currency, and more. 

3. Transactions on the Verified Network are accounted for in a double entry book keeping system on the blockchain where Verified account holders (wallets on the Verified Network) are creators of ledgers and accounts in each ledger. Using the Verified subgraph, it is possible to query a user's transaction statement by dates, voucher types (sales, journal, purchase, etc), currency of transactions, transaction type (credit or debit), and ledger and account names (which are usually counter parties of the Verified account holder).  

4. Digital investment products and securities issued are entities on the Verified subgraph. It is possible to query a product by its terms (for example, coupon, coupon payment frequency, next payment due, tenure, etc), asset class, and more. One or more securities may be issued for a product and using the Verified subgraph, it is possible to query securities issued by its identifier (usually a ISIN number), and query a security's credit rating, corporate actions, price history, and holders.  

5. Investments and Trades in digital securities on the Verified Network are entities on the Verified subgraph. It is possible to query the Verified subgraph on investments made by Verified account holders (wallets on the Verified Network) and trade orders created, edited, cancelled, filled and settled for secondary investments made on the Verified Network.

# Cloning This Repository

```shell
$> npm install -g @graphprotocol/graph-cli 
$> git clone https://github.com/verified-network/verified-graph.git
$> cd verified-graph
$> graph codegen
$> graph build
```

## Queries

### To do:

*NOTE:* Currently this reference implementation is under development and NOT FOR PRODUCTION.

