let a={
    name:"aman",
    marks:70,
    addMarks:function(){
        this.marks+=5;
    },
    display:function(){
        console.log("Marks: "+this.marks);
        console.log("Name: "+this.name);
    }
}
a.display();
a.addMarks();
a.display();