// // ## Part A — Encapsulation
// // ### A1) Wallet (Encapsulation Basics)

// // **Goal:** Manage cash safely with private balance.
// // **Must use:** private field `#amount`, public methods only.

// // **Features:**
// // - `addCash(value)` (positive only)
// // - `spend(value)` (must not go negative)
// // - `balance()` → returns current amount

// //     **Acceptance Criteria:**
// // - Direct access to `#amount` not allowed (keep a commented line to show it errors).
// // - Invalid inputs must not change state.

// // A1: Wallet (Encapsulation)
// class Wallet {
//   // TODO: #amount = 0
//     #amount = 0;

//   // TODO: addCash(value)
//     addCash(value) {
//         if(value > 0){
//             this.#amount += value;
//         }
//         else{
//             console.log("Invalid input");
//         }
//     }

//   // TODO: spend(value)
//     spend(value) {
//         if(value > 0 && value <= this.#amount){
//             this.#amount -= value;
//         }
//         else{
//             console.log("Invalid input or insufficient balance");
//         }
//     }

//   // TODO: balance()
//     balance() {
//         return this.#amount;
//     }
// }

// // TODO: demo code (create, add, spend, print balance)
// // NOTE: Do not access private field directly.

// //-------------------------------------------------------------------------------

// // ### A2) Thermostat (Encapsulation + Validation)
// // **Goal:** Control room temperature with safe range.
// // **Must use:** private field `#temp`.

// // **Features:**
// // - Default temp 24
// // - `increase()`, `decrease()`
// // - `setTemp(v)` only if `16 ≤ v ≤ 30`
// // - `current()`

// //     **Acceptance Criteria:**
// // - Out-of-range changes are rejected (log a message).
// // - Only public methods change temperature.

// // A2: Thermostat
// class Thermostat {
//   // TODO: #temp = 24
//     #temp = 24;

//   // TODO: increase()
//     increase() {
//         if(this.#temp <= 30 && this.#temp >= 16){
//             this.#temp++;
//         }
//         else{
//             console.log("Temperature cannot be increased beyond 30");
//         }
//     }

//   // TODO: decrease()
//     decrease() {
//         if(this.#temp >= 16 && this.#temp <= 30){
//             this.#temp--;
//         }
//         else{
//             console.log("Temperature cannot be decreased below 16");
//         }
//     }

//   // TODO: setTemp(v) // only 16..30
//     setTemp(v) {
//         if(v >= 16 && v <= 30){
//             this.#temp = v;
//         }
//         else{
//             console.log("Invalid temperature. Please set between 16 and 30.");
//         }
//     }

//   // TODO: current()
//     current() {
//         return this.#temp;
//     }
// }

// // TODO: demo: change temp, invalid set, log current

// //-------------------------------------------------------------------------------

// // ### A3) LibraryCard (Encapsulation + Counters)
// // **Goal:** Track borrowed books count safely.
// // **Must use:** private field `#borrowed`.

// // **Features:**
// // - `borrow()` increases count up to a limit (e.g., 5)
// // - `returnOne()` decreases count (not below 0)
// // - `count()`

// //     **Acceptance Criteria:**
// // - Cannot exceed limit; cannot go negative.

// // A3: LibraryCard
// class LibraryCard {
//   // TODO: #borrowed = 0
//   #borrowed = 0;
//   // TODO: #limit = 5
//   #limit = 5;

//   // TODO: borrow()
//   borrow(){
//     if(this.#borrowed < this.#limit ){
//         this.#borrowed ++;
//     }
//     else{
//         console.log("Reached the limit");
//     }
// }

//   // TODO: returnOne()
//   returnOne(){
//       if( this.#borrowed > 0){
//         this.#borrowed --;
//     }
//     else{
//         console.log("Borrowed amount cannot be negative");
//     }
//   }

//   // TODO: count()
//   count(){
//       console.log(this.#borrowed);
//     }
// }

// // TODO: demo: borrow till limit, return, try invalid operations
// let card = new LibraryCard();
// card.borrow();
// card.borrow();
// card.borrow();
// card.count();
// card.returnOne();
// card.count();
// card.returnOne();
// card.returnOne();
// card.returnOne();
// card.count();

// //-------------------------------------------------------------------------------

// // Part B — Inheritance
// // B1) Device → Phone / Laptop (Method Override)
// // Goal: Practice extends and overriding instance methods.
// // Classes:
// // Device(name) → info()
// // Phone(name, os) → override info()
// // Laptop(name, ram) → override info()
// // Acceptance Criteria:
// // super used only in constructor where needed.
// // Output clearly identifies type and details.

