### JSON, yaani "JavaScript Object Notation," ek lightweight data format hai jo ki mainly data exchange ke liye use hota hai.
       Yeh human-readable text format hai aur JavaScript aur doosri languages ke saath easily compatible hai.
       JSON ka main use hota hai data ko client-server architecture me exchange karne ke liye.

~JSON structure me data ko key-value pairs ki form me represent kiya jata hai, jo bilkul JavaScript objects jaisa hota hai. 


JSON Syntax:
JSON ka syntax kuch simple rules follow karta hai:

    1)Data hamesha key-value pairs me hota hai.
    2)Keys aur strings double quotes ("") me likhe jaate hain.
    3)Values kuch bhi ho sakti hain: string, number, array, object, boolean, ya null.

Example of JSON:
{
    "name": "Rahul",
    "age": 25,
    "isStudent": false,
    "subjects": ["Maths", "Science", "English"],
    "address": {
        "city": "Delhi",
        "pincode": 110001
    }
}
> Isme "name" ek key hai, aur "Rahul" uski value hai. Same way me baaki keys aur values hain. address key me ek object bhi hai, jo khud bhi ek JSON object hai.


### JSON Parsing and Stringifying in JavaScript:
JavaScript me JSON ko handle karne ke liye do main methods use hote hain:

    > JSON.parse()
    > JSON.stringify()


1. JSON.parse():
JSON.parse() ek JSON string ko JavaScript object me convert karta hai. Yeh mainly tab use hota hai jab hume server se data milta hai aur hume usko apne JavaScript code me use karna hai.
Syntax:

let obj = JSON.parse(jsonString);

Example:

let jsonString = '{"name": "Rahul", "age": 25}';
let obj = JSON.parse(jsonString);

console.log(obj.name); // Output: Rahul
console.log(obj.age);  // Output: 25

>isme, jsonString ek JSON formatted string hai. JSON.parse() usko ek JavaScript object me convert kar deta hai, jisse hum uske properties ko access kar sakte hain.


2. JSON.stringify():
JSON.stringify() ek JavaScript object ko JSON string me convert karta hai. Yeh tab useful hota hai jab hume apne data ko server pe bhejna hota hai ya local storage me save karna hota hai.
Syntax:

let jsonString = JSON.stringify(obj);

Example:

let obj = {
    name: "Rahul",
    age: 25
};

let jsonString = JSON.stringify(obj);

console.log(jsonString); // Output: {"name":"Rahul","age":25}

>Isme, obj ek JavaScript object hai jise JSON.stringify() ke through JSON string me convert kiya gaya hai. Yeh string ko hum kisi bhi API request ke saath server pe bhej sakte hain.



### Nested JSON Example:
JSON me nested structures bhi ho sakte hain, jaise arrays aur objects ke andar aur bhi arrays ya objects.

Example:

{
    "name": "Rahul",
    "age": 25,
    "subjects": [
        {
            "subjectName": "Maths",
            "marks": 90
        },
        {
            "subjectName": "Science",
            "marks": 85
        }
    ]
}

>Isme "subjects" ek array hai jo objects ko store kar raha hai. Yani JSON me hum arrays ke andar objects aur objects ke andar arrays bhi rakh sakte hain.
>Important Points:

    1)Double Quotes: JSON me sabhi keys aur strings double quotes me hone chahiye, single quotes allowed nahi hain.
    2)Data Types: JSON me sirf limited data types hote hain: string, number, object, array, boolean, aur null.
    3)Comments Not Allowed: JSON me comments allow nahi hote.



### JSON Use Cases in JavaScript:

    ~API se Data Fetch Karna: Jab bhi hum API se data fetch karte hain, toh wo JSON format me hota hai. Hum JSON.parse() ka use karke us data ko JavaScript object me convert karte hain.

    ~Local Storage me Data Store Karna: Browser ke local storage me data ko JSON format me save karna easy hota hai, kyunki localStorage sirf strings accept karta hai.

Example:

let user = {
    name: "Rahul",
    age: 25
};

// JSON.stringify() se object ko string me convert karte hain
localStorage.setItem("user", JSON.stringify(user));

// JSON.parse() se string ko wapas object me convert karte hain
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Rahul

> Yahan humne user object ko JSON string me convert karke localStorage me store kiya aur baad me use wapas retrieve karke parse kiya.



~Conclusion:
JSON ek simple aur powerful format hai jo JavaScript aur web development me bahut commonly use hota hai.
JSON.parse() aur JSON.stringify() ke through hum easily JSON aur JavaScript objects ke beech conversion kar sakte hain, jo client-server communication aur data storage ke kaam me aata hai.



