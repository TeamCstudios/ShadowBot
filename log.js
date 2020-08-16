class Log {
    static log = [];

    static add(input) {
        Log.log.push(input)
    }

    static get() {
        return Log.log;
    }

    static clear() {
        Log.log = [];
    }
}

module.exports = Log;
