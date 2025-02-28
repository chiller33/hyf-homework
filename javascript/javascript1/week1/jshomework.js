//Age-ify (A future age calculator)


let yearOfBirth;
let yearFuture;

yearOfBirth = 1999;
yearFuture = 2099;

const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)


let dogYearOfBirth;
let dogYearFuture;
let dogYear;
let shouldShowResultInDogYears;

dogYearOfBirth = 2018;
dogYearFuture = 2025;
shouldShowResultInDogYears = false;

dogYear = (dogYearFuture - dogYearOfBirth) * 7;

if (shouldShowResultInDogYears === true) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
} else {
    console.log("Your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in " + dogYearFuture);
}


//Housey pricey (A house price estimator)


let housePriceCalculation;
let width;
let depth;
let height;
let gardenSizeInM2;
let pricePaid;
let friend;

/*
Peter house
friend = "Peter"
width = 8;
depth = 10;
height = 10;
pricePaid = 2500000;
gardenSizeInM2 = 100;
*/

/*
Julia house
friend = "Julia";
width = 5;
depth = 11;
height = 8;
pricePaid = 1000000;
gardenSizeInM2 = 70;
*/

const volumeInMeters = width * depth * height;
housePriceCalculation = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePriceCalculation < pricePaid) {
    console.log(friend + ", you are paying too much!");
} else {
    console.log(friend + ", you are paying less. Well negotiated!");
} 


//Ez Namey (Startup name generator)

const firstWords = ["Easy", "Awesome", "Corporate", "Lush", "Gleam", "Nimble", "Brisk", "Breezy", "Brightly", "Swift"];
const secondWords = ["Elevate", "Zesty", "Snappy", "Hush", "Lively", "Mellow", "Glide", "Jolly", "Keen", "Zing"];

let startupName;
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10); 

startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2]; 

console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters")