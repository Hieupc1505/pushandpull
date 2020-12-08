
const dog = require('./mouse.js'); 
const Cat = require('./cat.js'); 

var tom = new Cat('tom'); 
var jak = new dog('jack'); 

tom.eat(jak); 
console.log(tom); 