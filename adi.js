// let (a,b,c)

// let largest=a ;
// if (b>largest) largest=b;
// if (c> largest) largest=c;

// let side1, side2;
// if (largest === a) {
//     side1=b;
//     side2=c;
// }

// if (largest === b) {
//     side1=a;
//     side2=c;
// }

// if (largest === c) {
//     side1=a;
//     side2=b;
// }

// const[h1,h2,v1,v2] = Input.split()

// for(let n=1; n<=5 ; n++){
//     console.log(n);
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// squares of number
// for(let i=1; i<=5; i++){
//     console.log(`Square of ${i} is ${i*i}`);
// }

// let sum=0
// for(let i=2; i<=50; i+=2){
//     sum=sum+i;
//     console.log(sum);
// }

// for(let i=10; i<=100; i+=10){
//     console.log(i);
// }

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// const num=2;
// for(let i=1; i<=10; i++){
//     console.log(num*i)
// }

// let num=1234;
// sum=0;
// while(num>0){
//     let rem =num%10;
//     sum = sum+rem;
//     num= Math.floor(num/10);
// }
// console.log(`${sum}`)

// let str="HELLO";
// for(let i=0; i<=str.length; i++){
//     console.log(str[i]);
// }

// let n=5;
// let fact=1;
// for(let i=1; i<=n; i++){
//     fact=fact*i;
//     console.log(fact);
// }

// let count=0;
// for(let i=0; i<=50; i++){
//     if(i%7===0){
//         count++;
//     }
// }console.log(count);

// fuctions:

// function greet(){
//     console.log("hello");
// }

// // function call:

// greet();

// function sum(a,b){
//     let res =a+b;
//     return res;
// }

// let x =sum(5,3)
// console.log(x);


// function percentage(a){
//     percent=a/340*100;
//     console.log(percent)
// }

// percentage(130)

// patterns
// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write("*");
//     }console.log();
// }

// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("*");
//     }console.log();
// }


// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${j}`);   //process.stdout.write(j.toString());
//     }console.log();
// }

// let n=5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${i}`);   //process.stdout.write(i.toString());
//     }console.log();
// }

// let n=5;
// for(let i=n; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("*");   //process.stdout.write(i.toString());
//     }console.log();
// }

// let n=4;
// for(let i=n; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${j}`);   //process.stdout.write(i.toString());
//     }console.log();
// }

// let n=4;
// sp=n-1;
// st=1;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=sp; j++){
//         process.stdout.write(" ");   //process.stdout.write(i.toString());
//     }
//     for(let k=1; k<=st; k++){
//         process.stdout.write("*");
//     }
//     sp--;
//     st+=2;
//     console.log();
// }

// let n=4;
// let sp=0;
// let st=n*2-1;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=sp; j++){
//         process.stdout.write(" ");   //process.stdout.write(i.toString());
//     }
//     for(let k=1; k<=st; k++){
//         process.stdout.write("*");
//     }
//     sp++;
//     st-=2;
//     console.log();
// }

// let n=4;
// let sp=n-1;
// let st=1;
// for(let i=1; i<=2*n; i++){
//     for(let j=1; j<=sp; j++){
//         process.stdout.write(" ");   //process.stdout.write(i.toString());
//     }
//     for(let k=1; k<=st; k++){
//         process.stdout.write("*");
//     }
//     if(i<=n-1){
//         sp--;
//         st+=2;
//     }
//     if(i==n){
//         sp=0;
//         st=2*n-1;
//     }
//     else{
//         sp++;
//         st-=2;
//     }
//     console.log();
// }

// let n=4;
// let st=1;
// for(let i=1; i<=2*n; i++){
//     for(let k=1; k<=st; k++){
//         process.stdout.write("*");
//     }
//     if(i<=n-1){
//         st++;
//     }
//     else if(i==n){
//         st=n-1;
//     }
//     else{
//         st--;
//     }
//     console.log();
// }
// console.log('');


//math.abs(-5);

// arrays
// let arr=[1,2,3,4];
// function doubleeachelem(arr){
//     let result=[];
//     for(let elem of arr){
//         result.push(elem*2);
//     }
//     return result;
// }
// let x= doubleeachelem(arr);
// console.log(x);


// function printelem(arr){
//     arr.forEach((num) => {
//         console.log(num);
//     });
// }
// let arr =[10,20,30];
// console.log(printelem(arr));

// function doubleusingmap(arr){
//         let newarr = arr.map((elem) => {
//             return elem*2;
//         });
//     return newarr;
// }

