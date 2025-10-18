// เมื่อคลิกปุ่ม submit ให้ป้องกัน default behavior และตรวจสอบข้อมูล
const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  // validate data
  const inputElements = document.querySelectorAll("input[type='text']")
  let isValid = true

  inputElements.forEach((ele) => {
    if (ele.value.trim().length === 0) {
      console.log("invalid data")
      isValid = false
    }
  })

  const message = document.getElementById("message")
  message.textContent = isValid ? "ข้อมูลถูกต้อง ส่งสำเร็จ!" : "กรุณากรอกข้อมูลให้ครบ"
})

// DOMContentLoaded: ทำงานเมื่อ DOM พร้อมแล้ว
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!")
  const heading = document.createElement("h2")
  heading.textContent = "This was added when DOM was ready!"
  document.body.appendChild(heading)
  console.log("Heading added now.")
})

// เมื่อโหลดทุก resources เสร็จ
window.addEventListener("load", () => {
  console.log("All resources are fully loaded!")
  console.log("Page is fully loaded")
})

// แสดงข้อมูลเมื่อ resize หรือ scroll
const info = document.getElementById("info")

window.addEventListener("resize", () => {
  info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener("scroll", () => {
  info.textContent = `Scrolled to Y: ${window.scrollY}`
})

// จัดการ mouseover และ mouseout
info.addEventListener("mouseover", () => {
  console.log("mouse over")
})

info.addEventListener("mouseout", () => {
  console.log("mouse out")
})

// แสดงตำแหน่งของ mouse
window.addEventListener("mousemove", (event) => {
  info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
})
