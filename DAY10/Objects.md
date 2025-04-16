🔹 1. What is an Object in JS?

JavaScript mein object ek collection of key-value pairs hota hai, jahan:

    Key hota hai property name (string type)

    Value ho sakti hai kuch bhi: string, number, array, function, aur dusra object bhi!

const person = {
  name: "Aman",
  age: 25,
  isStudent: true
};

Yahan name, age, isStudent keys hain, aur "Aman", 25, true values hain.



🔹 2. How to Create an Object
➤ A) Object Literal Syntax (sabse common)

const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022
};

➤ B) Using new Object() constructor

const car = new Object();
car.brand = "Honda";
car.model = "City";



🔹 3. Accessing Properties
➤ A) Dot Notation

console.log(car.brand);  // Honda

➤ B) Bracket Notation

console.log(car["model"]);  // City

Bracket notation tab useful hota hai jab key dynamic ho ya special character ho.



🔹 4. Adding / Updating / Deleting Properties
➤ Add or Update:

car.color = "Black";          // Add
car.model = "Civic";          // Update

➤ Delete:

delete car.year;



🔹 5. Nested Objects

Object ke andar aur bhi object ho sakta hai:

const student = {
  name: "Rahul",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

console.log(student.address.city);  // Delhi



🔹 6. Objects with Methods (Functions as values)

const person = {
  name: "Aman",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet();  // Hello, Aman

    this keyword current object ko refer karta hai.



🔹 7. Looping through Objects

for (let key in person) {
  console.log(key + ": " + person[key]);
}



🔹 8. Object.keys(), Object.values(), Object.entries()

Object.keys(person);   // ["name", "greet"]
Object.values(person); // ["Aman", ƒ]
Object.entries(person);
// [["name", "Aman"], ["greet", ƒ]]



🔹 9. Object Destructuring

const { name, age } = person;
console.log(name);  // Aman



🔹 10. Object.freeze() & Object.seal()
🔸 Object.freeze(obj):

    Object ko fully lock kar deta hai.

    Properties add/update/delete nahi kar sakte.

Object.freeze(car);
car.brand = "Ford";   // ❌ No effect

🔸 Object.seal(obj):

    Update allowed hai, but add/delete nahi kar sakte.




🔹 11. Spread Operator with Objects

const newPerson = { ...person, city: "Mumbai" };

    Ye existing object ka copy banata hai + extra properties bhi add kar sakte ho.




🔹 12. Optional Chaining

Kabhi kabhi nested object access karte time error aa sakta hai agar koi property undefined ho. Usse handle karne ke liye:

console.log(student.address?.city);  // Safe way




🔹 13. Object Comparison (Important!)

const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 === obj2);  // false ❌ (because reference is different)

    JS mein do alag object same value hone ke baad bhi equal nahi hote unless reference same ho.



🔹 14. Object.assign()

Ek ya zyada objects ko merge karne ke liye:

const target = { a: 1 };
const source = { b: 2 };

const merged = Object.assign(target, source);  // { a:1, b:2 }



🔹 15. Factory Function vs Constructor Function
➤ A) Factory Function

function createUser(name, age) {
  return {
    name,
    age
  };
}

const user1 = createUser("Anu", 21);

➤ B) Constructor Function (with new keyword)

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user2 = new User("Ravi", 23);




🔹 16. ES6 Shorthand Syntax

const name = "Pooja";
const user = { name };  // same as { name: name }




🔚 Summary (for quick notes)
          
          Create Object  ==	{} or new Object()
          Access Property	 == obj.key or obj["key"]
          Add / Update	== obj.newKey = value
          Delete Property	== delete obj.key
          Loop through ==  Object	for..in loop
          Object Methods	==  Object.keys(), Object.values(), etc
          Destructuring	==  const { a } = obj
          Merge Objects	==  Object.assign() / Spread {...obj}
          Freeze / Seal Object	==  Object.freeze() / Object.seal()
          Object with Method	==  { greet: function() {} }
          Constructor Function	==  function Func() { this.key = value }