// let arr = [2,3,4];
// console.log(doubleusingmap(arr));

// function evennos(arr){
//     let filteredArr = arr.filter((elem) => {
//         return elem%2==0 ;
//     });
//     return filteredArr;
//      return arr.filter(elem => elem%2===0);
// }
// let arr = [2,3,4];
// console.log(evennos(arr));

// function addHi(arr){
//     return arr.map(name => `hi ${name}`)
// }
// console.log(addHi(["alice","bob"]));

// function CountPostitive(arr){
//     let count=0;
//     arr.forEach((elem)=>{
//         if(elem>0){
//             count++;
//         }
//     });
//     return count;
// }
// let arr = [-2,5,3,-1,0];
// console.log(CountPostitive(arr));

// function convertupper(arr){
//     let newarr = arr.map((elem) => {
//         return elem.toUpperCase();
//     });
//     return newarr;
// }
// let arr = ["apple","banana","orange"];
// let x = convertupper(arr);
// console.log(x);

// function greatertofifty(arr){
//     let filteredArr = arr.filter((elem) => {
//         return elem>50;
//     });
//     return filteredArr;
// }
// let arr = [10,60,45,80,30];
// let x = greatertofifty(arr);
// console.log(x);

// function elemwithindex(arr){
//     arr.forEach((elem, index) => {
//         console.log(index, elem);
        
//     });
// }
// let arr = ["x","y","z"];
// elemwithindex(arr)

// function addten(arr){
//     arr.map((elem) => {
//         return elem+10;
//     });
// }
// let arr =[1,2,3,4,5]
// console.log(addten(arr));

//2d array

// let arr = [[1,2],[3,4],[5,6]];
// console.log(arr);
// console.log(arr[1][1]);


// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }


//q1
// let arr=[]
// console.log();

//q2
// let marks =[[70,80],[90,100]];
// marks[1][0]=95;
// console.log(marks);


// let grid =[[1,2],[3,4],[5,6]];
// for(let i=0; i<grid.length; i++){
//     for(let j=0; j<grid[i].length; j++){
//         console.log(grid[i][j]);
        
//     }
// }

//q4
// let items = [[1,2,3],[4,5],[6]];
// let sum =0;
// for(let i=0; i<items.length; i++){
//     sum += items[i].length;
// }
// console.log(sum);


//q5
// let matrix = [[2,4],[6,8],[10,12]];
// let sum = 0;
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);

//q6
// let nested = [[1,2],[3,4],[5,6]];
// let newarr = [];      
// console.log(nested.flat());
// for(let i=0; i<nested.length; i++){
//     for(let j=0; j<nested[i].length; j++){
//         newarr.push(nested[i][j]);
//     }
// }
// console.log(newarr);

//q7
// let arr =[[10,20],[30,40],[50,60]];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i][0]);
// }

//q8
// let data = [[1,2],[3,4],[5,6]];
// for(let i=0; i<data.length; i++){
//     for(let j=0; j<data[i].length; j++){
//         if(data[i][j]%2==0){
//             data[i][j]=0;
//         }
//     }
// }
// console.log(data);

//q9
// let nums =[[2,5],[7,8],[9,12]];
// let count =0;
// for(let i=0; i<nums.length; i++){
//     for(let j=0; j<nums[i].length; j++){
//         if(nums[i][j]%2 !== 0){
//             count++
//         }
//     }
// }
// console.log(count);


// //q10
// let stu = [["amit","neha"],["jay","riya"]];
// stu.push(["pooja","simran"]);
// console.log(stu);

// let a =false;
// if(a==="false"){
//     console.log("equal");
    
// }
// else{
//     console.log('not equal');
    
// }

// let matrix = [[1,5,7],[8,2,9],[11,54,-9]];
// let sum = 0;
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);

// let matrix = [[1,5,7],[8,2,9],[11,54,-9]];
// let sum = 0;
// for(let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         if((matrix[i][j])%2==0){
//             sum++;
//         }
//     }
// }
// console.log(sum);


// let matrix = [[1,5,7],[8,2,9]];
// let rows = matrix.length;
// let cols = matrix[0].length;
// let newarr = [];
// for(let i=0; i<cols; i++){
//     newarr[i]=[];
//     for(let j=0; j<rows; j++)
//         newarr[i][j]=matrix[j][i];
// }
// console.log(newarr);

