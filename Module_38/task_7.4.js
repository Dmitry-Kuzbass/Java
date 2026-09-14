const person = {
    name: "Иван",
    age: 25
};

function setFullName(fullNameString) {
    this.fullName = fullNameString;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person); 

