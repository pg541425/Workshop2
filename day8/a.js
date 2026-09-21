//Inheritance
class Employee{
    constructor(id,name,basicSalary){
        this.name=name;
        this.id=id;
        this.basicSalary=basicSalary;
    }
    calculateSalary(basicSalary){
        return this.basicSalary;
    }
}

//Derived Class
class Manager extends Employee{
    constructor(id,name,basicSalary,incentive){
    super(id,name,basicSalary);
    this.incentive=incentive;
    }

    calculateSalary(){
        return this.basicSalary+this.incentive;
    }
}
let emp1=new Employee(101,"Shivam",12000);
console.log(emp1.calculateSalary());

let emp2=new Manager(101,"Shatakshi",15000,3000);
console.log(emp2.calculateSalary());
