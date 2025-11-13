// //calback function
//         // function fetchData(url, callback) {
//         //     setTimeout(() => {
//         //         const data = { message: "Here is data required" };
//         //         callback(data);
//         //     }, 2000);
//         // }
//         // function handleData(data) {
//         //     console.log(data.message);
//         // }
//         // fetchData("https://api.example.com/data", handleData);

// //promise function
//         function fetchDataPromise(url) {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     const data = { message: "Here is data required" };
//                     resolve(data);
//                     reject(new Error("Error fetching data"));
//                 }, 2000);
//             });
//         }

// //then catch
//         // fetchDataPromise("https://api.example.com/data")
//         //     .then((data) => {
//         //         console.log(data.message);  
//         //     })
//         //     .catch((error) => {
//         //         console.error(error);
//         //     });

// //async await
//         async function getData() {
//             try {
//                 const data = await fetchDataPromise("https://jsonplaceholder.typicode.com/");
//                 console.log(data.message);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         getData();

// //fetch
//     //then catch
//             fetch("https://jsonplaceholder.typicode.com/")
//                 .then((response) => {  
//                     return response.json();
//                 })
//                 .then((data) => {
//                     console.log(data);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching data:", error);
//                 });


//     //async await
//             async function fetchData() {
//                 try {
//                     const response = await fetch("https://jsonplaceholder.typicode.com/");
//                     const data = await response.json();
//                     console.log(data);
//                 } catch (error) {
//                     console.error("Error fetching data:", error);
//                 }
//             }
//             fetchData();


//--------------------------------------------------------------------------------------------------------------

// What is a Promise?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

// It acts as a placeholder for a future value — like when you order food online 🍕:
// - You place the order (the request starts),
// - The restaurant is preparing it (operation in progress), -> pending
// - Finally, it gets delivered (operation finished). -> fulfil
                                                        // -> reject



// Promise Constructor
// let fileUpload = new Promise((resolve, reject) => {
//     let uploadSpeed = 30;   //mbps

//     console.log("Uploading a file");
//     setTimeout(() => {
//         if(uploadSpeed > 50) {
//             resolve("File uploaded successfully ✅")
//         } else {
//             reject("File upload failed due to slow internet! ❌")
//         }
//     }, 2000)
// }); 

// fileUpload
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("File upload process finished!");
//     })


// let transaction = new Promise((resolve, reject) => {
//     let balance = 5000;
//     let amount = 3000;

//     console.log("Transaction being processed...");
//     setTimeout(() => {
//         if(balance >= amount) {
//             resolve("Transaction sucessful ✅")
//         } else {
//             reject("Insufficinet balance ❌")
//         }
//     }, 2000);
// });

// transaction
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Transaction process finished!");
//     })


//--------------------------------------------------------------------

// promise chaining
// login
// fetch user detail
// render dashboard
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("step 1: user logged in 👤")
//     }, 1500)
// })
// .then((msg) => {
//     console.log(msg);
//     return "step 2: fetched user detail 📦"
// })
// .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 3: rendered user dashboard 🖥️")
//         }, 1000);
//     })
// })
// .then((msg) => {
//     console.log(msg);

// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("rendering dashboard process completed!");
// })


//------------------------------------------------------------------------

// callback hell
// loginUser("jay@example.com", "1234", function (user) {
//     console.log("1️⃣ User logged in:", user);

//     getUserProfile(user.id, function (profile) {
//         console.log("2️⃣ User profile loaded:", profile);

//         getUserOrders(profile.id, function (orders) {
//             console.log("3️⃣ Orders fetched:", orders);

//             showDashboard(orders, function () {
//                 console.log("4️⃣ Dashboard shown!");
//             });
//         });
//     });
// });


// // promises
// function loginUser(email, password) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, email });
//         }, 1000);
//     });
// }

// function getUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: userId, name: "Jay", age: 26 });
//         }, 1000);
//     });
// }

// function getUserOrders(profileId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Order-101", "Order-102", "Order-103"]);
//         }, 1000);
//     });
// }

// function showDashboard(orders) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Dashboard displaying orders:", orders);
//             resolve("Dashboard Ready ✅");
//         }, 1000);
//     });
// }


// loginUser("adi", "abcd")
//     .then((user)=>{
//         console.log("1 User logged in:", user);
//         return getUserProfile(user.id);
//     })
//     .then((profile)=>{
//         console.log("2 User profile loaded:", profile);
//         return getUserOrders(profile.id);
//     })
//     .then((orders)=>{
//         console.log("3 Orders fetched:", orders);
//         return showDashboard(orders);
//     })
//     .then((msg)=>{
//         console.log("4", msg);
//     })
//     .catch((err)=>{
//         console.log("Error:", err);
//     })
//     .finally(()=>{
//         console.log("User dashboard process completed!");
//     })

//----------------------------------------------------------------------------------------------

//ex 2 : callback hell to promise chain

// setTimeout(() => {
//     console.log("step 1 completed");
//     setTimeout(() => {
//         console.log("step 2 completed");
//         setTimeout(() => {
//             console.log("step 3 completed");
//         }, 1000);
//     }, 1000);
// }, 1000);

//promise chain
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("step 1 completed");
//     }, 1000);
// })
// .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 2 completed");
//         }, 1000);
//     });
// })
// .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 3 completed");
//         }, 1000);
//     });
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log("Error:", err);
// })
// .finally(() => {
//     console.log("All steps completed!");
// })

//or

function delayTask(step, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${step} completed`);
        }, time);
    });
}

delayTask("1️⃣ Step 1", 1000)
    .then(() => delayTask("2️⃣ Step 2", 1000))
    .then(() => delayTask("3️⃣ Step 3", 1000))
    .then(() => console.log("✅ All steps completed"));