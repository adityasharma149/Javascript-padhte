                                                                          Document Object Model   
                                                                          
~DOM (Document Object Model) ke baare me samajhna JavaScript programming ke liye bahut zaruri hai. Ye ek interface hai jo HTML aur JavaScript ko connect karta hai, 
 taki hum web page ke elements ko dynamically modify, add, ya delete kar sake.

 1. DOM Kya Hai?~~
DOM ek programming interface hai jo web page ko ek tree structure me represent karta hai. Har ek HTML element ek node ke form me hota hai.
Is tree structure ko hum JavaScript ka use karke manipulate kar sakte hain.
Key Points:

    ## Document: HTML page ko represent karta hai.
    ## Object: HTML elements ko object ke form me represent karta hai.
    ## Model: Tree-like structure jisme parent-child relationship hoti hai.

Example:
<!DOCTYPE html>
<html>
  <body>
    <h1>Title</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

Yeh DOM tree me kuch aisa dikhai dega:

html
 ├── head
 └── body
     ├── h1
     └── p



2. DOM Tree ke Nodes~~
DOM me sab kuch nodes ke form me hota hai. Nodes ke alag-alag types hote hain:

    ## Element Node: HTML tags jaise <h1>, <p>.
    ## Text Node: Tags ke andar ka text.
    ## Attribute Node: Tags ke attributes (jaise id, class).
    ## Comment Node: HTML comments (<!-- comment -->).




3. DOM Manipulation~~
DOM manipulation ka matlab hai HTML content ya structure ko JavaScript ke through change karna. Common methods aur properties ko dekhein:

3.1 Selecting Elements~
Hum DOM ke elements ko select karne ke liye alag-alag methods use karte hain:

> getElementById()
     Ek element ko uske id ke basis par select karta hai.
       
       //let title = document.getElementById("myTitle");
       //console.log(title);

>  getElementsByClassName()
      Class ke basis par elements ko select karta hai.

    //let items = document.getElementsByClassName("list-item");

>querySelector() aur querySelectorAll()
    CSS selectors ka use karke elements ko select karta hai.

    //let mainDiv = document.querySelector("#main");
    //let allDivs = document.querySelectorAll(".container");
    

3.2 Changing Content~

>innerHTML:
  Element ke andar ka HTML content set ya get karne ke liye use hota hai.

     //document.getElementById("myDiv").innerHTML = "New Content";

>innerText / textContent:
  Sirf text content ko change karta hai.

    //document.getElementById("myDiv").innerText = "New Text";


3.3 Changing Styles~

    >CSS properties ko JavaScript ke through change kar sakte hain.

       //document.getElementById("myDiv").style.color = "blue";
       //document.getElementById("myDiv").style.backgroundColor = "yellow";

3.4 Adding/Removing Elements

>Add karna:

      //let newElement = document.createElement("p");
      //newElement.innerText = "This is a new paragraph.";
      //document.body.appendChild(newElement);

>Remove karna:

        //let removeElement = document.getElementById("oldDiv");
        //removeElement.remove();




4. Event Handling in DOM~~
DOM ke elements ke saath interact karne ke liye hum events use karte hain. Event ek action hai jo user ya browser trigger karta hai.
Example:

        document.getElementById("myButton").addEventListener("click", function() {
          alert("Button clicked!");
        });

Common Events:
    >click
    >mouseover
    >mouseout
    >keydown
    >load
    >submit



5. DOM Traversal~
DOM tree ke andar navigate karne ke liye kuch properties hoti hain:

    >parentNode:
      Parent node ko access karta hai.
    >childNodes:
      Sabhi child nodes ko access karta hai.
    f>irstChild / lastChild:
      Pehla aur aakhri child node ko access karta hai.
    >nextSibling / previousSibling:
      Same level ke adjacent nodes ko access karta hai.

Example:

       //let parent = document.getElementById("child").parentNode;
       //let children = document.getElementById("parent").childNodes;


6. Real-life Example~~
Ek button click par background color change karna:

<!DOCTYPE html>
<html>
  <body>
    <button id="myButton">Change Background</button>
    <script>
      document.getElementById("myButton").addEventListener("click", function() {
        document.body.style.backgroundColor = "lightblue";
      });
    </script>
  </body>
</html>
