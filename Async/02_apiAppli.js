// Applicable for JSONPlaceholder
// GET - Returns real fake data (posts, users, comments)
// Works normally

// POST - Accepts your data and returns a fake response (id: 101)
// Does not really save it

// PUT - Returns your updated data
// Does not actually update anything

// DELETE - Returns an empty {}
// Does not really delete anything




// POST
// const newPost = {
//   title: "Fetch API is awesome!",
//   body: "This post was sent using a POST request.",
//   userId: 1
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newPost)
// })
// .then((res) => {
//     return res.json()
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })


// PUT
// const updatedPost = {
//   title: "Fetch API is awesome!",
//   body: "This post was sent using a POST request."
// };

// fetch("https://jsonplaceholder.typicode.com/posts/5", {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(updatedPost)
// })
// .then((res) => {
//     return res.json()
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })



// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "DELETE",
})
.then((res) => {
    return res.json()
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})