// let matrix = [[1,5,7],[8,2,9]];
// let sum =0;
// let lsum=0;
// let index = [];
// for(let i=0; i<matrix.length; i++){
//     let sum = 0;
//     for(let j=0; j<matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
//     if(sum>lsum){
//         lsum=sum;
//         index = i;
//     }
// }
// console.log(index);

// let nested = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
// let newarr = [];      
// console.log(nested.flat());
// for(let i=0; i<nested.length; i++){
//     for(let j=0; j<nested[i].length; j++){
//         newarr.push(nested[i][j]);
//         newarr.reverse();
//     }
// }
// console.log(newarr);

// const car = {
//     brand:"bmw",
//     color: "Grey",
//     start: function(){
//         console.log('engine started');
        
//     }
// }



// function AdiendsWith(str1, str2){
//     for(let i=str2.length-1; i>=0; i--){
//         for(j = str1.length-1; j>=0; j--){
//             if(str1.charAt(i)!==str2.charAt(j)){
//                 return false
//             }
//         }
//     }
//     return true
// }
// let a = "abcdef";
// let b = "def";
// console.log(AdiendsWith(a,b));

// function adiSplit(a,b){
//     for(i=)
// }

// Objects:-   26/06/2025
// let person = {
//     name : "Harsh",
//     age : 27,
//     place : "Pune",
//     // 1 : 1000    // will not give error, possible hai but nahi karna chahiye
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["place"]);

// console.log(person[1]);       // here dot notation will not work

// dot notation (.) -> exact property names
// [] notation -> for literals and variables


// Updation in Objects:
// person.name = "Raj";
// console.log(person);


// Adding in Objects:
// person.email = "harsh@gmail.com";
// console.log(person);


// Functions in Objects:
// let person = {
//     name : "Harsh",
//     age : 27,
//     place : "Pune",
//     // 1 : 1000    // will not give error, possible hai but nahi karna chahiye

//     greet : function() {
//         return "Hello";
//     }
// };
// console.log(person.greet());


// for in loop:
// for (let key in person) {
//     console.log(person[key]);
// }


// Built-in object methods:
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

//destructuring
//array destructuring
// let arr = [1,2,3,4];
// let one=arr[0];
// let two=arr[1];
// let three=arr[2];
// let four=arr[3];
// let[one, two, three, four, five=500]=arr;
// console.log(one, two, three, four, five);

//object destructuring
// let person = {
//     name : "Harsh",
//     age : 27,
//     place : "Pune",
// }
// let name = person.name;
// let age = person.age;
// let place = person.place;

// let{name:myname, age, place="mumbai"}=person;           //if place ="mumbai", finds the objet for place value if there is value then prints pune
// console.log(myname,age, place);

//spread operator
// let arr1=[2,4,6];
// // let arr2 = arr1;
// let arr2 = [...arr1, 10,20,30];
// arr1[0]=100;
// console.log(arr1);
// console.log(arr2);

//rest operator
// function sum(...numbers){
//     let sums = 0;
//     for(let i=0; i<numbers.length; i++){
//         sums += numbers[i];
//     }
//     return sums;
// }
// console.log(sum(3,4,5,6,7));

// let obj1 = {a:1,b:2};
// let obj2 = {b:3,c:4};
// let merged ={...obj1,...obj2};
// console.log(merged);    //{a:1,b:3,c:4}


// let[first,...rest]=[1,2,3,4];
// console.log(first);   //1
// console.log(rest);    //[2,3,4]

// let user = {name:"alice", age: 25, city:"mumbai"};
// let {name,...rest}=user;
// console.log(name);   //alice
// console.log(rest);  //(age:25, city:"mumbai")

// let obj = new object();
// obj.name = "raj";
// obj.age = 26;

//map
// let m1 = new Map();
// m1.set("name","raj");
// m1.set("age",26);
// m1.set("city","mumbai");
// // console.log(m1);
// // console.log(m1.get("age"));
// // console.log(m1.has("email"));

// //traversing
// // for(let[key,value] of m1){
// //     console.log(key, value);
// // }

// // let forEach((values,key) => {
// //     console.log(key, value);
// // });

// //keys()    -> for map
// console.log(m1.keys());

// //values()   -> for map
// console.log(m1.values());

// //entries()    -> for map
// console.log(m1.entries());


//json

// let user = {
//     name : "harsh",
//     age:23,
//     city: "pune"
// }

// let x = JSON.stringify(user);
// console.log(x);

// let y = JSON.parse(x);
// console.log(y);

