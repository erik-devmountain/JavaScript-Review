//Create a Animal Constructor that has the following parameters. species, name, legs, color, 
//food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  //var this = Object.create(p.prototype)
  this.species = species;
  this. name = name; 
  this.legs = legs;
  this.color = color;
  this.food = food;
  //return this
}


//Now create a person function that creates an object and returns it 
//(not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender) {
  var obj = Object.create(person.prototype)
  
  obj.name = name;
  obj.age = age;
  obj.height = height; 
  obj.gender = gender;

  return obj;
}


//Create a animal array and a person array.

var animals = [];
var people = [];


//Create two instances of Animal and push those into your animal array

var tiger = new Animal('cat', 'tigre', 4, 'orange', ['hiphopopotomous', 'gazelle', 'dogs']);
var bear = new Animal('bear', 'bear', 4, 'brown', ['rabbits', 'groundhogs', 'dogs']);


//Create two instances of person and push those into your person array.

var thor = person('thor', 36, 72, 'male');
var sven = person('sven', 38, 72, 'male');


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  console.log('eating something');
}


//At this point, if we wanted to add something to every istance of person could we? 

//no, because we made person instances with maker function. it would work if we made it like this: 
// var person = function(name, age, height, gender) {
//   var obj = Object.create(person.prototype)
  
//   obj.name = name;
//   obj.age = age;
//   obj.height = height; 
//   obj.gender = gender;

//   return obj;
// }
//constructor inserts that stuff for us 


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?  
  //defines an object for you and returns it
  2) What's a good way to describe the keyword 'this'
  //the object that is being created 
  3) Can a normal function which creates an object and then returns that object use the prototype?
  //no, not without adding in the missing parts
  4) What happens if you forget to use 'new' when calling a constructor?
  //nothing will happen, the variable will get assigned nothing
*/