                                                                        ~CALL STACK in JAVASCRIPT~
                                                                          

  Call Stack ek mechanism hai jo JavaScript engine ke andar hota hai. 
  Iska kaam yeh hota hai ki functions ko track karein aur unke execution ka order manage karein. 
  Jaise hi ek function call hota hai, woh stack ke top mein chala jaata hai, aur jab function execute ho jaata hai, toh stack se nikal jaata hai.


~Key Points kya hai callstack ke chlo dekhte h:

    1))LIFO Principle (Last In, First Out):
        -Call Stack LIFO principle follow karta hai. Matlab jo function sabse last mein push hota hai stack mein, woh sabse pehle execute hota hai.
        -Example: Agar 3 functions A(), B(), aur C() call hote hain toh pehle C(), phir B(), aur last mein A() complete hoga.


    2))Function Call Process:

        -Jab JavaScript mein koi function call hota hai, toh call stack us function ko stack mein push karta hai.
        -Jab function apna kaam kar leta hai, toh call stack us function ko pop kar deta hai.


    3))Call Stack Overflow:

         -Agar bahut zyada functions ko call stack mein add kar diya jaye bina unko pop karein (jaise infinite recursion), 
          toh call stack overflow ho jaata hai, aur error aata hai: RangeError: Maximum call stack size exceeded.
         -Agar bohot zyada functions ko bina pop kare call karenge, toh memory bhar jaayegi aur stack overflow ho jaayega.


     4))Synchronous Execution:

         -JavaScript ek single-threaded language hai, matlab ek waqt mein sirf ek hi kaam kar sakta hai. 
          Yeh synchronous nature ke wajah se call stack sequentially functions ko execute karta hai.



~EXAMPLE:


function firstFunction() {
    console.log('First Function');
    secondFunction();
}

function secondFunction() {
    console.log('Second Function');
    thirdFunction();
}

function thirdFunction() {
    console.log('Third Function');
}

firstFunction();

//Sabse pehle firstFunction() call hoti hai, jo stack mein push hoti hai.
//firstFunction() ke andar secondFunction() call hoti hai, toh secondFunction() stack mein push hoti hai.
//secondFunction() ke andar thirdFunction() call hotti hai, jo stack mein push hoti hai.
//thirdFunction() execute hone ke baad stack se nikal jaata hai (pop), phir secondFunction() nikalta hai, aur last mein firstFunction().

//Call Stack Execution Flow (LIFO):
  Call Stack Execution Flow (LIFO):

    1.firstFunction() ⬆️
    2.secondFunction() ⬆️
    3.thirdFunction() ⬆️
    4.thirdFunction() ⬇️
    5.secondFunction() ⬇️
    6.firstFunction() ⬇️
