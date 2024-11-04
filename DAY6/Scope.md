### Scope kya hai?

~Scope, ek variable ya function ki visibility aur accessibility ko control karta hai. Yeh define karta hai ki kis part mein hum variable ko access kar sakte hain aur kis mein nahi. JavaScript mein teen main types ke scopes hain:

a) Global Scope:

    ~Agar variable kisi bhi block ya function ke bahar declare kiya gaya hai, toh woh global scope mein hota hai.
    ~Yeh har jagah accessible hota hai, chahe kisi bhi function ya block ke andar ho.
    Example:
    let name = "Ali"; // Global scope mein variable

    function greet() {
      console.log("Hello, " + name); // yahan bhi access ho raha hai
    }

    greet(); // Output: Hello, Ali

b) Function Scope:

    ~Function ke andar declare kiye hue variables sirf us function ke andar hi accessible hote hain.
    ~Yeh var keyword ke saath bhi hota hai.
    Example:
    function sayHello() {
      var message = "Hello!"; // Function scope mein variable
      console.log(message);
    }

    sayHello(); // Output: Hello!
    console.log(message); // Error: message is not defined

c) Block Scope:

    ~Block scope { } ke andar declare kiye hue variables sirf usi block ke andar accessible hote hain.
    ~let aur const keywords ke saath banaye gaye variables block scope mein aate hain, lekin var nahi.
    Example:
    if (true) {
      let greeting = "Hi!"; // Block scope mein variable
      console.log(greeting); // Output: Hi!
    }

    console.log(greeting); // Error: greeting is not defined

Block vs Scope Summary

    ~Block bas ek { } ke andar ka code hai jo organize karta hai.
    ~Scope ye define karta hai ki kis block, function, ya globally variables accessible hain.
    ~let aur const block scope follow karte hain, jabki var function scope follow karta hai.

Quick Points:

    ~Global scope ke variables sab jagah accessible hain.
    ~Function scope ke variables sirf function ke andar accessible hain.
    ~Block scope ke variables sirf us block ke andar hi access kiye ja sakte hain.