// // B1: Device → Phone/Laptop
// class Device {
//   // TODO: constructor(name)
//   // TODO: info()
//     constructor(name) {
//         this.name = name;
//     }
//     info() {
//         console.log(`Device Name: ${this.name}`);
//     }
// }

// class Phone extends Device {
//   // TODO: constructor(name, os)
//   // TODO: info() // override
//     constructor(name, os) {
//         super(name);
//         this.os = os;
//     }
//     info() {
//         console.log(`Device Name: ${this.name}, Operating System: ${this.os}`);
//     }
// }

// class Laptop extends Device {
//   // TODO: constructor(name, ram)
//   // TODO: info() // override
//     constructor(name, ram) {
//         super(name);
//         this.ram = ram;
//     }
//     info() {
//         console.log(`Device Name: ${this.name}, RAM: ${this.ram}GB`);
//     }
// }

// // TODO: demo with multiple instances
// let obj1 = new Device("Generic Device");
// obj1.info();

// let obj2 = new Phone("iPhone", "iOS");
// obj2.info();

// let obj3 = new Laptop("Dell XPS", 16);
// obj3.info();

// //-------------------------------------------------------------------------------

// // B2) Employee → Manager / Intern (super + new fields)
// // Goal: Extend with additional properties and reuse base behavior.
// // Classes:
// // Employee(name) → intro()
// // Manager(name, dept) → override intro() and show dept (call super.intro())
// // Intern(name, durationMonths) → override intro()
// // Acceptance Criteria:
// // Overridden intro() must call super.intro() first in Manager.

// // B2: Employee → Manager/Intern
// class Employee {
//   // TODO: constructor(name)
//   // TODO: intro()
//   constructor(name){
//     this.name = name;
//   }
//   info(){
//     console.log(`Employee Name: ${this.name}`);
//   }
// }

// class Manager extends Employee {
//   // TODO: constructor(name, dept)
//   // TODO: intro() // call super.intro() then log dept
//     constructor(name, dept) {
//         super(name);
//         this.dept = dept;
//     }
//     intro() {
//         super.info();
//         console.log(`Department: ${this.dept}`);
//     }
// }

// class Intern extends Employee {
//   // TODO: constructor(name, durationMonths)
//   // TODO: intro() // customized message
//   constructor(name, durationMonths) {
//     super(name);
//     this.durationMonths = durationMonths;
//   }
//     intro() {
//         console.log(`Intern Name: ${this.name}, Duration: ${this.durationMonths} months`);
//     }
// }

// // TODO: demo all three
// let obj1 = new Employee("Adi");
// obj1.info();

// let obj2 = new Manager("Sam", "Sales");
// obj2.intro();

// let obj3 = new Intern("Bob", 6);
// obj3.intro();

// //-------------------------------------------------------------------------------

// // B3) Content → Article / Video (Shared + Specific)
// // Goal: Show base + child-specific fields.
// // Classes:
// // Content(title) → details()
// // Article(title, wordCount) → override details()
// // Video(title, durationSec) → override details()
// // Acceptance Criteria:
// // Each subclass prints its specific metric clearly.

// // B3: Content → Article/Video
// class Content {
//   // TODO: constructor(title)
//   // TODO: details()
//     constructor(title) {
//         this.title = title;
//     }
//     details() {
//         console.log(`Content Title: ${this.title}`);
//     }
// }

// class Article extends Content {
//   // TODO: constructor(title, wordCount)
//   // TODO: details() // override
//     constructor(title, wordCount) {
//         super(title);
//         this.wordCount = wordCount;
//     }
//     details() {
//         console.log(`Article Title: ${this.title}, Word Count: ${this.wordCount}`);
//     }
// }

// class Video extends Content {
//   // TODO: constructor(title, durationSec)
//   // TODO: details() // override
//     constructor(title, durationSec) {
//         super(title);
//         this.durationSec = durationSec;
//     }
//     details() {
//         console.log(`Video Title: ${this.title}, Duration: ${this.durationSec} seconds`);
//     }
// }

// // TODO: demo list of mixed contents

// let obj1 = new Content("Content");
// obj1.details();

// let obj2 = new Article("JavaScript Basics", 1200);
// obj2.details();

// let obj3 = new Video("JS", 300);
// obj3.details();

// //-------------------------------------------------------------------------------

// // Part C — Polymorphism
// // C1) Notifier Family (Same method, many forms)
// // Goal: Same method name, different outputs.
// // Classes:
// // Notifier → notify(msg)
// // EmailNotifier → override
// // SMSNotifier → override
// // Acceptance Criteria:
// // Iterate mixed array, call notify once each.

