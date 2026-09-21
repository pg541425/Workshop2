// //Inheritance
// class Employee{
//     constructor(id,name,basicSalary){
//         this.name=name;
//         this.id=id;
//         this.basicSalary=basicSalary;
//     }
//     calculateSalary(basicSalary){
//         return this.basicSalary;
//     }
// }

// //Derived Class
// class Manager extends Employee{
//     constructor(id,name,basicSalary,incentive){
//     super(id,name,basicSalary);
//     this.incentive=incentive;
//     }

//     calculateSalary(){
//         return this.basicSalary+this.incentive;
//     }
// }
// let emp1=new Employee(101,"Shivam",12000);
// console.log(emp1.calculateSalary());

// let emp2=new Manager(101,"Shatakshi",15000,3000);
// console.log(emp2.calculateSalary());


// //Call Back Function
// function greeUser(name,callback){
//     console.log("Hello "+name);
//     callback();
// }

// greeUser("Bob", function(){
//     console.log("Callback function executed.");
// });

// console.log("Start ")
// setTimeout(function(){
//     console.log("Task Completed")
// },2000)

// console.log("End")


// //Synchronus

// console.log(10)
// console.log(20)
// console.log(40)
// console.log(50)

// //Async

// console.log("Start");

// setTimeout(function(){
//     console.log("Middle");
// }, 2000);
// console.log("End");

// //other Example

// function printName(){
//     console.log("Shivam")
// }
// printName();
// console.log("Welcome");

// function printName(){
//     setTimeout(()=>{
//         console.log("Shivam");
//     },2000);
// }
// printName();

// console.log("Welcome");


//Promise
let complet=true;

let prom=new Promise(function(resolve,reject){
    if(complet){
        resolve("I am true")
    }else{
        reject("I am not true")
    }
})
console.log(prom)