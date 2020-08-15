class Prefix {
    static prefix = "!";

    static setPrefix(prefix) {
        Prefix.prefix = prefix;
    }

    static getPrefix() {
        return Prefix.prefix;
    }
}

module.exports = Prefix;
