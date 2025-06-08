let firstName;
function getReply(command) {
    if (command.startsWith("Hello my name is")) {
        const tempArray = command.split(" ");
        const nameOfPerson = tempArray[tempArray.length - 1];
        firstName = nameOfPerson;
        if (nameOfPerson == undefined) {
            return 'Introduce yourself with "Hello my name is ..."';
        }
        else {
            return `Nice to meet you ${nameOfPerson.toLowerCase()}`;
        }
    }
    else if (command.startsWith("What is my name")) {
        if (firstName == undefined) {
            return 'Introduce yourself with "Hello my name is ..."';
        }
        else {
            return `Your name is ${firstName}`;
        }
    }
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
//console.log(getReply("Hello my name is Benjamin Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
//console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"