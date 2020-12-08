const Mouse = require('./Mouse'); 
function Cat(name){
	this.name = name, 
	this.stomach = []
}

Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){
	animal.eat(); 
	this.stomach.push(animal); 
	}else {
		throw new Error('error while cat and dog'); 
	}
}

module.exports = Cat; 