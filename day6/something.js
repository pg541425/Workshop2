//Rest Operator
function sum(name, ...args){
    console.log(args);
    let total=0;
    for(let i of args){
        total=total+i;
    }
    console.log("Hello "+name);
    console.log("Total = "+total);
}

sum("Shivam", 10,20,30,40);

//Spread Operator