// let str = "accio";
// console.log(str.concat("job"));

// console.log(str.trim());
// console.log(str.startsWith("b"));
// console.log();
// console.log(str.includes("ac"));

// let str2= str.toUpperCase();
// toLowerCase();
// console.log(str);
// console.log(str2);

// console.log((str.indexOf("c")));
// console.log(str.lastIndexOf("c"));

// Accessing character:
// console.log(str[0]);
// console.log(str.charAt(0));

// Length:
// console.log(str.length);

// Accessing individually:
// Using for loop -
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// Using for of -
// for (let elem of str) {
//     console.log(elem);
// }

//count vowels in a string

// function vowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ){
//             count++
//         }
//     }
//     console.log(count);
// }

// vowels("asdfghjkl");

//reverse a string
// function reverseString(str){

//     // let arr = str.split("");
//     // arr.reverse();
//     // return arr.join(" ");

//     return str.split("").reverse().join("")
//     // for(let i=str.length; i<str.length; i--){
//     //     newarr = n
//     // }
//     // console.log(arr);
// }
// console.log(reverseString("asdfghjkl"));

// //palindrome of a string
// function palindrome(str){
//     str.toLowerCase();
//     let arr = str.split("").reverse().join("");
    
//     if(arr == str){
//         console.log("Yes");
//     }
//     else{
//         console.log("No");
//     }
// }
// palindrome("adda");

//replace all spaces with dashes

// let str = "asd dfg ghj hjk kl";
// let x = str.replaceAll(" ", "_");
// console.log(x);

//count words in a sentence
// function countWords(str){
//     str.trim();
//     let count = 1;
//     for(let i=0; i<str.length; i++){
//         if(str[i]==" "){
//             count++
//         }
//     }
//     // return count;
//     return str.split(" ").length;   // or this method
// }
// console.log(countWords("asd dfg ghj jkl"));


//set
// let arr =[1,2,3,4,2,3,4,2,5];
// let s =new Set(arr);

// for(let elem of s){
//     console.log(elem);
// }

// s.forEach((elem) => {
//     console.log(elem);
// });

// console.log(s.size);

// s.clear();
// console.log(s);

// console.log((s.has(4)));

// s.delete(4);
// console.log(s);

// s.add(4);
// console.log(s);

// let arr2 = Array.from(s);
// console.log(arr2);

// let strs = ["flower","flow","flight"];
// console.log(strs[1].charAt(0));

// let arr = [1,2,2,3,4,5,5];
// let x = new Set(arr);
// console.log(x);

// let myarr = [...x];
// console.log(myarr.length);

// console.log(arr.slice(0,2));
// console.log(arr.slice(2,6));


// 1. What is RegEx?
// -> a pattern used to match characters in strings.
// It is used for:
// search
// match
// maniplate
// validation



// 2. How to create?
// a) Literal syntax:
// let pattern = /hello/;

// b) Constructor:
// let pattern = new RegExp("hello");



// 3. Common Methods
// test() - it works on pattern
// let text = "hello world";
// let pattern = /hello/;
// console.log(pattern.test(text));       // true

// let text = "learning acciojob course";
// let text = "learning accbjiojob course";
// let pattern = /accio/;
// console.log(pattern.test(text));       // false


// match() & exec() -
// let text = "hello hello";
// let pattern = /hello/g;              // g --> global flag
// console.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));   // will give null 
// console.log(pattern.exec(text));   // will again start from begenning


// replace() -
// let text = "hello hello world";
// console.log(text.replace(/hello/, "hi"));      // will only replace first hello
// console.log(text.replace(/hello/g, "hi"));      // g will help it to replace all hello


// search() -
// let text = "hello world";
// console.log(text.search(/world/));     // will return the index --> 6


// split() -
// let text = "apple, orange, grapes";
// console.log(text.split(/,/));


// exec() one more example -
// let text = "hellohhh";
// let pattern = /h/g;
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text));
// console.log(text.match(pattern));

//flags
//g

//i
// let text = "HELLO";
// console.log(/hello/i.test(text));

// console.log(/accio/i.test(text));

//m
// let text = "hello\nworld";
// console.log(/^world/m.test(text));

//anchors
//^
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));

//$
// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));

// \b (word boundary)
// let text = "hello there";
// let pattern = /\bhello\b/;
// console.log(pattern.test(text));

// \B 
// let text = "hello";
// let pattern = /\Bo/;
// console.log(pattern.test(text));

