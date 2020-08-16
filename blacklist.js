class Blacklist {
    static list = [];

    static add(input) {
        Blacklist.list.push(input)
    }

    static remove(input) {
        const temp = Blacklist.list;
        Blacklist.clear();
        for(let i = 0; i < temp.length; i++) {
            if(temp[i] !== input) {
                Blacklist.add(temp[i]);
            }
        }
    }

    static get() {
        return Blacklist.list;
    }

    static clear() {
        Blacklist.list = [];
    }
}

module.exports = Blacklist;
