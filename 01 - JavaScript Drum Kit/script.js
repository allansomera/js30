function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  // console.log(key)
  key.classList.add("playing")
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return
  // console.log(e.propertyName)
  // this.classList.toggle("playing")
  // console.log(this)
  this.classList.remove("playing")
}

// const keys = document.getElementsByClassName("key")
const keys = document.querySelectorAll(".key")
// console.log(keys)
keys.forEach((k) => {
  k.addEventListener("transitionend", removeTransition)
})

window.addEventListener("keydown", playSound) ,,,
