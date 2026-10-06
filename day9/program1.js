// const { timeStamp } = require('console');
// const EventEmitter=require('events');
// //Here EventEmitter is  predeafined class
// const ud=new EventEmitter()

// ud.on('greet',(name)=>{
//     console.log(`Hello there ${name}`)
// })
// ud.on('exit',(num)=>{
//     console.log(`Thanks for visit ${num}`)
// })
// ud.emit('greet',"Shivam")
// ud.emit('exit',100)


// class Button extends EventEmitter{
//     click(){
//         console.log('Button was clicked')
//         this.emit('click',{timestamp:Date.now()});
//     }
// }
// const button=new Button()
// button.on('click',(event)=>{
//     console.log(`Click event fired at ${event.timestamp}`)
// })

// button.on("click",()=>{
//     console.log("Button Clicked");
// });
// button.click();

// console.log("start")
// setTimeout(()=>{
//     console.log("timeout")
// },2000)
// setImmediate(()=>{
//     console.log("Immediate")
// })
// process.nextTick(()=>{
//     console.log("Next tick")
// })

// const fs=require('fs')
// fs.writeFile("std.txt","Name: Shivam",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Done")
//     }
// })

fs.readFile("std.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data);
    }
});