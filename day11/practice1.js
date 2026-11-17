const EventEmitter = require('event');
const B = new EventEmitter();
B.on('triggered', (name, roll_no) => {
  console.log(`Welcome to class ${name}`);
  console.log(`Your roll no. ${roll_no}`);
});
B.emit('triggered', 'John', 101);
