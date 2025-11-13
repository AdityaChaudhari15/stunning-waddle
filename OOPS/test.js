class Transport {
  // TODO: fare(km) // default
  fare(km) {
      console.log(`Base fare for ${km} km: ₹${km*10}`);
    }
}
class Bus extends Transport {
  // TODO: fare(km) // per km
    fare(km) {
        console.log(`Bus fare for ${km} km: ₹${km*5}`);
    }
}
class Taxi extends Transport {
  // TODO: fare(km) // base + per km
    fare(km) {
        console.log(`Taxi fare for ${km} km: ₹${25 + (km * 15)}`);
    }
}
class Metro extends Transport {
  // TODO: fare(km) // slab rules
    fare(km) {
        let fare;
        if(km <= 5){
            fare = 10;
        }
        else if(km <= 15){
            fare = 25;
        }
        else{
            fare = 40;
        }
        console.log(`Metro fare for ${km} km: ₹${fare}`);
    }
}

// TODO: demo: mixed transports + km array → loop → log fare

let travel = [new Bus(), new Taxi(), new Metro()];
let distances = [3, 10, 20];

travel.forEach(ride => {
    distances.forEach(km => ride.fare(km));
});