// // C1: Notifier Polymorphism
// class Notifier {
//   // TODO: notify(msg)
//     notify(msg) {
//         console.log(`Notification: ${msg}`);
//     }
// }
// class EmailNotifier extends Notifier {
//   // TODO: notify(msg) // override
//     notify(msg) {
//         console.log(`Email Notification: ${msg}`);
//     }
// }
// class SMSNotifier extends Notifier {
//   // TODO: notify(msg) // override
//     notify(msg) {
//         console.log(`SMS Notification: ${msg}`);
//     }
// }

// // TODO: demo: array of notifiers, call notify in a loop

// let notifiers = [ new Notifier(), new EmailNotifier(), new SMSNotifier()];
// notifiers.forEach(notifier => notifier.notify("Hello World!"));

// //-------------------------------------------------------------------------------

// // C2) Transport Fare (Different strategies)
// // Goal: Different fare logic per subclass.
// // Classes:
// // Transport → fare(km) (base default)
// // Bus → per-km fare
// // Taxi → base fare + per-km
// // Metro → slab-based fare (e.g., ≤5km: ₹10, ≤15km: ₹25, else ₹40)
// // Acceptance Criteria:
// // Loop through rides with varying km and print fares via single fare call.

// // C2: Transport Fare
// class Transport {
//   // TODO: fare(km) // default
//   fare(km) {
//       console.log(`Base fare for ${km} km: ₹${km*10}`);
//     }
// }
// class Bus extends Transport {
//   // TODO: fare(km) // per km
//     fare(km) {
//         console.log(`Bus fare for ${km} km: ₹${km*5}`);
//     }
// }
// class Taxi extends Transport {
//   // TODO: fare(km) // base + per km
//     fare(km) {
//         console.log(`Taxi fare for ${km} km: ₹${25 + (km * 15)}`);
//     }
// }
// class Metro extends Transport {
//   // TODO: fare(km) // slab rules
//     fare(km) {
//         let fare;
//         if(km <= 5){
//             fare = 10;
//         }
//         else if(km <= 15){
//             fare = 25;
//         }
//         else{
//             fare = 40;
//         }
//         console.log(`Metro fare for ${km} km: ₹${fare}`);
//     }
// }

// // TODO: demo: mixed transports + km array → loop → log fare

// let travel = [new Bus(), new Taxi(), new Metro()];
// let distances = [3, 10, 20];

// // travel.forEach(ride => {
// //     distances.forEach(km => ride.fare(km));
// // });

// for(let ride of travel){
//     for(let km of distances){
//         ride.fare(km);
//     }
// }

//-------------------------------------------------------------------------------

// C3) Shape Areas (Override area())
// Goal: Return numeric areas polymorphically.
// Classes:
// Shape → area() default 0
// Circle(r) → override
// Rectangle(w, h) → override
// Triangle(b, h) → override (0.5 * b * h)
// Acceptance Criteria:
// Sum total area of a mixed array in one loop.

// C3: Shape Areas
// class Shape {
//   // TODO: area()
//   area() {
//       console.log(0);;
//     }
// }
// class Circle extends Shape {
//   // TODO: constructor(r)
//   // TODO: area()
//     constructor(r) {
//         super();
//         this.r = r;
//     }
//     area() {
//         let area = this.r * this.r;
//         console.log(area);
//     }
// }
// class Rectangle extends Shape {
//   // TODO: constructor(w, h)
//   // TODO: area()
//     constructor(w, h) {
//         super();
//         this.w = w;
//         this.h = h;
//     }
//     area() {
//         let area = this.w * this.h;
//         console.log(area);
//     }
// }
// class Triangle extends Shape {
//   // TODO: constructor(b, h)
//   // TODO: area()
//     constructor(b, h) {
//         super();
//         this.b = b;
//         this.h = h;
//     }
//     area() {
//         let area = 0.5 * this.b * this.h;
//         console.log(area);
//     }
// }

// // TODO: demo: array of shapes → compute total area

// let shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];
// let totalArea = 0;
// for(let shape of shapes){
//     totalArea += shape.area();
// }
// console.log(`Total Area: ${totalArea}`);

//-------------------------------------------------------------------------------

// Part D — Abstraction
// D1) WashingMachine (Hide steps with private methods)
// Goal: Expose a simple start() that orchestrates hidden steps.
// Must use: private methods #fillWater, #wash, #rinse, #spin.
// Acceptance Criteria:
// Calling any private step directly should be impossible (keep commented line to indicate).

// D1: WashingMachine (Abstraction)
// class WashingMachine {
//   // TODO: start() → call private steps in order
//   start() {
//       this.#fillWater();
//       this.#wash();
//       this.#rinse();
//       this.#spin();
//       console.log("Washing cycle completed.");
//     }

//   // TODO: #fillWater()
//   #fillWater() {
//       console.log("Filling water...");
//     }

