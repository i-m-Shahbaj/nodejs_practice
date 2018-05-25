var bookClass = require('./event.js');
book1 = new bookClass();
book2 = new bookClass();
book1.on('rated',function(){
console.log('books rated with'+book1.getPoints())});
book1.rate(10);