//quantifiers
// * : matches 0 or more items
// + : matches 1 or more items
// ? : 0 or 1 items

// let text = "aaab";
// let pattern = /a*/;
// let pattern = /a+/;
// let text = "";
// let pattern = /a?/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// {n} : matches exactly n times
// let text = "aaab";
// let pattern =/a{2}/;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// {n, } : matches n or more times
// let text = "aaaab";
// let pattern =/a{1,}/;
// console.log(pattern.exec(text));

// {n,m} : matches between n and m times
// let text = "aaaab";
// let pattern =/a{2,2}/;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

//sets and ranges
//character set [abc]

// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));

//negative characters set [^abc]

// let text = "cat";
// let pattern = /c[^aeiou]t/;
// console.log(pattern.test(text));

//ranges
//[a-x]
// let text = "g";
// console.log(/[a-z]/.test(text));

//[0-9]

//predefined character classes
// \d : any digit
// \w : any word charaacter (letter digit, underscore)
// \s : any whitespace character

// let text = "123abc";
// console.log(/\d/.test(text));
// console.log(/\d/.exec(text));

//dot character
//matches any characer except newline(\n)
// let text = "cat";
// console.log(/c.t/.test(text));

//q1
// let text = "say hello to everyone";
// let pattern = /\hello/;
// console.log(pattern.test(text));

//q2
// let text = "cat is a cat";
// let pattern = /\cat/;
// console.log(text.replace(/cat/g,"dog"));

//q3
// let text = "user123";
// let pattern = /\d/;
// console.log(pattern.test(text));

//q4
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));

//q5
// let text = "red,green,blue";
// console.log(text.split(/,/));

//q6
// let text ="HELLO";
// let pattern = /hello/i;
// console.log(pattern.test(text));

//q7
// let text = "HELLO";
// let pattern = /hello/$;
// console.log(pattern.test(text));

//q8
// let text = "banana";
// let result = text.match(/a/g);
// console.log(result);

//q9
// let text = "cut";
// let patteren = /c[aeiou]t/;
// console.log(patteren.test(text));

//q10
// let text = "cat";
// let pattern = /c.t/;
// console.log(pattern.test(text));

//q11
// let text = "12345";
// let pattern = /^\d+$/;
// console.log(pattern.test(text));

//q12
// let text = "aaa";
// let pattern = /a{3}/g;
// console.log(pattern.test(text));

//q13
// let text = "hhaha";
// let pattern = /h/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

//q14
// let text = "the end";
// let pattern = /\bthe\b/;
// console.log(pattern.test(text));

//q15
// let text = "A1b2";
// console.log(/[a-z]/.test(text));

//q16 (email validation)
// let text = "username@domain.com";
// let pattern = /^\w+@\w+\.\w+$/;  //  "/@/ || /.com+$/;"
// console.log(pattern.test(text));

//q17 (phone no validation)
// let text = "1234567890";
// let pattern = /^\d{10}$/;
// console.log(pattern.test(text));

//q18 (password validation)
// let text = "abcefg@123";
// let pattern = /^\w+@{6}\d/;
// console.log(pattern.test(text));

//arrow method
// hello();                      //error
// let hello = () => {
//     console.log("hello");
// }

//traditional method
// hello();                          //hello
// function hello(){
//     console.log("hello");
// }

// console.log(a);
// console.log(hello);

// const a = 5;

// hello();                      //error
// var hello = () => {
//     console.log("hello");
// }

// console.log(a);

//q21 (count the vowels in a string)
// let text = "a man having "
// let pattern = /[aeiou]/gi;
// let count = 0;
// for(let i = 0 ;i<text.length; i++){
//     if(pattern.test(text[i])){
//         count++;
//     }
// }
// console.log(count);

// //or
// let vowels = 

//q23 (replace multiple spaces with single space)
// let text = "a man  is  nice  ";
// let pattern = text.replace(/ {2,}/g, " ");
// console.log(text);

// //q24 (check a string starts with capital letter)
// function s(str){
//     return `/^[A-Z]`
// }

// function isTitleCase(str){
//     const pattren = /^([A-Z][a-z]*\s?)+$/;
//     return pattren.test(str);
// }
// console.log(isTitleCase("Hello World"));
// console.log(isTitleCase("Hello World"));

//implementation of linear search
// let arr = [1,2,3,4,5,6];
// let key = 4;
// function linearSearch(arr, key){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===key){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch(arr,key));

