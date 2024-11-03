                                                                            ~ARRAYS~
JavaScript mein Arrays ek special type ka object hai jo multiple values ko ek hi variable mein store karne ke kaam aata hai.
Samjho tumhe ek variable mein multiple numbers, strings, ya koi aur data store karna hai, toh uske liye arrays kaafi useful hoti hain.

1)Array Create Karna~
Array ko create karne ke liye hum [] (square brackets) ka use karte hain. 
EXAMPLE=      let fruits = ["Apple", "Banana", "Mango"];
            Isme "Apple", "Banana", aur "Mango" values hain jo array fruits ke andar store hui hain.

              
2)Array mein Values ko Access Karna~
Array mein har ek element ka apna index hota hai jo 0 se start hota hai. Matlab, pehla element index 0 pe hoga, doosra 1 pe, aur aise hi aage chalta rahega.
EXAMPLE= console.log(fruits[0]); // Output: Apple
         console.log(fruits[1]); // Output: Banana


3) Array mein Value Update Karna~
Kisi bhi element ko update karne ke liye uska index use karke new value assign kar sakte hain.
EXAMPLE=fruits[1] = "Orange";
        console.log(fruits); // Output: ["Apple", "Orange", "Mango"]


4)Array mein Values Add aur Remove Karna~
  >push() - Array ke end mein ek ya zyada elements add karne ke liye.
  fruits.push("Pineapple");
  console.log(fruits); // Output: ["Apple", "Orange", "Mango", "Pineapple"]

 >pop() - Array ke end se ek element remove karne ke liye.
  fruits.pop();
  console.log(fruits); // Output: ["Apple", "Orange", "Mango"]

 >unshift() - Array ke starting mein ek ya zyada elements add karne ke liye.
 fruits.unshift("Grapes");
 console.log(fruits); // Output: ["Grapes", "Apple", "Orange", "Mango"]

 >shift() - Array ke starting se ek element remove karne ke liye.
  fruits.shift();
  console.log(fruits); // Output: ["Apple", "Orange", "Mango"]


5)Array ki Length Find Karna~
Array ki total length find karne ke liye .length property use karte hain.
  EXAMPLE=  
  console.log(fruits.length); // Output: 3


6)Loop through Array (for loop)~
Agar array ke saare elements ko access karna ho toh for loop ka use kar sakte hain.
EXAMPLE=
  for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  }


7) Array Methods~
  JavaScript mein kaafi saare built-in methods hain jo arrays pe kaam karte hain:

    >map() - Har element pe ek function apply karke ek new array return karta hai.
    Example=let numbers = [1, 2, 3, 4];
            let doubled = numbers.map(num => num * 2);
            console.log(doubled); // Output: [2, 4, 6, 8]

    >filter() - Condition ke basis pe elements ko filter karke new array return karta hai.
              - Ye method un elements ko filter karta hai jo condition ko meet karte hain, aur ek new array return karta hai sirf un filtered elements ke saath.
      Example=let numbers = [5, 12, 8, 130, 44];
              let bigNumbers = numbers.filter(num => num > 10);
              console.log(bigNumbers); // Output: [12, 130, 44]

    >reduce() - Saare elements ko reduce karke ek single value return karta hai.
              - Ye method array ke saare elements ko reduce karke ek single value return karta hai. Isme ek accumulator hota hai jo har iteration mein update hota rehta hai.
     Example=let numbers = [1, 2, 3, 4];
             let sum = numbers.reduce((acc, num) => acc + num, 0);
             console.log(sum); // Output: 10


8)Array.from()~
Ye method kisi bhi iterable (jaise string) ko array mein convert karta hai.
  EXAMPLE=let str = "hello";
          let arr = Array.from(str);
          console.log(arr); // Output: ["h", "e", "l", "l", "o"]


9)flat() and flatMap()

    >flat(): Nested arrays ko flatten karne ke liye kaam aata hai. Isme tum depth bhi specify kar sakte ho.
    >latMap(): Ye pehle array ke har element pe map apply karta hai aur phir flatten karta hai.
                    [[flat() aur flatMap() nested arrays ko flatten karne mein kaam aate hain.]]



