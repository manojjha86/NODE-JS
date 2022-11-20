const events = require('events');

module.exports = class extends events.EventEmitter{
    constructor(){
        super();
    }
}