~JavaScript mein callbacks ek bahut hi important concept hai, aur iske bina asynchronous programming thodi mushkil ho jaati hai. Chalo simple se start karte hain aur step-by-step samajhte hain ki callback function kya hota hai, kaise kaam karta hai, aur kab use hota hai.

1. Callback Function kya hota hai?
Callback ek aisa function hai jo kisi doosre function ko pass kiya jata hai as an argument. Ye function doosre function ke andar call hota hai jab uska kaam complete ho jata hai.

Simple terms mein, callback ek aisa function hai jo tabhi execute hota hai jab doosra function apna kaam khatam kar leta hai.



2. Callback Functions ka syntax kaise hota hai?
Example ke through samajhte hain.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    const name = "Amit";
    callback(name);
}

processUserInput(greet);

Is example mein:
   > greet ek function hai jo name ko console mein print karta hai.
   > processUserInput function ke paas callback parameter hai.
   > Jab hum processUserInput ko call karte hain aur greet function ko as a callback pass karte hain, toh greet function tabhi execute hota hai jab processUserInput function apna kaam complete kar leta hai.



3. Callback Functions ki zaroorat kyun hoti hai?
JavaScript asynchronous hai, iska matlab kuch tasks non-blocking hote hain (jaise API call, file read/write, timers, etc.). Agar humein koi kaam karne ke baad dusra kaam karna hai toh callback function ka use karte hain. Ye ek tarah ka "call me when you are done" concept hai.



4. Callback ko kaise use karte hain with asynchronous code?
Ab ek example dekho jo asynchronous hai:

console.log("Task 1: Start");

setTimeout(function() {
    console.log("Task 2: This task takes 2 seconds to complete");
}, 2000);

console.log("Task 3: End");

Output:

Task 1: Start
Task 3: End
Task 2: This task takes 2 seconds to complete
:Yahaan setTimeout ek asynchronous function hai jo 2 seconds ke liye wait karta hai aur baad mein callback function ko execute karta hai. Callback function yahan wo anonymous function hai jo console.log("Task 2...") kar raha hai.



5. Callback Hell kya hai?
Jab multiple asynchronous tasks sequentially perform karte hain aur har task ke liye nested callbacks use hote hain, toh code complex aur mushkil ho jata hai, jise hum "callback hell" kehte hain. Example dekho:

function firstTask(callback) {
    setTimeout(() => {
        console.log("First Task Done");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second Task Done");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third Task Done");
        callback();
    }, 1000);
}

firstTask(function() {
    secondTask(function() {
        thirdTask(function() {
            console.log("All Tasks Done");
        });
    });
});

Ye code padhne aur samajhne mein mushkil ho jata hai kyunki ye "pyramid structure" bana leta hai.
