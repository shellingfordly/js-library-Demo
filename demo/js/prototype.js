function Person(name){
  this.name = name
}
Person.prototype.say = function() {
  console.log(this.name);
}
const person1 = new Person('sss')
console.log(person1);
console.log(person1.__proto__ === Person.prototype);
console.log(Person);
console.log(Person.prototype);
console.log(person1.constructor === Person);
try {
  
  console.log(1)

} catch (error) {
  console.log(error);
  
}