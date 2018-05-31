const transactions = [
  { name: "Point A", type: "pickup", amount: 23 },
  { name: "Pickup on Wednesday", type: "pickup", amount: 70 },
  { name: "Transfer to affiliate", type: "transfer", amount: 5 }
];

/* The imperative way */

for (let i = 0; i < transactions.length; i++) {
  transactions[i].modified = new Date();
}

/* The declarative way */

const updatedTransactions = transactions.map(transaction => {
  transaction.modified = new Date();
  return transaction;
});

console.log("Imperative ....");
console.log(transactions);

console.log("Declarative ....");
console.log(updatedTransactions);
