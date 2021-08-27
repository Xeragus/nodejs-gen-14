const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

// Publish-Subscribe Pattern, Listener
eventEmitter
  .on('max_found', data => {
    console.log('max_found event happened!');
    console.log(data);
  })
  .on('min_found', () => {
    console.log('min_found has happened!');
  });

module.exports = eventEmitter;