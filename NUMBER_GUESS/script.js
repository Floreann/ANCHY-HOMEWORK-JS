document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("value").value;
    if (!inputValue) {
        return;
    }
const randomNumber = randomNumberGenerator();
if (Number(inputValue) === randomNumber) {
    document.getElementById("result").innerHTML = "Gle čuda, pogodio si!";}
    else {
        document.getElementById("result").innerHTML = "Znala sam da češ pogriješiti! . Pravi broj je: " + randomNumber;
    }

  
}; 

const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * 100 );
    return number; 
}