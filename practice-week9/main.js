// เมื่อโหลดหน้าเสร็จแล้ว เริ่มทดสอบ event
document.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("log")

  // Helper function สำหรับแสดงผลลงหน้าเว็บแทน console
  const writeLog = (text) => {
    log.textContent += text + "\n"
  }

  // ตัวอย่าง confirm ชื่อ
  const whom = prompt("What is your name?", "Type your name")
  const confirmYourName = confirm(`You are ${whom}`)
  confirmYourName ? alert(`Hello, ${whom}!`) : alert(`Hello, guest!`)

  const okButton = document.querySelector("button")
  const divElement = document.querySelector("div")
  const bodyElement = document.body

  okButton.addEventListener("click", (e) => {
    writeLog("=== BUTTON CLICK ===")
    writeLog(`event.target: ${e.target.tagName}`)
    writeLog(`event.currentTarget: ${e.currentTarget.tagName}`)
    writeLog(`event.eventPhase: ${e.eventPhase}`)
    writeLog(`event.type: ${e.type}`)
    writeLog("Button was clicked!\n")
  })

  divElement.addEventListener("click", (event) => {
    writeLog("=== DIV CLICK ===")
    writeLog(`event.target: ${event.target.tagName}`)
    writeLog(`event.currentTarget: ${event.currentTarget.tagName}`)
    writeLog(`event.eventPhase: ${event.eventPhase}`)
    writeLog(`event.type: ${event.type}`)
    writeLog("Div element was clicked!\n")
  })

  bodyElement.addEventListener("click", (event) => {
    writeLog("=== BODY CLICK ===")
    writeLog(`event.target: ${event.target.tagName}`)
    writeLog(`event.currentTarget: ${event.currentTarget.tagName}`)
    writeLog(`event.eventPhase: ${event.eventPhase}`)
    writeLog(`event.type: ${event.type}`)
    writeLog("Body element was clicked!\n")
  })
})
