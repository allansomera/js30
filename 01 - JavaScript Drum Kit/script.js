window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  console.log(key)
  key.classList.toggle("playing")
  const removeTransition = (e) => {
    console.log(e)
  }

  const keys = document.querySelector(".key")
  keys.forEach((key) => key.addEventListener("transitionend", removeTransition))
})
