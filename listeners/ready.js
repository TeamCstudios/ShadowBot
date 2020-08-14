const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        console.log(`It has been ${this.n} milliseconds since Jan 1, 1970.
No errors found during boot process.
Welcome.`)
    }
}

module.exports = ReadyListener;