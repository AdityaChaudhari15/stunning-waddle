// ## Part 1: Synchronous vs Asynchronous
// ### 📝 **Assignment 1 – Queue Simulation**
// Write a program that simulates a queue of people buying tickets.
// Each customer takes 1 second to get their ticket.
// **Requirements:**
// - Log `"Serving Customer 1"`, `"Serving Customer 2"`, etc.
// - All customers should be served **one after another (synchronously)**.

// function sellTickets(n){
//     for(let i=1; i<n; i++){
//         console.log(`Serving Customer ${i}`);
//     }
//     console.log("All Tickets Sold!");
// }
// sellTickets(5);

// --------------------------------------------------------------------------------------------------------------

// ### **Assignment 2 – Blocking Example**
// Create a function `longTask()` that runs a large `for` loop (like in your example).
// Then show how it **blocks** another `console.log("Done")` line.
// **Hint:** Compare the order of execution.

// function longTask(){
//     setTimeout(()=>{
//         for(let i=1; i<2e9; i++)
//         console.log(i);
//     });
//     console.log("done");
// }
// longTask();


// --------------------------------------------------------------------------------------------------------------

// ### 📝 **Assignment 3 – Async Fix**
// Convert the previous `longTask()` example into a **non-blocking** version using `setTimeout`.
// Make the “Done” message appear immediately, and “Long task finished” appear later.

// function longTask(n){
    //     setTimeout(()=>{
        //         console.log(n);
        //         n--;
        //         if(n===0){
            //             console.log("go");
            //             clearTimeout();
            //         }
            //         else{
                //             longTask(n);
                //         }
                //     }, 1000)
                // }
                // longTask(5);
                
// --------------------------------------------------------------------------------------------------------------


// ### **Assignment 4 – Countdown Timer**
// Write a program that counts down from `5` to `1`, printing one number per second.

// let n = 5;
// function countdown(){
    //     setTimeout(()=>{
        //         console.log(n);
//         n--;
//         if(n===1){
    //             clearTimeout();
    //             console.log(1);
    //         }
    //         else{
        //             countdown();
        //         }
        //     }, 1000);
        // }
        // countdown();


// --------------------------------------------------------------------------------------------------------------

// ### **Assignment 5 – Event Loop Order**
// Predict and verify the output:
// ```jsx
// console.log("Start");

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 0);

// console.log("End");

// ```
// **Task:**
// 1. Write what you *think* will print.
// 2. Then run it and explain **why** that order happens (in 2–3 lines). 
// ANSWER --> start, end, B, A;


// --------------------------------------------------------------------------------------------------------------



// ### **Assignment 6 – Cancel the Plan**
// Create a timeout that shows `"Meeting starts now!"` after 3 seconds.
// But if the user clicks a button `"Cancel Meeting"`, use `clearTimeout()` to stop it.

// let button = document.createElement("button");
// button.id = "cancelBtn";
// button.innerText = "Cancel Meeting";
// document.body.appendChild(button);

// let timeoutId = setTimeout(()=>{     
//     console.log("Meeting starts now!");
// }, 3000);

// document.getElementById("cancelBtn").addEventListener("click", ()=>{
//     clearTimeout(timeoutId);
//     console.log("Meeting Cancelled");
// });


// --------------------------------------------------------------------------------------------------------------


// ### **Assignment 8 – Digital Clock**
// Display a live updating clock in the browser that shows current time in `hh:mm:ss` format.

setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
},1000);


// --------------------------------------------------------------------------------------------------------------


// ### **Assignment 9 – Stop After 10 Seconds**
// Create a timer that logs `"Tick..."` every second but automatically stops after 10 seconds.
// Use `clearInterval()` when count reaches 10.

// let count = 0;
// const x = setInterval(() => {
//     count++;
//     console.log("Tick...");
//     if (count === 10) {
//         clearInterval(x);
//     }
// }, 1000);



// --------------------------------------------------------------------------------------------------------------


// Assignment 10 – Auto Slideshow Simulation
// You have an array of images:
// const images = ["img1", "img2", "img3"];

// Use setInterval() to log:
// Showing img1
// Showing img2
// Showing img3

// Loop back to the start after the last image.
// Stop the slideshow automatically after 2 full cycles.



// var images = ["img1", "img2", "img3"];
// var idx = 0;
// var cycles = 0;
// var totalCyclesToRun = 2;

// var slideId = setInterval(function () {
//   console.log("Showing " + images[idx]);
//   idx++;

//   if (idx === images.length) {
//     idx = 0;
//     cycles++;
//     if (cycles === totalCyclesToRun) {
//       clearInterval(slideId);
//       console.log("Stopped after " + totalCyclesToRun + " cycles.");
//     }
//   }
// }, 1000);