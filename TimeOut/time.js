// let count = 0;
// let x = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     clearInterval(x);
//   }
// }, 0);


let count = 0;
function repeat(){
    count++;
    console.log(count);
    setTimeout(repeat, 1000);
}
repeat();

