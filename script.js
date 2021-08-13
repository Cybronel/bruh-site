const bruh = document.querySelector('h1')
const bruhSound = document.getElementById('bruh')

bruh.addEventListener('click', () => {
    bruhSound.pause()
    bruhSound.currentTime = 0
    bruhSound.play()
})