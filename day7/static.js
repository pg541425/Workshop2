// //static property and method
// class Hello3{
//     static name="Example of static variable and method";
//     static show(){
//         console.log("Hello class this is "+Hello3.name);
//     }
// }
// Hello3.show();

// //static method with static variable
// class Hello4{
//     static name="Example of static method without static variable";
//     static show(){
//         console.log("Hello class this is "+Hello4.name);
//     }
// }
// Hello4.show();

// //static member with instance member
// class Hello5{
//     static name="Example of static method with instance varible";;
//     constructor(){
//         this.instanceVar="Instance variable";
//     }
//     show(){
//         console.log("Static variable: "+Hello5.name);
//         console.log("Instance variable: "+this.instanceVar);
//     }
// }
// let h5=new Hello5();
// h5.show();

// // static method with instance method without constructor
// class Student {
//     static info = "Example of static method with instance method without constructor";
//     static showStatic() {
//         console.log("Hello this is " + this.info);
//     }
//     showInstance() {
//         console.log("This is the instance method running.");
//     }
// }
// Student.showStatic();
// let h6 = new Student();
// h6.showInstance();

// class student2{
//     static name="Shivam";
//     static lastName="Gupta";
//     show(){
//         console.log(`firstname: ${student2.name}`);
//         console.log(`lastname ${student2.lastName}`);
//     }
// }
// //student2.show();
// let s4=new student2();
// s4.show();

// /*Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor
// Create an instance method displayResult() that displays student details and determines whether the
// student has passed. Create a static property/method to maintain and display the total number of Student objects created.
// Create at least three Student objects and demonstrate all methods.*/

// class Student {
//     static totalStudents = 0;
//     constructor(rollNo, name, marks) {
//         this.rollNo = rollNo;
//         this.name = name;
//         this.marks = marks;
//         Student.totalStudents++;
//     }
//     displayResult() {
//         let status = this.marks >= 40 ? "Passed" : "Failed";
//         console.log(`Roll No: ${this.rollNo} | Name: ${this.name} | Marks: ${this.marks} | Status: ${status}`);
//     }
//     static showTotalStudents() {
//         console.log(`\nTotal Student objects created: ${Student.totalStudents}`);
//     }
// }
// let s1 = new Student(1, "Rahul", 85);
// let s2 = new Student(2, "Priya", 32);
// let s3 = new Student(3, "Amit", 76);
// let s4 = new Student(4, "Neha", 91);
// s1.displayResult();
// s2.displayResult();
// s3.displayResult();
// s4.displayResult();
// Student.showTotalStudents();


/*Create a class BankAccount with accountNo, holderName and balance. Use a constructor to initialize
the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance()
Withdrawl should not be allowed when the requested amount is greater than the available balance.
Create a static method bankInfo() that displays the bank name and general banking information. Create
two account objects and perform different transactions on them*/

class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    static bankInfo() {
        console.log("=== Welcome to Global Trust Bank ===\n");
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount} into ${this.holderName}'s account. New Balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Withdrawal of Rs. ${amount} failed for ${this.holderName}. Insufficient funds!`);
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`Withdrew Rs. ${amount} from ${this.holderName}'s account. New Balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    displayBalance() {
        console.log(`Account No: ${this.accountNo} | Holder: ${this.holderName} | Current Balance: Rs. ${this.balance}`);
    }
}
BankAccount.bankInfo();

let acc1 = new BankAccount(101, "Aman", 5000);
let acc2 = new BankAccount(102, "Sita", 3000);

console.log("--- Transactions for Aman ---");
acc1.displayBalance();
acc1.deposit(2000);   
acc1.withdraw(1500);     
acc1.withdraw(8000);     
console.log("\n--- Transactions for Sita ---");
acc2.displayBalance();
acc2.withdraw(4000);      
acc2.deposit(1500);       
acc2.withdraw(4000);      
console.log("\n--- Final Account Details ---");
acc1.displayBalance();
acc2.displayBalance();