//implementation of binary search
// let arr1 = [1,2,3,4,5,6];
// let key1 = 5;
// let n = 6
// function binarySearch(arr1, key1, n){
//     let start = arr1[0];
//     let end = arr1[n-1];
//     let mid;
//     let ans;
//     for(let i=0; i<arr1.length/2; i++){
//         mid = Math.floor((start+end)/2);
//         if(key1==arr1[mid]){
//             ans = mid;
//             return ans;
//         }
//         else if(arr1[mid]>key1){
//             mid = Math.floor((start+mid)/2);
//         }
//         else{
//             mid = Math.floor((mid+end)/2);
//         }
//     }
//     return -1;      //wrong
// }
// console.log(binarySearch(arr1,key1, n));

//sets revision
//add()
// const set = new Set();
// console.log( set.add(2));
// set.add("hello");
// set.add(false);

// //delete()
// console.log( set.delete(2));

// //has()
// console.log( set.has("hello"))

// //size()
// console.log( set.size);

// //clear()
// console.log( set.clear());

// //with for each
// set.forEach((elem) => {
//     console.log(elem);
// });


// for(let ch of set){
// console.log(ch);
// }

// let map = new Map([
//     ["name", "aditya"],["age",22]
// ]);
// map.set("value","qwert");
// console.log( map.get("name"));
// console.log( map.has("name"));
// console.log( map.delete("name"));
// console.log( map.size);
// // map.clear()
// // console.log(map);

// for(let [key,value] of map){
//     console.log(key,value);
// }

// map.forEach((value,key) => {
//     console.log(key,value);
// });

// for(let [key,value] of map.keys()){
//     console.log(key,value);
// }

//q1 of set and map practice****************************************************************************
// let arr = [1,2,3,4,5,6,7];
// let x = new Set(arr);
// console.log(x.size);

//q2 of set (if duplicate numbers in arr)
// function duplicate(arr){
//     let x = new Set(arr);
//     if(x.size==arr.length){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// duplicate(arr);

//q3 of set (character frequency of string)
// function charFrequency(str){
//     let freqMap = new Map();
//     for(let i=0; i<str.length; i++){
//         let char = str[i];
//         if(freqMap.has(char)){
//             freqMap.set(char,freqMap.get(char)+1);
//         }else{
//             freqMap.set(char,1);
//         }
//     }
//     return freqMap;
// }
// console.log(charFrequency("aditya"));

//q6 of set (find first repeating element)
// function repeatingElement(arr){
//     let seen = new Set();
//         for(let i=0; i<arr.length; i++){
//             if(seen.has(arr[i])){
//                 return arr[i];
//             }
//             seen.add(arr[i]);
//         }
//     return null;
// }
// console.log(repeatingElement([4,5,6,3,4,5,2]));
//hw --> q3 remove duplicates, q6 anagram strings, alphabet coverage check, find pairs with given sum, minimum deletions to make anagrams.

// let s = "a amn sbdmd ajhdd"
// let x = s.trim().split(" ");
//     let n = x.length;
//     let a = x[n-1];
//     console.log(Number(a.length));

// let str = "a man was going to hell"
//         "also have to"
//         "be polite";
// let x = str.split(/\n/);
//   for(let i=0; i<x.length; i++){
//     let y = x[i].split("");
//     let a = new Set(y);
//     console.log(a);
//   }

//printing decreasing order of n using recursion
// function pd(n){
//     if(n===0){
//         return;
//     }
//     console.log(n);
//     pd(n-1);
// }
// pd(5);

//+n
// function pi(n){
//     if(n===0){
//         return;
//     }
//     pi(n-1);
//     console.log(n);
// }
// pi(5);

//1234554321
// function pipd(n){
//     if(n===0){
//         return;
//     }
//     console.log(n);
//     pipd(n-1);
//     console.log(n);
// }
// pipd(5);

// 1--> when some code is written befor recursive function call it gets executed going upwards in the call stack.
// 2--> when same code is written after recursive function call, it gets executed going downward in the call stack

//factorial of a number using recursion
// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     let a = fact(n-1);
//     let b = n*a;
//     return b;
// }
// console.log(fact(5));

//power of x raise to n
// function power(x,n){
//     if(n===0){
//         return 1;
//     }
//     let p = power(x,n-1);
//     let a = p*x;
//     return a;
// }
// console.log(power(2,3))

// function now(arr,index){
//     if(index===arr.length){
//         return;
//     }
//     console.log(arr[index]);
//     now(arr,index+1);
// }
// now([2,3,4,5],0)


