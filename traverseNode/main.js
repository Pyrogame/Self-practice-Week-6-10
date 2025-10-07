//2. query any element node that have id "soup"
//2. query any element nodes that have class "soup"
//3. query any element nodes that have class "meat"

const queryElementID = document.getElementById("soup")
const querySelectorElement = document.querySelector(".menu")
const querySelectorAllElement = document.querySelectorAll(".vegan")
// console.log(queryElementID);
// console.log(querySelectorElement);
// console.log(querySelectorAllElement);

const meatAllElement = document.querySelectorAll(".meat")
// console.log(meatAllElement);
let beefSoupElement
meatAllElement.forEach(meat => { if (meat.textContent === "Beef Soup")  beefSoupElement = meat  })
// console.log(beefSoupElement);

// meatElements.forEach((ele) => {
//   const meatElement = ele
//   //find meat element that has text value equals to "Beef Soup" <li class="meat">Beef Soup</li> and store in variable beefSoupElement
//   if (meatElement.textContent.trim().includes("Beef Soup")) {
//     beefSoupElement = meatElement
//     console.log(beefSoupElement)
//   }
//   console.log(meatElement)
// })
    
//traverse all children nodes of <ul id="appetizer"> by using sibling relationship
/* <ul id="appetizer">
        <li class="vegan">Vegetable Rolls</li>
        <li class="meat">Chicken Wings</li>
        <li class="meat">Tuna Sandwich</li>
      </ul> */
const firstUlElement = document.getElementById("appetizer") //<ul id="appetizer">
const firstLiElement = document.querySelector("ul#appetizer>li.vegan") //  <li class="vegan">Vegetable Rolls</li>
// console.log(firstLiElement)

//visit all nodes siblings under <ul id="appetizer">
// let currentNode = firstLiElement
// while (currentNode != null) {
//   console.log(currentNode)
//   currentNode = currentNode.nextElementSibling
// }
 
//getElementsByName - name attributes (NodeList)
// const nameAttrElements = document.getElementsByName("fname")
// console.log(nameAttrElements) //NodeList [ input#fname, input#fullname ]
// //NodeList implements forEach, not other array function
// nameAttrElements.forEach((ele) => console.log(ele))

// //getElementsByTagName - tag name (HTMLCollection)
// const liElements = document.getElementsByTagName("li")
// console.log(liElements) //HTMLCollection { 0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat, 6: li.vegan, length: 7 }
// //HTMLCollection does not implement forEach, you must convert to array before you use array functions
// // liElements.forEach((ele) => console.log(ele)) //error:liElements.forEach is not a function
// //using Array.from to convert HTMLCollection to array
// const liElementsArray = Array.from(liElements)
// liElementsArray.forEach((ele) => console.log(ele))

// //getElementsByClassName - class name (HTMLCollection)
// const veganClassElements = document.getElementsByClassName("vegan")
// console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 }

//Single Node - getElementById, querySelector
//Collection nodes (Array-like (length, index) (NodeList|HTMLCollection)) - querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName
 

// const ulPrarent = document.getElementById("soup")
// console.log(ulPrarent)
// const ulChidren=ulPrarent.children
// let vegetElement=null
// Array.from(ulChidren).forEach((lieach) => {
//     if (lieach.textContent.trim() === "Vegetable Soup") vegetElement = lieach
// })
// ulPrarent.removeChild(vegetElement)

//1. find parent element
const ulPrarent = document.getElementById("soup")
console.log(ulPrarent)
//2. create element node
const NewLielement = document.createElement("li") 
NewLielement.textContent = "Cabbage Soup"
NewLielement.setAttribute = ("class" , "vegan")
//3. find reference node
let beefelement = null
const liChildren = ulPrarent.children
Array.from(liChildren).forEach((ele) => {
    if (ele.textContent.trim() === "Beef Soup") beefelement = ele
})
//4. insertBefore
ulPrarent.insertBefore(NewLielement, beefelement)