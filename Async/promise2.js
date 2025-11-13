//Promise.any()

//example
// const cab = (name,time, willArrive) =>
//     new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             willArrive
//                 ? resolve(`${name} confirmed`)
//                 : reject(`${name} confirmed`)
//         }, time)
//     });



// let uber = cab('uber',1333,false);
// let ola = cab('ola',4000,false);
// let rapido = cab('rapido',500,false);

// Promise.any([uber,ola,rapido])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


// ## Assignment 1 — All pizzas must arrive (Promise.all)

// ### Instructions
// - Reuse the pizza pattern: `orderPizza(name, time)` that always resolves with `"<name> arrived"`.
// - Create three promises: “Dominos” (1200), “Pizza Hut” (2000), “Mojo” (800).
// - Use `Promise.all` to wait for all.
// - Log the results array and then: “All pizza arrived”.

// const Pizza = (name, time) =>
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`${name} resolved`)
//         },time)
//     });

// let p1 = Pizza('dominos',1200);
// let p2 = Pizza('pizza hut',2000);
// let p3 = Pizza('mojo',800);

// Promise.all([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

//-------------------------------------------------------------------------------------------------------------------------------------------

// ## Assignment 2 — One failure cancels all (Promise.all)

// ### Instructions
// - Create four promises using `Promise.resolve`/`Promise.reject`:
// - `Promise.resolve("OK 1")`, `Promise.reject("Fail 2")`, `Promise.resolve("OK 3")`, `Promise.reject("Fail 4")`.
// - Pass all four to `Promise.all`.
// - Observe that `.catch` runs; log the error.

// let p1 = Promise.resolve("OK 1");
// let p2 = Promise.reject("Fail 2");
// let p3 = Promise.resolve("OK 3");
// let p4 = Promise.reject("Fail 4");

// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

//--------------------------------------------------------------------------------------------------------------------------------

// ## Assignment 3 — Multiple fetch and JSON parse (Promise.all + map)

// ### Instructions
// - Use three fetch calls (same style you used):
//     - users/1, posts/1, comments/1 from JSONPlaceholder.
// - First `Promise.all` waits for responses.
// - Then map responses to `res.json()` and run another `Promise.all`.
// - Finally, log “User: …”, “Post: …”, “Comment: …”.

// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
// .then((res)=>{
//     return Promise.all(res.map((r)=>{
//         return r.json();
//     }))
// })
// .then((data)=>{
//     console.log("user", data[0]);
//     console.log("post", data[1]);
//     console.log("comment", data[2]);
// })
// .catch((err)=>{
//     console.log(err);
// })


//--------------------------------------------------------------------------------------------------------------------------------------------


// ## Assignment 4 — Parallel vs Sequential (fakeAPI)

// ### Instructions
// - Implement `fakeAPI(name, delay)` that logs `"<name> completed"` and resolves `name` after `delay`.
// - Run **parallel** with `Promise.all` for: Task 1 (1500), Task 2 (1000), Task 3 (500). After completion, log “All done (Parallel)”.
// - Then run **sequential** chaining `then` for: Task 1 (1500) → Task 2 (1000) → Task 3 (500), and finally log “All done (Sequential)”.

// function fakeAPI(name, delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`${name} resolved`);
//         },delay)
//     })
// }

// let t1 = fakeAPI("Task 1", 1500)
// let t2 = fakeAPI("Task 2", 1000)
// let t3 = fakeAPI("Task 3", 500)

// Promise.all([t1,t2,t3])
// .then(()=>{
//     console.log("all done");
// })

// fakeAPI("Task 1", 1500)
// .then(() => {
//     return fakeAPI("task 2", 1000)
// })
// .then(() => {
//     return fakeAPI("task 3", 500)
// })
// .then(() => {
//     console.log("All done (sequential)");
// })


//-------------------------------------------------------------------------------------------------------

// ## Assignment 5 — Race: fastest success wins (Promise.race)

// ### Instructions
// - Create three promises that resolve:
//     - p1 after 2000 with “Promise 1”, p2 after 700 with “Promise 2”, p3 after 1200 with “Promise 3”.
// - Use `Promise.race` and log “First resolved:” with the winner.

const p1 = new Promise((resolve) => 
    setTimeout(() => 
        resolve("Promise 1"), 2000))
const p2 = new Promise((resolve) => 
    setTimeout(() => 
        resolve("Promise 2"), 700))
const p3 = new Promise((resolve) => 
    setTimeout(() => 
        resolve("Promise 3"), 1200));

Promise.race([p1, p2, p3])
.then((result) => {
    console.log("First resolved:", result); 
})
.catch((err) => {
    console.log(err);
})

