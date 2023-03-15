// BankAccount is an abstract class that encapsulates the data and methods related to a bank account
class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._balance = balance;
  }

  // Methods that will be overridden in the derived classes
  deposit(amount) {
    throw new Error("Method not implemented");
  }

  withdraw(amount) {
    throw new Error("Method not implemented");
  }

  // Getters and setters for accountNumber and accountHolder
  get accountNumber() {
    return this._accountNumber;
  }

  set accountHolder(value) {
    this._accountHolder = value;
  }

  get accountHolder() {
    return this._accountHolder;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }
}

// SavingsAccount is a subclass of BankAccount that overrides the deposit method
class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    super(accountNumber, accountHolder, balance);
    this._interestRate = 0.02; // Set default interest rate
  }

  // Override the deposit method to add interest
  deposit(amount) {
    const interest = amount * this._interestRate;
    this._balance += amount + interest;
    console.log(
      `Deposited ${amount.toFixed(2)} and added ${interest.toFixed(
        2
      )} in interest to account ${this._accountNumber}`
    );
  }

  // Override the withdraw method to prevent overdrafts
  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(
        `Withdrew ${amount.toFixed(2)} from account ${this._accountNumber}`
      );
    } else {
      console.log("Insufficient funds for withdrawal");
    }
  }
}

// CheckingAccount is a subclass of BankAccount that overloads the withdraw method
class CheckingAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    super(accountNumber, accountHolder, balance);
    this._overdraftLimit = -200; // Set default overdraft limit
  }

  // Overload the withdraw method to allow overdrafts up to the limit
  withdraw(amount) {
    const newBalance = this._balance - amount;
    if (newBalance >= this._overdraftLimit) {
      this._balance = newBalance;
      console.log(
        `Withdrew ${amount.toFixed(2)} from account ${this._accountNumber}`
      );
    } else {
      console.log("Exceeded overdraft limit");
    }
  }
}
