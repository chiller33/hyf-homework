const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
for (i in names) {
    if (nameToRemove === names[i]) {
        names.splice(i, 1);
    }
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//when will we be there

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function timeCalculator(objectTravelInfo) {
    const time = objectTravelInfo.destinationDistance/objectTravelInfo.speed;
    const inHours = Math.floor(time);
    const inMinutes = Math.round((time % 1)*60);
    return `${inHours} hours and ${inMinutes} minutes\n`;
}

const travelTime = timeCalculator(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//series duration of my life

const seriesDurations = [
    {
    title: "Community",
    days: 1,
    hours: 14,
    minutes: 30,
    },
    {
    title: "Rick and Morty",
    days: 1,
    hours: 2,
    minutes: 2,
    },
    {
    title: "Bojack Horseman",
    days: 1,
    hours: 7,
    minutes: 40,
    },
];

function logOutSeriesText(objectSeriesDurations) {
    // write code here
    let totalProportion = 0;
    for (i of objectSeriesDurations) {
        const totalSeriesMinutes = i.days * 24 * 60 + i.hours * 60 + i.minutes;
        const proportion = (totalSeriesMinutes / (80 * 365 * 24 * 60)) * 100;
        totalProportion = totalProportion + proportion;
        console.log(`${i.title} took ${proportion.toFixed(3)}% of my life`);
    }
    console.log(`\nIn total that is ${totalProportion.toFixed(3)}% of my life`);
}

logOutSeriesText(seriesDurations);

//smart-ease note-taking app

const notes = [];

function saveNote(content, id) {
    // write some code here
    const arr = {content, id}; 
    notes.push(arr);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log('\n',notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    // your code here
    if (isNaN(id) || id == null) {
        return "Error";
    }
    else {
        for (let i in notes) {
            if (notes[i].id === id) {
                return notes[i];
            }
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
    // your code here
    for (let i in notes) {
        console.log(`The note with id: ${notes[i].id} has the following note text: ${notes[i].content}\n`);
    }
}

logOutNotesFormatted(); // should log out the text below

  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry