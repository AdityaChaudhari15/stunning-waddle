// Reverse Number Triangle
 
// let n = 4;
 
// 4 3 2 1
// 3 2 1
// 2 1
// 1

// function rev(n){
//     let a = n;
//     for(let i=0; i<n; i++){
//         for(let j=a; j>0; j--){
//             process.stdout.write(`${j}`);
//         }
//         console.log();
//         a--;
//     }
// }
// rev(4)

//transpose a matrix

// let mat = [[1,2,3],
//             [4,5,6],
//             [7,8,9]];

// function trans(mat){
//     let temp = [];
//     for(let i=0; i<mat[0].length; i++){
//         temp[i] = [];
//         for(let j=0; j<mat.length; j++){
//             temp[i][j]=mat[j][i];
//         }
//     }
//     console.log(temp);
// }
// trans(mat)

// let n = 245;
// for(let i=0; i<5; i++){
//     console.log(n%10)
// }

// let arr = ["dog", "cat", "zebra", "ant"];
// let a = arr.charAt([0][0]);
// // let b = String.fromCharCode(a);
// console.log(a);

// let num = 24945945;
// let a = num.length;
// console.log(a);

// let arr = ["adf","qwert"]
// console.log(arr[0].length);

// const arr = [2, 4, 6, 8];
// // TODO: Use forEach to print value + index
// // TODO: Find and print total sum
// let sum = 0;
// arr.forEach((value, index) => {
//   console.log(`Index: ${index}, Value: ${value}`);
//   sum += value;
// });


// function applyToEach(arr, cb) {
//   // TODO: Run cb for each element of arr
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// }

// applyToEach([10, 20, 30], (v, i) => {
//   console.log(i, v);
// });

// function fetchData(url, callback) {
//   // TODO: After 800ms, call callback with { message: "hello world" }
//     setTimeout(() => {
//         const data = { message: "hello world" };
//         callback(data);
//     }, 800);
// }

// function handleData(data) {
//   // TODO: Print data.message in uppercase
//     console.log(data.message.toUpperCase());
// }

// fetchData("example.com", handleData);



// function getUser(id) {
//   // TODO: Return a Promise with setTimeout(700ms)
//     return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     const data = { message: "Here is data required" };
//                     resolve(data);
//                     reject(new Error("Error fetching data"));
//                 }, 2000);
//     });
// }

// getUser(1)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// getUser(0)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));



// TODO: fetch -> res.json() -> get names using map()
// TODO: print names or handle error using .catch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(users => {
//     const names = users.map(u => u.name);
//     console.log(names);
//   })
//   .catch(e => console.log("ERR:", e.message));



async function getInfo() {
  // TODO: fetch -> await res.json()
  // TODO: print count and first email
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("Count:", users.length);
        console.log("First email:", users[0].email);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getInfo();
            