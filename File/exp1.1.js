const EventEmitter = require('events');

class UserSession extends EventEmitter {
  greet(name) {
    console.log(`[Action] Greeting user...`);
    this.emit('greet', name);
  }

  exit(code) {
    console.log(`[Action] User exiting...`);
    this.emit('exit', code);
  }
}

const session = new UserSession();

session.on('greet', (name) => {
  console.log(`Event 'greet': Hello, ${name}! Welcome aboard.`);
});

session.on('exit', (code) => {
  console.log(`Event 'exit': Session closed with status code ${code}.`);
});

session.greet('Sakshi');
session.exit(0);