type BankAccount = { money: number; deposite: (value: number) => void };

let bankAccount: BankAccount = {
  money: 5000,
  deposite(value: number): void {
    this.money += value;
  }
};

let mySelf: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "James",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

mySelf.bankAccount.deposite(3000);
console.log(mySelf);
