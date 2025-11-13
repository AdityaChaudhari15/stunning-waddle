//fetch
//to make http requests

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json();       //more methods like res.text(), res.blob(), res.formData(), res.arrayBuffer()
// })
// .then((data) => {
//     console.log(data[0]);     
// })
// .catch((err) => {
//     console.log("Error fetching data:", err);
// });



//assignment 2 create new 10 li items in ul using fetch


const ul = document.getElementById("userList");


fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json();
})
.then((data) => {
    data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
    });
})
.catch((err) => {
    console.log("Error fetching data:", err);
});



