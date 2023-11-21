class Event {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
    equals(event) {
        if (event instanceof Event) {
            if (event.name === this.name && event.desc === this.desc) {
                return true;
            }
        }
        return false;
    }
}