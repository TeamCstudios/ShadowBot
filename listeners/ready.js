const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
        let ownerUser = await this.client.users.fetch(this.client.ownerID.toLowerCase())

        console.log(`It has been ${this.n} milliseconds since Jan 1, 1970.
No errors found during boot process.
Welcome, ${ownerUser.tag}`)
    }
}

module.exports = ReadyListener;