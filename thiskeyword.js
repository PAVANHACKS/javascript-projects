function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};
const p1 = new Person("Pavan");
p1.sayHi();
