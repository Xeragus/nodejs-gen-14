const eventEmitter = require('./listeners');

// ima kod za naogjanje na maksimum
eventEmitter.emit('max_found', { msg: 'hehehe' });
eventEmitter.emit('min_found');

// emituvanje nastan
// frlanje nastan
// ispukuvanje nastan