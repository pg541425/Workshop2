//With constructor
// class a{
//     name;
//     name="Shivam";
//     show(){
//         console.log("My name "+this.name);
//     }
// }
// let obj=new a();
// obj.show();

//Without Constructor

// class aa{
//     constructor(name)
//     {
//         console.log("My name "+this.name);
//     }
// }
// let obj2=new hello1("Shivam");

class student {
    name;
    roll_no;
    city;
    id;
    constructor(name, roll_no, city, id) {
        this.name = name;
        this.roll_no = roll_no;
        this.city = city;
        this.id = id;
        console.log("Name : " + this.name);
        console.log("Roll no. : " + this.roll_no);
        console.log("City : " + this.city);
        console.log("Id : " + this.id);
    }
}
let s = new student("Shivam", 2503215300184, "UK", 101);
let s1 = new student("Priya", 2503215300185, "Delhi", 102);
let s2 = new student("Rahul", 2503215300186, "Mumbai", 103);
let s3 = new student("Anjali", 2503215300187, "Bangalore", 104);
let s4 = new student("Amit", 2503215300188, "Lucknow", 105);
console.log(s);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);