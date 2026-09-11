//Object with multi functions
let c={
    age:20,
    job:"Teacher",
    details:function(){
        console.log("My age is: "+this.age);
        console.log("My job is: "+this.job);
    },
    profile:"assistant professor",
    job_title:function(){
        console.log("My job title is: "+this.job);
        console.log("My profile is: "+this.profile);
    }
}

//--------------same function with different object
function show(){
    console.log("My address is: "+this.address);
    console.log("My city is: "+this.city);;
}
e={
    address:"abes college",
    city:"Ghaziabad",
    show:show
};
f={
    address:"College of Engineering near Crossing Republic",
    city:"Ghaziabad",
    show:show
};

e.show();
f.show();