var util = require('util');
var event = require('events');
class Class extends event.EventEmitter{}
Class.prototype.ratepoints = 0;
Class.prototype.rate = function(points){
	ratepoints = points;
	this.emit('rated');
}
Class.prototype.getPoints = function(){
	return ratepoints;
}
module.exports = Class;