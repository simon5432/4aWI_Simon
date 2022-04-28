// 02 Berechne das Ergebnis von 17.4 / 3.9. Gib folgenden Satz aus: 


a = 17.4
b = 4.9

console.log("The result of" + a + "divided by", 3.9, "is" + a/b)

//Lege eine Variable firstname und eine Varialbe lastname an. Weise den Variablen Deinen Namen zu. Gib folgendes aus: 
let firstname = "Simon"
let lastname = "Schwaerzler"

console.log("Ich heiße", firstname, lastname)

// 03 Aufgabe zu Variablen Äpfel/ Bananen

let banana = "Banane"
let apple = "Apple"

let bananaPricePerKilo = 2.14
let applePricePerKilo = 3.43

let PricePerBanana = bananaPricePerKilo * 0.22
let PricePerApple = applePricePerKilo * 0.34

console.log("8 Äpfel kosten", PricePerApple * 8 + 
"\n17 Bananen kosten", PricePerBanana * 17 + 
"\n1000 kg Äpfel kosten", applePricePerKilo * 1000 + 
"\n1000 kg Bananen kosten", bananaPricePerKilo * 1000)

// 04 Schleifen

for (let countd = 10; countd>=0;countd--){
    console.log(countd)
}
for (let countu = 0; countu<=10;countu++){
    console.log(countu)
}
// Zähle von 7 bis 45 
for (let countu = 7; countu<=45;countu++){
    console.log(countu)
}
// Zähle von 9 bis 99 
for (let countu = 9; countu<=99;countu++){
    console.log(countu)
}
// Zähle rückwärts von 10 bis 0 
for (let countd = 10; countd>=0;countd--){
    console.log(countd)
}
// Zähle rückwärts von 1234 bis 1207 
for (let countd = 1234; countd>=1207;countd--){
    console.log(countd)
}
 

// Gib Deinen Namen genau 8 mal aus 
for (let countd = 8; countd>=0;countd--){
    console.log("Simon")
}
// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
for (let countu = 0; countu<=10;countu++){
    console.log(countu)
}
console.log("Simon")
for (let countd = 10; countd>=0;countd--){
    console.log(countd)
}


// 05 if-Bedingung
/* if (x vergleichsoperator y){
    ausführen
}*/
let x = 100

if (x < 7) {
    console.log("Mini")
} else if(7<= x && x < 90) {
    console.log("Medium")
} else {
    console.log("Large")
}
