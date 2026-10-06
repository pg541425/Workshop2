const EventEmitter = require('events');
class DOMElement extends EventEmitter {
  constructor(tagName) {
    super();
    this.tagName = tagName;
  }
  addEventListener(event, callback) {
    this.on(event, callback);
  }
  removeEventListener(event, callback) {
    this.off(event, callback);
  }

  // Method to simulate user click
  click() {
    const eventObject = {
      type: 'click',
      target: this.tagName,
      timestamp: Date.now()
    };
    this.emit('click', eventObject);
  }
}
const submitBtn = new DOMElement('BUTTON');

function handleClick(event) {
  console.log(`DOM event '${event.type}' triggered on <${event.target}> at ${event.timestamp}`);
}

submitBtn.addEventListener('click', handleClick);
submitBtn.click();
submitBtn.removeEventListener('click', handleClick);
submitBtn.click();