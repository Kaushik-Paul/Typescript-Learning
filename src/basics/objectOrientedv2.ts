class SeatArrangement {
    // Index signature property
    [seatNumber: string]: string;
}

let seats = new SeatArrangement();
seats["A1"] = "Mosh";
seats["A2"] = "Jack";
seats["A3"] = "Tony";
seats["A4"] = "Marshall";

console.log(seats.A1);


class Ride { 
    static _activeRide: number = 0;

    start() { Ride._activeRide++ ;}
    stop() { Ride._activeRide-- ;}

    static get activeRide() { return Ride._activeRide}
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log("Actice Rides: " + Ride.activeRide);
