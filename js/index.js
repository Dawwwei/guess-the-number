const form = document.getElementById('form')
const input = document.getElementById('input')
let guess = 4;
const generateRandomNumber = () => Math.floor(Math.random() * 20) + 1
let randomNumber = generateRandomNumber()

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value) return alert('Please enter a number')
    if (input.value != randomNumber) {
        guess--
        if (guess == 0) {
            alert('You lost! The number was ' + randomNumber)
            guess = 4
            randomNumber = generateRandomNumber()
        } else {
            alert('Wrong! You have ' + guess + ' guesses left. Hint, the number is ' + (input.value > randomNumber ? 'smaller' : "bigger"))
        }
    } else {
        alert('You won! The number was ' + randomNumber)
        guess = 4
        randomNumber = generateRandomNumber()
    }
    input.value = ''
})