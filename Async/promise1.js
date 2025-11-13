// Promise.all()
// Promise.any()




// Promise.all()

// function orderPizza(name, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${name} arrived`);
//         }, time)
//     })
// }

// let p1 = orderPizza("Dominos", 2000);
// let p2 = orderPizza("Pizza Hut", 3000);
// let p3 = orderPizza("Mojo", 1500);

// Promise.all([p1, p2, p3])
// .then((results) => {
//     console.log(results);
//     console.log("All pizza arrived");
// })
// .catch((err) => {
//     console.log(err);
// })



// const p1 = Promise.resolve("Success 1");
// const p2 = Promise.reject("Failed 2");
// const p3 = Promise.resolve("Success 3");
// const p4 = Promise.reject("Failed 4");

// Promise.all([p1, p2, p3, p4])
// .then((results) => {
//     console.log(results);
// })
// .catch((err) => {
//     console.log(err);
// })



// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData, postData, commentData])
//     .then((responses) => {
//         return Promise.all(responses.map((res) => {
//             return res.json()
//         }))
//     })
//     .then((data) => {
//         console.log("User: ", data[0])
//         console.log("POst: ", data[1]);
//         console.log("Comment: ", data[2]);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// parallel
// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }

// Promise.all([
//   fakeAPI("Task 1", 2000),
//   fakeAPI("Task 2", 3000),
//   fakeAPI("Task 3", 1000)
// ])

// fakeAPI("Task 1", 2000)
// .then(()=>{
//     return fakeAPI("Task 2", 3000);
// })
// .then(()=>{
//     return fakeAPI("Task 3", 1000);
// })
// .then(()=>{
//     console.log("✅ All done (Parallel)");
// })

// .then(function() {
//   console.log("✅ All done (Parallel)");
// });

//-----------------------------------------------------------------------------------------


// Promise.race()
// example - 1
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 2"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First resolved", result);
// })
// .catch((err) => {
//     console.log(err);
// })




// example - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 1"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("🏆 Promise 2 failed"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("🏆 Promise 3"), 3000));

// Promise.race([p1, p2, p3])
// .then((result) => {
//     console.log("First completed", result);
// })
// .catch((err) => {
//     console.log(err);
// })



// example - 3
// const pizzaDelivery = (name, time, shouldFail) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             shouldFail
//                 ? reject(`${name} failed ❌`)
//                 : resolve(`${name} delivered in ${time / 1000}s 🍕`);
//         }, time);
//     });
// };

// const dominos = pizzaDelivery("Dominos", 3000, false);
// const pizzaHut = pizzaDelivery("Pizza Hut", 2000, false);
// const mojo = pizzaDelivery("Mojo", 1000, false);

// Promise.race([dominos, pizzaHut, mojo])
// .then((result) => {
//     console.log("First completed", result);
// })
// .catch((err) => {
//     console.log(err);
// })


// API Timeout
// Timeout promise
const timeout = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => reject("⏰ Request timed out!"), ms);
});

// Fake API request
// const fakeAPI = new Promise(resolve => {
//     setTimeout(() => resolve("✅ Data received successfully"), 2000);
// });

// Run race between API & timeout
// Promise.race([fakeAPI, timeout(3000)])
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })



// predict output - 1
// const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast"), 1000));
// const medium = new Promise(resolve => setTimeout(() => resolve("🚗 Medium"), 2000));
// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));

// Promise.race([fast, medium, slow])
//   .then(res => console.log("Winner:", res));

// output - Winner: Fast


// predict output - 2
// const p1 = new Promise(resolve => setTimeout(() => resolve("✅ Success"), 3000));
// const p2 = new Promise((_, reject) => setTimeout(() => reject("❌ Error"), 1000));

// Promise.race([p1, p2])
//     .then(result => console.log("Result:", result))
//     .catch(error => console.log("Caught:", error));

    // Error


//----------------------------------------------------------------------------------------------------------

// ## Assignment 4 — One rejection cancels the group

// ### Instructions
// - Create `okAfter(ms)` that resolves with `OK after <ms>`.
// - Create `failAfter(ms)` that rejects with `Fail after <ms>`.
// - Call `Promise.all` with `[okAfter(500), failAfter(800), okAfter(400)]`.
// - Observe which handler runs. Log the error.

function okAfter(ms){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(`Ok after ${ms}ms`)
        },ms)
    })
}
function failAfter(ms){
    return new Promise((rej)=>{
        setTimeout(()=>{
            rej(`Fail after ${ms}ms`)
        },ms)
    })
}
Promise.all([okAfter(500), failAfter(800), okAfter(400)])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})