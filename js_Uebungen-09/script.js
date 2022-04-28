//06 random Numbers
let randomnum = Math.random()
console.log(randomnum)
let randomInteger = Math.round(Math.random() * 1000)
console.log(randomInteger)

//07 logische Operationen
// Erstelle zwei Zufallszahl zwischen 0 und 100 
let random1to100_ = Math.random() * 101
let random1to100__ = Math.random() * 101
console.log(random1to100_)
console.log(random1to100__)

if (random1to100_ < random1to100__ && random1to100_ < 50) {
    console.log("erste Zahl kleiner als die zweite UND die erste Zahl kleiner als 50 ")
} 

if (random1to100_ < 30 || random1to100__ < 30) {
    console.log("erste Zahl kleiner als 30 oder die zweite Zahl kleiner als 30")
}

if (random1to100_ < 50 && random1to100__ != 50) {
    console.log("erste Zahl kleiner als 50 UND die zweite Zahl ungleich 50")
}

//08 switch statement
 // Erstelle eine Zufallszahl zwischen 5 und 10 
let random5to10 = Math.round(Math.random() * 5 + 5)
console.log(random5to10)
switch (random5to10) {
    case 10:
        console.log("Ten");
    case 9:
        console.log("Nine");
    case 8:
        console.log("Eight")
    case 7:
        console.log("Seven");
    case 6:
        console.log("Six");
    case 5:
        console.log("Five");
}
//09 
for (let i = 1; i<=16; i++) {
    if (i < 5 || i > 8 && i < 13) {
        console.log ("o");
    }
    if (i > 4 && i < 9 || i > 12) {
        console.log ("x");
    }
    if (i%4 == 0) {
        console.log("\n")
    }
}
let evensum = 0
for (let b = 0; b <= 100; b++){
    if (b % 2 == 0) {
        evensum += b
    }
}
console.log(evensum)