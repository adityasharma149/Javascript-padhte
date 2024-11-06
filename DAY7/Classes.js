~~JavaScript mein classes ka concept Object-Oriented Programming (OOP) se aaya hai. Classes use karne se hum apne code ko reusable aur structured bana sakte hain. Classes basically templates hote hain jinki madad se hum objects create kar sakte hain.

~~Sabse pehle, ek class define karne ke liye hum class keyword use karte hain, followed by the class name.
Example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method inside class
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
##Breakdown of Example~

    class keyword: Yeh keyword class create karne ke liye use hota hai.
    constructor method: Yeh ek special function hai jo har class mein hota hai aur jab bhi hum ek new object create karte hain, yeh automatically call ho jata hai. Constructor mein hum properties set kar sakte hain.
    this keyword: this ka matlab hota hai current instance ya object jo create ho raha hai.

Example mein, jab hum new Person('John', 25) likhenge toh ek naya object create hoga aur constructor method call hoga, jo name aur age set karega.



~~Creating Objects:
Class ko use karke hum multiple objects bana sakte hain.
For example:

const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);

person1.greet(); // Output: Hello, my name is John and I am 25 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 30 years old.
//Yahaan pe person1 aur person2 alag-alag objects hain jo Person class se banaye gaye hain.



~~Methods in Classes:
Class ke andar hum methods define kar sakte hain jo us class ke objects ke liye accessible hote hain. In methods mein object-specific kaam kiya ja sakta hai.
For example:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    displayInfo() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}
//Isme displayInfo ek method hai jo car ka information display karega.



~~Inheritance (Extending Classes):
Inheritance ka matlab hota hai ek class doosri class ki properties aur methods ko inherit kar sakti hai. Iska fayda yeh hota hai ki hume same code baar baar likhna nahi padta.
Example:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// Dog class inherits Animal class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.

//Yahaan pe Dog class ne Animal class ko inherit kiya aur speak method ko override kiya.




~~Static Methods:
Static methods ko directly class se call kiya ja sakta hai, bina object banaye. Yeh methods mostly utility ya helper methods hote hain jo kisi specific instance pe depend nahi karte.
Example:

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // Output: 8




~~Getters and Setters:
Getters aur Setters ka use properties ko access ya modify karne ke liye kiya jata hai.
Example:

class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const user = new User('Alice');
console.log(user.name); // Output: Alice
user.name = 'Bob';
console.log(user.name); // Output: Bob





### Summary~

    1) Class: Blueprint/template for objects.
    2) Constructor: Special method to initialize object properties.
    3) Methods: Functions defined in class for specific tasks.
    4) Inheritance: Ek class doosri class ke properties aur methods inherit kar sakti hai.
    5) Static Methods: Directly class se call hote hain, bina object ke.
    6) Getters and Setters: Properties ko access aur update karne ke liye special methods.

