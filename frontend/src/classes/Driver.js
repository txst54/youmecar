class Driver {
    constructor(name, carDescription, licensePlate, seatCapacity, isApproved, events) {
        // name of driver
        this.name = name;
        // description of car (make, model)
        this.carDescription = carDescription;
        // color
        this.carColor = Color;
        // license plate of car
        this.licensePlate = licensePlate;
        // seat capacity of car
        this.seatCapacity = seatCapacity;
        this.isApproved = isApproved;
        this.location = location;
        this.events = events;
    }

    inEvent(event) {
        for (let e in this.events) {
            if (e.equals(event)) {
                return true;
            }
        }
        return false;
    } 
}