//   // TODO: #wash()
//   #wash() {
//       console.log("Washing clothes...");
//     }

//   // TODO: #rinse()
//   #rinse() {
//       console.log("Rinsing clothes...");
//     }

//   // TODO: #spin()
//   #spin() {
//       console.log("Spinning clothes...");
//     }
// }

// // TODO: demo: call start(); keep commented line calling a private method

// let machine = new WashingMachine();
// machine.start();

//-------------------------------------------------------------------------------

// D2) FileCompressor (Abstraction with private pipeline)
// Goal: compress(fileName) exposes high-level action only.
// Must use: #readFile, #pack, #writeArchive.
// Acceptance Criteria:
// Log messages indicate each internal step.

// D2: FileCompressor
// class FileCompressor {
//   // TODO: compress(fileName) → orchestrate private steps
//   compress(fileName) {
//       this.#readFile(fileName);
//       this.#pack();
//       this.#writeArchive(fileName);
//       console.log(`File ${fileName} compressed successfully.`);
//     }

//   // TODO: #readFile()
//   #readFile(fileName) {
//       console.log(`Reading file: ${fileName}...`);
//     }

//   // TODO: #pack()
//   #pack() {
//       console.log("Packing data...");
//     }

//   // TODO: #writeArchive()
//   #writeArchive(fileName) {
//       console.log(`Writing archive for: ${fileName}...`);
//     }
// }

// // TODO: demo: compress("report.pdf")
// let compressor = new FileCompressor();
// compressor.compress("report.pdf");

//-------------------------------------------------------------------------------

// D3) DoorLock (Private State + Public API)
// Goal: Hide PIN & expose setPin/unlock.
// Must use: private field #pin.
// Features:
// setPin(pin) → only 4 characters (string)
// unlock(tryPin) → logs success/failure
// Acceptance Criteria:
// Cannot read/change #pin directly.

// D3: DoorLock
// class DoorLock {
//   // TODO: #pin = ""
//   #pin = "";

//   // TODO: setPin(pin) // require 4 chars (string)
//   setPin(pin) {
//     if (typeof pin !== "string") {
//       console.log("PIN must be a string.");
//       return;
//     }
//     if (pin.length !== 4) {
//       console.log("PIN must be a 4-character.");
//       return;
//     }

//     this.#pin = pin;
//     console.log("PIN set successfully.");
//   }

//   // TODO: unlock(tryPin) // compare with #pin
//   unlock(tryPin) {
//     if (tryPin === this.#pin) {
//       console.log("Door unlocked successfully.");
//     } else {
//       console.log("Incorrect PIN. Access denied.");
//     }
//   }
// }

// // TODO: demo: set pin, try wrong & correct pin; avoid direct access
// let lock = new DoorLock();
// lock.setPin("1234047398");
// lock.setPin(1234);
// lock.setPin("1234");
// lock.unlock("123");
// lock.unlock("1234");


//-------------------------------------------------------------------------------

// Part E — Mixed Pillars (Mini-Projects)
// E1) Storage Family (Inheritance + Polymorphism)
// Goal: Same save(data) API with different behaviors.
// Classes:
// Storage → save(data) (base)
// MemoryStorage → stores into internal array
// FileStorage → logs “saved to file: …”
// Acceptance Criteria:
// Iterate a mixed array; call save uniformly.

// E1: Storage Family
class Storage {
  // TODO: save(data)
  save(data) {
      console.log(`Saving data: ${data}`);
    }
}
class MemoryStorage extends Storage {
  // TODO: constructor() // internal array
  // TODO: save(data)
    constructor() {
        super();
        this.dataArray = [];
    }   
    save(data) {
        this.dataArray.push(data);
        console.log(`Saved to memory: ${data}`);
    }
}
class FileStorage extends Storage {
  // TODO: save(data)
    save(data) {
        console.log(`Saved to file: ${data}`);
    }

}

// TODO: demo: mixed storages saving "hello"
let storages = [new MemoryStorage(), new FileStorage()];
storages.forEach(storage => storage.save("hello"));



//-------------------------------------------------------------------------------


// Part E — Mixed Pillars (Mini-Projects)
// E1) Storage Family (Inheritance + Polymorphism)
// Goal: Same save(data) API with different behaviors.
// Classes:
// Storage → save(data) (base)
// MemoryStorage → stores into internal array
// FileStorage → logs “saved to file: …”
// Acceptance Criteria:
// Iterate a mixed array; call save uniformly.

// E1: Storage Family
class Storage {
  // TODO: save(data)
}
class MemoryStorage extends Storage {
  // TODO: constructor() // internal array
  // TODO: save(data)
}
class FileStorage extends Storage {
  // TODO: save(data)
}

// TODO: demo: mixed storages saving "hello"

