// ## Assignment 1
// ### Task
// Write a function `checkStock(product)` that:
// - Returns a Promise.
// - After 1 second, it should:
//     - resolve with `"In stock: <product>"` if the product is `"laptop"` or `"phone"`.
//     - reject with `"Out of stock: <product>"` for anything else.

// Then call the function for:
// - `"laptop"` → log the success message in `.then()`
// - `"tablet"` → log the error in `.catch()`

// Also, always log `"Stock check complete"` in `.finally()`.
// ### Expected behavior
// - For `"laptop"` it should log success.
// - For `"tablet"` it should log error.
// - In both cases, `.finally()` should run.

// function checkStock(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (product === "laptop" || product === "phone") {
//                 resolve(`In stock: ${product}`);
//             } else {
//                 reject(`Out of stock: ${product}`);
//             }
//         }, 1000);
//     });
// }

// checkStock("laptop")
//     .then(successMessage => {
//         console.log(successMessage);
//     })
//     .catch(errorMessage => {
//         console.log(errorMessage);
//     })
//     .finally(() => {
//         console.log("Stock check complete");
//     });
// checkStock("tablet")
//     .then(successMessage => {
//         console.log(successMessage);
//     })
//     .catch(errorMessage => {
//         console.log(errorMessage);
//     })
//     .finally(() => {
//         console.log("Stock check complete");
//     });



// --------------------------------------------------------------------------------------------------------------

// ## Assignment 2

// ### Task

// Simulate a 3-step onboarding flow:

// 1. `createAccount()` → resolves with a `userId`
// 2. `fetchUserProfile(userId)` → resolves with user profile object
// 3. `showWelcomeScreen(profile)` → resolves with `"Welcome <name>!"`

// Requirements:

// - Each function must return a Promise with a `setTimeout` to simulate delay.
// - Chain them using `.then()` (no nesting).
// - Add `.catch()` at the end to catch any failure.
// - Add `.finally()` for cleanup: `"Onboarding flow complete"`.

// ### Expected output flow (in order):

// - "Account created"
// - "Profile loaded for "
// - "Welcome !"
// - "Onboarding flow complete"


// function createAccount() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const userId = 1; // Simulated user ID
//             console.log("Account created");
//             resolve(userId);
//         }, 1000);
//     });
// }

// function fetchUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const profile = { id: userId, name: "Alice" }; // Simulated profile
//             console.log("Profile loaded for", profile.name);
//             resolve(profile);
//         }, 1000);
//     });
// }
// function showWelcomeScreen(profile) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const welcomeMessage = `Welcome ${profile.name}!`;
//             console.log(welcomeMessage);
//             resolve(welcomeMessage);
//         }, 1000);
//     });
// }

// createAccount()
//     .then((userId) => {
//         return fetchUserProfile(userId);
//     })
//     .then((profile) => {
//         return showWelcomeScreen(profile);
//     })
//     .then((msg) => {
//         // Final message already logged in showWelcomeScreen
//     })
//     .catch((err) => {
//         console.log("Error during onboarding:", err);
//     })
//     .finally(() => {
//         console.log("Onboarding flow complete");
//     })


// --------------------------------------------------------------------------------------------------------------

// ## Assignment 3

// ### Task

// You are given this "callback hell" version of steps:

// ```jsx
// setTimeout(() => {
//   console.log("Step 1: Preparing cart");
//   setTimeout(() => {
//     console.log("Step 2: Processing payment");
//     setTimeout(() => {
//       console.log("Step 3: Generating invoice");
//       setTimeout(() => {
//         console.log("Step 4: Sending email receipt");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ```

// Your job:

// 1. Create a helper function `runStep(stepName)` that returns a Promise.
// 2. Use it to rewrite the whole process using a clean `.then().then().then()...` chain.
// 3. At the end log `"Order complete ✅"`.


// function runStep(stepName) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(stepName);
//             resolve();
//         }, 1000);
//     });
// }

// runStep("Step 1: Preparing cart")
//     .then(() => runStep("Step 2: Processing payment"))
//     .then(() => runStep("Step 3: Generating invoice"))
//     .then(() => runStep("Step 4: Sending email receipt"))
//     .then(() => {
//         console.log("Order complete ✅");
//     })
//     .catch((err) => {
//         console.log("Error during order processing:", err);
//     })
//     .finally(() => {
//         console.log("Order process finished");
//     });




// # Promise APIs Assignments
// ## Assignment 1 — Run three tasks in parallel

// ### Instructions
// - Create a function `task(name, ms)` that returns a Promise resolving with the string:
//     `"<name> done in <ms> ms"` after `ms` milliseconds.
// - Start three tasks in parallel: A (1200), B (800), C (1500).
// - Use `Promise.all` to wait for all to finish.
// - Log the array of results, then log: `All tasks finished`.

// function task(name, ms) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log(`${name} done in ${ms}`);
//       resolve(name);
//     }, ms);
//   });
// }
// Promise.all([
//   task("A", 1200),
//   task("B", 800),
//   task("C", 1500)
// ])
// .then(function() {
//   console.log("✅ ALL TASKS FINISHED");
// });


//-------------------------------------------------------------------------------------------------------------------------------------

// ## Assignment 2 — Verify result order

// ### Instructions
// - Reuse `task(name, ms)`.
// - Run three tasks with different times: T1 (200), T2 (1200), T3 (600).
// - When `Promise.all` resolves, print the results array.
// - Also print: `First result is: <results[0]>`.
//     Confirm that the first array element corresponds to T1, even though it may not finish last by time.

// let task = (name, ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`${name} done in ${ms} ms`)
//         }, ms)
//     })
// }

// let p1 = task("T1", 200);
// let p2 = task("T2", 1200);
// let p3 = task("T3", 600);

// Promise.all([p1, p2, p3])
// .then((results) => {
//     console.log(results);
//     console.log(`First result is: ${results[0]}`);
//     console.log("All tasks finished");
// })
// .catch((err) => {
//     console.log(err);
// })

//----------------------------------------------------------------------------------------------------------------------------------------------

// ## Assignment 3 — Map values to async work

// ### Instructions
// - Create `convert(n, ms)` that resolves to `n * 2` after `ms` milliseconds.
// - Given `nums = [3, 5, 9, 10]`, map each to a `convert` promise with `300` milliseconds delay.
// - Use `Promise.all` to get all converted values.
// - Log the resulting array.

let convert = (n, ms) =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res(`${n*2} after ${ms}ms`)
        },ms)
    })
}

let nums = [3, 5, 9, 10];
let x = nums.map((n) =>{
    return convert(n, 300)
})

Promise.all(x)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})