//find the max using recursion;
// function max(arr,index){
//     if(index===arr.length-1){
//         return arr[index];
//     }
//     let a = max(arr,index+1);
//     let b = Math.max(a,arr[index]);
//     return b;
// }
// console.log(max([2,3,4,5],0))
// //or
// function maxEle(arr, n) {
//     if (n == arr.length-1) {
//         return arr[arr.length-1];
//     }
//     return Math.max(maxEle(arr, n + 1), arr[n])
// }
// let arr = [5,3,9,7,8]
// console.log(maxEle(arr, 0))
// //or
// function findMax(arr, index = 0, max = -Infinity) {
//     if (index === arr.length) {
//         return max;
//     }
//     if (arr[index] > max) {
//         max = arr[index];
//     }
//     return findMax(arr, index + 1, max);
// }
// console.log(findMax([2, 3, 4, 5])); 

//insertion sort
// let arr = [2,3,8,9,5,6,];
// function insertion_sort(arr){
// for(let i = 0 ; i <arr.length ; i++){
//     let j = i ;
//     while( (j > 0) && (arr[j-1] > arr[j])){
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//         j--;
//     }
// }
//     return arr;
// }

// console.log(insertion_sort(arr));


// Merge sort
// function mergerSort(arr){
//     if(arr.length <=1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);
//     return merge(mergerSort(left),mergerSort(right));
// }
// function merge(left, right){
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i]);
//             i++
//         }
//         else{
//             result.push(right[j]);
//             j++
//         }
//     }
//     while(i<left.length){
//         result.push(left[i]);
//         i++;
//     }
//     while(j<right.length){
//         result.push(right[j]);
//         j++;
//     }
//     return result;
// }
// let arr = [38,27,43,3,9,82,10];
// let res = mergerSort(arr);
// console.log(res);


