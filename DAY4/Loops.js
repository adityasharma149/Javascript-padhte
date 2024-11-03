1. What are Loops?~
Loops ka basic idea yeh hai ki agar hume koi kaam bar-bar karna ho, toh hum ek baar instructions likh ke usko baar-baar repeat kara sakte hain. For example, agar hume 1 se lekar 10 tak numbers print karne hain, toh hum loop ka use kar sakte hain.

2. Types of Loops in JavaScript~~
JavaScript mein mainly 3 types ke loops hote hain:

    ~for Loop
    ~while Loop
    ~do...while Loop



Let's go through each one of them.


### for Loop~~

Syntax:

for (initialization; condition; increment/decrement) {
  // code block
}

Explanation:

    Initialization: Yeh loop ko start karne ke liye variable set karta hai.
    Condition: Jab tak yeh condition true hai, tab tak loop chalega.
    Increment/Decrement: Yeh har loop ke end mein variable ko update karta hai.

Example:

javascript

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Explanation of Example: 1 se start hota hai, har baar i ko +1 karta hai, aur jab tak i 5 se chhota ya barabar hai, tab tak print karega.




### while Loop~~

Syntax:

while (condition) {
  // code block
}

Explanation:

    Jab tak condition true hai, loop chalta rahega.
    Agar condition kabhi false ho jaye toh loop ruk jaayega.

Example:

javascript

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

Explanation of Example: i ki value 1 se start hoti hai, aur har baar +1 hota hai. Jab i 5 se zyada ho jata hai, loop stop ho jata hai.




### do...while Loop~~

Syntax:
do {
  // code block
} while (condition);

Explanation:

    Pehle code block execute hota hai, phir condition check hoti hai.
    Agar condition true hai toh wapas se code block chalega.
    Yeh loop kam se kam ek baar toh execute hoga chahe condition false ho.

Example:

javascript

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

Explanation of Example: Ek baar pehle code execute hota hai, aur phir condition check hoti hai. Jab i 5 se zyada ho jata hai, tab loop stop ho jata hai.

  
  
  
  Quick Summary~

    ## for loop: Fixed iterations ke liye best hai.
    ## while loop: Jab tak condition true hai, tab tak chalega.
    ## do...while loop: Ek baar toh definitely chalega, phir condition check hogi.
