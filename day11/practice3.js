const fs=require('fs')
fs.writeFile("std.txt","Name: Shivam",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Done")
    }
})
fs.readFile("std.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data);
    }
});