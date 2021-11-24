//Prototype Inheritance
//Prototypes are just ways to call and create the methods of an object by creating it outside the object so as not to have a messy constructor. It also allows other objects to inherit the methos or prototypes :my understanding

// Create a constructor function of a person that takes in a firstname, lastname

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

//Create a person prototype
Person.prototype.sayFullName = function () {
  //returning the first and last names with template literals
  return `Hello ${this.firstname} ${this.lastname}`;
};

//Create a new constructor function that uses the Person constructor
function Teacher(firstname, lastname, subject) {
  //Call the constructor from the Person function
  //Calls the super constructor
  Person.call(this, firstname, lastname);
  this.subject = subject;
}

//Inherit the Person prototype
Teacher.prototype = Object.create(Person.prototype);

//To prevent Teacher from returing the parent constructor (person), set the teacher constructor to teacher
Teacher.prototype.constructor = Teacher;

//Create an instance of a person
const person1 = new Person("Abel", "Tesfaye");

console.log(person1);
console.log(person1.sayFullName());

//Override the Person sayFullName method
Teacher.prototype.sayFullName = function () {
  //returning the first and last names with template literals
  return `Your name is ${this.firstname} ${this.lastname}`;
};

//create an instance of a teacher
const teacher1 = new Teacher("Tom", "Segura", "English");
console.log(teacher1);
console.log(teacher1.sayFullName());
