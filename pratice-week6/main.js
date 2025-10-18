const ul = document.createElement("ul")
const items = ["Home", "About", "Contact"]
items.forEach(text => {
  const li = document.createElement("li")
  li.textContent = text
  ul.appendChild(li)
})
document.getElementById("menu").appendChild(ul)


document.getElementById("intro").textContent = "Welcome to KMUTT"


window.addEventListener("load", () => {
  document.getElementById("box").style.backgroundColor = "#87cefa"
})

const btn = document.getElementById("toggle")
const info = document.getElementById("info")
btn.addEventListener("click", () => {
  if (info.style.display === "none") {
    info.style.display = "block"
    btn.textContent = "Hide"
  } else {
    info.style.display = "none"
    btn.textContent = "Show"
  }
})