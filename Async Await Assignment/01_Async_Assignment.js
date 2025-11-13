// Assignment 1 — Hello Async/Await
// Goal: Use async + await to fetch and parse JSON.
// Instructions
// Create a function getTodo() that fetches https://jsonplaceholder.typicode.com/todos/1.
// Use async/await only (no .then()).
// Log the title.
// Add a basic try/catch.
// Acceptance Criteria
// Uses async/await.
// Logs only the title.
// Catches and logs errors.

async function getTodo() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json();
        console.log(data.title);
    } catch(err) {
        console.log(err.message);
    }
}

getTodo();