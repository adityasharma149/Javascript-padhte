                                                                          ~PROMISES~

JavaScript mein Promises ek tarike ka object hota hai jo asynchronous operations ko handle karne mein madad karta hai. Samjho tumhe koi aisa kaam karna hai jo turant khatam nahi hoga, jaise ki server se data fetch karna, file load karna, etc. Promises yeh ensure karte hain ki jab yeh operation complete ho jaye, toh humein pata lag jaaye aur hum uske result ko handle kar saken.
Basic Concept of Promises

Ek promise basically 3 states mein ho sakta hai:

    ~Pending - Jab tak operation complete nahi hota, promise pending state mein rehta hai.
    ~Fulfilled - Jab operation successfully complete ho jata hai, toh promise fulfilled ho jata hai.
    ~Rejected - Agar operation mein koi error aata hai toh promise reject ho jata hai.

let promise = new Promise((resolve, reject) => {
  // asynchronous code yaha likhenge
});

>>Resolve aur Reject Functions=

Promise ke constructor function mein 2 parameters hote hain:

    1)Resolve: Agar operation successful ho jaye toh resolve() call karte hain.
    2)Reject: Agar operation fail ho jaye toh reject() call karte hain.

Jaise:
let promise = new Promise((resolve, reject) => {
  let success = true; // Isko kisi asynchronous logic ke result se set karo

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});


>>How to Handle Promises:
  Promises ko handle karne ke liye hum .then(), .catch() aur .finally() methods ka use karte hain:

    1).then()
    Agar promise resolve ho jata hai toh .then() block execute hota hai.

  promise
  .then(result => {
    console.log("Success:", result); // Result mein wo value aayegi jo resolve() mein pass ki thi
  });


2).catch()
Agar promise reject ho jata hai toh .catch() block execute hota hai.

promise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error); // Error mein wo value aayegi jo reject() mein pass ki thi
  });



3).finally()
.finally() block hamesha execute hota hai, chahe promise resolve ho ya reject. Yeh mainly cleanup tasks ke liye useful hai.

    promise
      .then(result => {
        console.log("Success:", result);
      })
      .catch(error => {
        console.log("Error:", error);
      })
      .finally(() => {
        console.log("Operation complete"); // Yeh hamesha chalega
      });



>>Promise Chaining~
Agar multiple asynchronous operations ko sequentially handle karna ho toh Promise Chaining ka use karte hain. Ek .then() block dusre .then() block ko follow kar sakta hai.

let promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then(result => {
    console.log(result); // 10
    return result * 2;
  })
  .then(result => {
    console.log(result); // 20
    return result * 3;
  })
  .then(result => {
    console.log(result); // 60
  })
  .catch(error => {
    console.log("Error:", error);
  });



>>Promise.all~
Agar tumhe multiple promises ko ek sath resolve karna ho, aur jab sabhi promises resolve ho jayein toh hi koi kaam karna ho, toh Promise.all ka use hota hai.

let promise1 = Promise.resolve(10);
let promise2 = Promise.resolve(20);
let promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // [10, 20, 30]
  })
  .catch(error => {
    console.log("Error:", error);
  });

    Agar koi bhi promise reject ho jata hai, toh Promise.all directly .catch() block mein chala jata hai.


      
>>Promise.race~
Promise.race ka use tab karte hain jab multiple promises mein se sabse pehle resolve hone wale promise ka result chahiye. Jo bhi promise pehle resolve/reject hoga, Promise.race usko return kar dega.

let promise1 = new Promise(resolve => setTimeout(resolve, 500, "First"));
let promise2 = new Promise(resolve => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2])
  .then(result => {
    console.log(result); // "Second" kyunki ye pehle resolve ho gaya
  });



##Recap:
    >>Promise ek asynchronous operation ka result hold karta hai.
    >>.then(), .catch(), aur .finally() se promise handle hota hai.
    >>Promise Chaining se sequentially operations handle kar sakte hain.
    >>Promise.all se multiple promises ko ek sath resolve kar sakte hain.
    >>Promise.race pehle resolve hone wale promise ka result return karta hai.
