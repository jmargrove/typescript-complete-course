"use strict";
var bankAccount = {
    money: 5000,
    deposite: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: "James",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
mySelf.bankAccount.deposite(3000);
console.log(mySelf);
