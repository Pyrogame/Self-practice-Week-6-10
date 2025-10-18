document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("result").textContent = "Button Clicked!"
})

const msg = document.querySelector("#message")
const out = document.querySelector("#output")
msg.addEventListener("input", () => {
  out.textContent = msg.value
})

const box = document.getElementById("box")
box.addEventListener("mouseover", ()=> box.style.background="green")
box.addEventListener("mouseout", ()=> box.style.background="gray")

let count = 0
document.getElementById("counter").addEventListener("click",()=>{
  count++
  document.getElementById("count").textContent = count
})