//quick sort
// function quickSort(arr){
//     if(arr.length<=1) return arr;
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]>pivot){
//             right.push(arr[i]);
//         }
//         else{
//             left.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }

// let arr = [38,27,43,3,9,82,10];
// console.log(arr);
// let res = quickSort(arr);
// console.log(res);

// HOISTING:-  21/07/2025

// console.log(a);            // undefined
// console.log(hello);        // entire function --> [Function : hello]
// hello();                   // Hello!

// var a = 5;

// function hello() {
//     console.log("Hello!");
// }

// console.log(a);            // 5

// -> it is due to Execution Context


// ----------------------------------------------------------------------------------------------
// Execution Context:
// -> it has two types-
// - Global Execution Context
// - Function Execution Context
// -> It is a container where code execution happens

// ----------------------------------------------------------------------------------------------
// Container has two components:
// - Memory Component
// - Code Component

// -----------------------------------------------------------------------------------------------------------------
// |                         Memory     (runs first)        |                         Code   (runs second)         |
// -----------------------------------------------------------------------------------------------------------------
// |             a = undefined                              |       console.log(a)                                 |
// |                                                        |       console.log(hello)                             |
// |             function hello(){                          |                                                      |
// |               console.log("hello")                     |       hello()                                        |
// |             }                                          |                                                      |
// |                                                        |       ----------------------------------------       |
// |            (a is re-assigned)                          |       |     Memory      |        Code        |       |
// |              a = 5                                     |       ----------------------------------------       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |console.log("hello")|       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       ----------------------------------------       |
// |                                                        |       console.log(a)                                 |
// |                                                        |                                                      |
// -----------------------------------------------------------------------------------------------------------------



// ==============================================================================================
// var & arrow function:
// console.log(a);            // undefined
// console.log(hello);        // entire function --> [Function : hello]
// hello();                   // hello is not a function

// var a = 5;

// var hello = () => {
//     console.log("Hello!");
// }
// console.log(hello())         // hello
// console.log(a);            // 5

// -----------------------------------------------------------------------------------------------------------------
// |                         Memory     (runs first)        |                         Code   (runs second)         |
// -----------------------------------------------------------------------------------------------------------------
// |             a = undefined                              |       console.log(a)                                 |
// |                                                        |       console.log(hello)                             |
// |             hello = undefined                          |                                                      |
// |                                                        |       hello()                                        |
// |                                                        |                                                      |
// |                                                        |       ----------------------------------------       |
// |            (a is re-assigned)                          |       |     Memory      |        Code        |       |
// |              a = 5                                     |       ----------------------------------------       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |console.log("hello")|       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       ----------------------------------------       |
// |                                                        |       console.log(a)                                 |
// |                                                        |                                                      |
// -----------------------------------------------------------------------------------------------------------------



// ==============================================================================================
// let & arrow function:
// console.log(a);            // Cannot access 'a' before initialization
// console.log(hello);        // Cannot access 'hello' before initialization
// hello();                   // hello is not a function

// let a = 5;

// let hello = () => {           // it treats hello as a variable instead of function
//     console.log("Hello!");
// }
// console.log(hello());
// console.log(a);            // 5



// lexical scoping ************************************************************************************
// also called as static scoping. in js LS means scope of a variable is defined by its position in source Code .
// function outer(){
//     let count =0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     inner();
// }
// outer();

//closure
// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }
// const count = outer();
// count();
// count();

//error Handling


//reduce
// let arr = [2,3,4,5];
// let res = arr.reduce((acc, elem) => {
//     return acc+elem;
// }, 0);
// console.log(res);

// let res = arr.reduce((acc, elem) => {
//     return acc*elem;
// }, 1);
// console.log(res);

// let res = arr.reduce((acc, elem) => {
//     return elem > acc ? elem : acc;
// }, arr[0]);
// console.log(res);

// const freqmap = new Map();
// const nums = [3, 3, 1];

// for (const num of nums) {
//   freqmap.set(num, (freqmap.get(num) || 0) + 1);
// }

// console.log(freqmap);

// let arr = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let d = 2;
// let a = arr.slice(0,d);
// let b = arr.slice(d,arr.length);
// // console.log([...b,...a])
// d=d%arr.length;
// console.log(d);

// let firstName = "Jane", lastName = "Doe", age = 28;
// console.log(firstName, lastName, age);

// let n = 5;
// function revtri(n){
//   let x = n;
//   for(let i=0; i<n; i++){
//     for(let j=x; j>0; j--){
//       process.stdout.write(`${j}`);
//     }
//     console.log();
//     x--;
//   }
// }
// revtri(n);

// // function RevTri(num){
// //     let x = num ;
// //     for(let i =0 ; i<num ; i++){
// //         for ( let j=x ; j>0 ; j--){
// //             process.stdout.write(`${j} `)
// //         }
// //         console.log()
// //         x--;
// //     }
// // }

// // RevTri(4)


// //transpose of a matrix
// let matrix = [[1,2,3],
//               [4,5,6],
//               [7,8,9]];

// function transpose(matrix) {
//   let temp = [];
//   for(let i=0; i<matrix[0].length; i++){
//     temp[i] = [];
//     for(let j=0; j<matrix.length; j++){
//       temp[i][j] = matrix[j][i];
//     }
//   }
//   console.log(temp);
// }
// transpose(matrix)

//alphabet pattern printing
// let n = 5;
// function aplhabet(n){
//   for(let i=0; i<n; i++){
//     for(let j=n-i; j>0; j--){
//       process.stdout.write(`${String.fromCharCode(i+65)}`)
//     }
//     console.log();
//   }
// }
// aplhabet(n)


//diamond pattern
// let n = 5;
// function diamond(n){
//   for(let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//       process.stdout.write(`${" ".repeat(Math.floor(n/2))}`);
//     }
//     process.stdout.write(`* `)
//     console.log();
//   } 
// }
// diamond(n)


// let a = "Hello World";
// let b = a.split(" ");
// let arr = []
// console.log(b);
// for(let i=0; i<b.length; i++){
//     arr.push(b[i].split("").reverse().join(""));
// };
// console.log(arr.join(" "));


// let arr = [1,2,3,4,5];
// console.log(
//  arr.reduce((acc,elem)=>{
//     return acc+elem;
// },0));

// Build a Counter using closure
// write a function that keeps its own private counter and has methods to increment and decrement.

// function count(){
//     let counter = 0;
//     return {
//         increment: function(){
//             counter++;
//             return counter;
//         },
//         decrement: function(){
//             counter--;
//             return counter;
//         }
//     };
// }

// let myCounter = count();
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());


// factorial of a number using recursion
// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     let a = fact(n-1);
//     let b = n*a;
//     return b;
// }
// console.log(fact(5));

// const person = {
//     name: "jay";
//     greet: function(city){
//         console.log(`Hi, I'm ${this.name} from ${city}`);
//     }
// }
// const greetFn = person.greet;
// greetFn("Delhi");
// const boundGreet = greetFn.bind(person);
// boundGreet(greetFn);
