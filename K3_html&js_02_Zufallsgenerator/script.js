function GenerateRandom() {
    lower = parseInt(document.getElementById("lower").value);
    higher = parseInt(document.getElementById("higher").value);
    console.log(lower, higher)
    maxRandomNumbers = higher - lower;
    randomNumber = Math.floor(Math.random() * (maxRandomNumbers+1))+lower;
    document.getElementById("output").innerHTML = randomNumber;
}