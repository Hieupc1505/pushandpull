
const Mouse = require('./mouse.js'); 
const Cat = require('./cat.js'); 

var tom = new Cat('tom'); 
var jak = new Mouse('jack'); 

tom.eat(jak); 
console.log(tom); 