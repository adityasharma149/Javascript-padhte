# JavaScript mein data types ka use alag-alag prakaar ke values ko store karne ke liye kiya jaata hai. Data types define karte hain ki hum data 
  ke saath kya operations kar sakte hain aur kaise memory mein store hoga.

# JavaScript has 2 Datatypes
1)Primitive Datatype
2)Non-Primitive Datatype


1))PRIMITIVE DATATYPE-
  
1.1)String(Primitive Datattype)
=>String ka use text data ko store karne ke liye hota hai. Hum single quotes, double quotes ya backticks ka use karke strings ko likh sakte hain.
//let name = "Aditya";
//let aurname = 'Sharma';
//let hello = `Namaste`;


1.2)Number(Primitive Datattype)
=>Number datatype ka use integers (jaise 5) aur decimals (jaise 99.99) dono ko store karne ke liye hota hai.
//let age = 25;  // integer
//let price = 99.99;  // float


1.3)Boolean(Primitive Datattype)
=>Boolean datatype do values rakhta hai: true ya false. Conditions ko check karne ke liye iska use hota hai.
//let isLoggedIn = true;
//let isAdmin = false;


1.4)Undefined(Primitive Datattype)
=>Agar variable ko declare kiya gaya ho lekin uski value assign na hui ho, to uski value undefined hoti hai.
//let x;
//console.log(x);  // undefined


1.5)Null(Primitive Datattype)
=>null ka matlab hota hai ki yeh variable jaan-bujh kar khali hai aur koi value nahi hai.
//let y = null;


1.6)Symbol(Primitive Datattype)
=>Symbol ek unique aur immutable primitive value hai. Yeh object properties ke liye unique keys banane ke kaam aata hai.
//let sym1 = Symbol('unique');
//let sym2 = Symbol('unique');
//console.log(sym1 === sym2);  // false

1.7)BigInt(Primitive Datatype)
=>BigInt datatype ka use tab hota hai jab number itna bada ho ki normal number se represent na kiya ja sake.
//let bigNum = 123456789012345678901234567890n;

  
2))NON-PRIMITIVE DATATYPE(Reference type)-

2.1)Object(Non-Primitive Datattype)
=>Object ek tarah ka container hota hai jisme hum keys aur values store karte hain. Har key ka apna ek value hota hai.
//let person = {
  //name: "Rahul",
  //age: 30,
  //isEmployee: true
//};


2.2)Arrays(Non-Primitive Datattype)
=>Array ek list hoti hai jisme hum multiple values ko ek sequence mein store kar sakte hain. Har value ka ek index hota hai.
//let fruits = ['Apple', 'Banana', 'Mango'];
//let mixedArray = [1, 'two', false];



