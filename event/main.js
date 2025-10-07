// const whom = prompt("What is your name?", "typing your name")
// const confirmYourName = confirm(`You are ${whom}`)
// confirmYourName ? alert(`hello, ${whom}`) : alert(`hello, guest`)

// const okButton = document.querySelector("button")

// okButton.addEventListener("click", (e) => {
//   console.log(`event.target: ${e.target}`)
//   console.log(`event.currentTarget: ${e.currentTarget}`)
//   console.log(`event.eventPhase: ${e.eventPhase}`)
//   console.log(`event.type: ${e.type}`)
//   console.log("Button was clicked!")
// })
// const divElement = document.querySelector("div")
// divElement.addEventListener("click", (event) => {
//   console.log(`event.target: ${event.target}`)
//   console.log(`event.currentTarget: ${event.currentTarget}`)
//   console.log(`event.eventPhase: ${event.eventPhase}`)
//   console.log(`event.type: ${event.type}`)
//   console.log("Div element was clicked!")
// })

// const bodyElement = document.body
// bodyElement.addEventListener("click", (event) => {
//   console.log(`event.target: ${event.target}`)
//   console.log(`event.currentTarget: ${event.currentTarget}`)
//   console.log(`event.eventPhase: ${event.eventPhase}`)
//   console.log(`event.type: ${event.type}`)
//   console.log("Body element was clicked!")
// })
 

// const aElement = document.querySelector("a")
// aElement.addEventListener("click",(e) => {
//     e.preventDefault()
//     console.log("visit link was canceled")
// })


// //when click submit button , prevent default behavior and 
// // validate from data
// const submitButton = document.querySelector("input[type='submit']")
// console.log(submitButton)

// submitButton.addEventListener("click",(e) => {
//     e.preventDefault()
//     //validate data 
//     const inputElement = document.querySelectorAll("input")
//     inputElement.forEach((ele) => {
//         const attr = ele.getAttribute("type")
//         if (attr === "text"){
//             if (ele.value.trim().length === 0) 
//                 console.log("invaid data")
//         }
//     })
// })

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM is ready!')
//   const heading = document.createElement('h2')
//   heading.textContent = 'This was added when DOM was ready!'
//   document.body.appendChild(heading)
//   console.log('Heading added now.')
// })
// window.addEventListener('load', () => {
//   console.log('All resources (images, CSS, scripts) are fully loaded!')
//   console.log('Page is fully loaded')
// })

// const info = document.getElementById('info')
//  // Window resize event
// window.addEventListener('resize', () => {
//   info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
// })
//  // Window scroll event
// window.addEventListener('scroll', () => {
//   info.textContent = `Scrolled to Y: ${window.scrollY}`
// })
 
// const info = document.getElementById('info')

// info.addEventListener('mouseout', (event) => {
//   console.log('mouse out')
// })
//  info.addEventListener('mouseover', (event) => {
//   console.log('mouse over')
// })

// window.addEventListener('mousemove', (event) => {
//   info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
// }) 

const message = document.querySelector("message")
const dispaly = document.querySelector("p")

message.addEventListener("input",function () => {
    dispaly.textContent = message.value
})
 