let employee={
    name:"Rahul",
    salary:1500,
    display:function(){
        console.log("Name : "+this.name);
        console.log("Salary : "+this.salary);
    },
    increaseSalary:function(){
        this.salary=this.salary+5000;
    }
}
employee.display();
employee.increaseSalary();
employee.display();