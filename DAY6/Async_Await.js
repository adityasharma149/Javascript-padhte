                                                                         ~ASYNC_AWAIT~

1. Async Kya Hai?
async ek keyword hai jo kisi bhi function ko asynchronous banata hai. Yeh return me ek Promise deta hai. Jab aap function ke aage async lagate ho, to wo promise ko handle karne ke liye tayar ho jata hai aur hamein await ka use karke result ka intezaar karne ki option milti hai.

Syntax:
async function myFunction() {
  // function body
}


2. Await Kya Hai?

await bhi ek keyword hai jo async function ke andar hi use kiya jata hai. Yeh keyword JavaScript ko kehta hai ki "ruk jao jab tak promise resolve ya reject nahi ho jata". Matlab, await ek promise ka result wait karke return karta hai bina code ko block kiye.

Syntax:

let result = await somePromise;
    >>Important Note: await sirf async function ke andar hi use kiya ja sakta hai, agar aap usko kisi normal function mein use karoge, to error aa jayega.

Example:

// Async function banate hain
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data); // Ye data print karega jab promise resolve hoga
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData(); // function ko call karte hain

Yahaan pe:

    >fetchData function async hai, kyunki humne async keyword use kiya.
    >await fetch ke saath use hua hai, jo ek promise return karta hai. To await yahan promise resolve hone ka intezaar karega aur response milega.
    >Agar koi error aata hai, to try-catch block usko handle karega.


  
### Kaise Async/Await ko Use Karna Simplify Karta Hai:

   1) Readability: Async/await se code kaafi readable ho jata hai. Pehle hume .then() aur .catch() ka use karna padta tha, jo complex promise chains banata tha.

   2) Error Handling: try...catch block ke through error ko handle karna easy hota hai. Isme agar promise reject ho jaye, to catch block me aa jata hai.

  
Example with Timeout:
Ek example lete hain jisme hum delay ko handle karenge async/await ke saath:

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Start');
  
  await delay(2000);  // 2 seconds ka delay
  
  console.log('2 seconds later');
}

main();
Yahaan delay ek promise return karta hai jo ms milliseconds ka intezaar karta hai. await delay(2000); ka matlab hai ki JavaScript 2 seconds ke liye rukegi bina baaki code ko block kiye.

  
  
  ### Multiple Await Statements in Sequence~
       Agar aapko multiple async tasks ko sequence me run karna hai, to bas unko await ke saath likho.

async function processData() {
  let data1 = await fetchData1();
  let data2 = await fetchData2(data1);
  let data3 = await fetchData3(data2);
  
  console.log(data3);
}
Yahaan fetchData1, fetchData2, aur fetchData3 sequentially execute honge, kyunki har await agle task ka intezaar karega. Yeh approach tab useful hai jab aapko previous data ke result ki zarurat ho agle step mein.

  
  
  ### Parallel Execution with Promise.all~ 
     Agar aapko parallel me multiple async tasks run karna hai, to Promise.all use karo. Isme sari promises ek saath start hoti hain aur jab saari promises resolve ho jaati hain, tab result milta hai.

async function parallelTasks() {
  let [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  
  console.log(data1, data2); // dono data parallel me milenge
}





Summary (Notes Ke Liye Key Points):

    > async Function: async keyword lagane se function promise return karta hai.
    > await Keyword: await kisi bhi promise ka result ka wait karta hai bina code ko block kiye.
    > Error Handling: try...catch block me error handle kar sakte hain.
    > Sequential Execution: Multiple await statements ko sequence me use kar sakte hain agar ek ke baad ek kaam karna hai.
    > Parallel Execution: Agar saath me kaam karna hai to Promise.all use kar ke multiple async tasks ko ek saath run kar sakte hain.
