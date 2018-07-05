console.log("loaded!")

var letters = []
var centerdiv = document.querySelector(".vcenter")
console.log(centerdiv)

window.addEventListener("keydown", e => {
  console.log(e)
  if (e.key != "Shift" && e.key != "CapsLock" && e.key != "Backspace" ) {
    letters.push(e.key)
    console.log(letters)
  }
  if (e.key == "Backspace") {
    letters.pop()
  }
  centerdiv.innerHTML = letters.join("")
})
