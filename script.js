console.log("loaded!")

var centerdiv = document.querySelector(".vcenter")
console.log(centerdiv)
var counter = 0

window.addEventListener("click", e => {
  console.log(e)
  if (counter == 0) {
    counter += 1
    centerdiv.innerHTML = ""
    centerdiv.classList.add("purp")
    centerdiv.classList.remove("grey")
  }
})
