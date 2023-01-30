// events is a module that returns a class named EventEmitter that encapsulates functionalities to respond to and emit events
const EventEmitter = require("events");
const emitter = new EventEmitter(); // instantiate a new EventEmitter/ emitter is an object with methodss

// Simple example to use the emitter, in 2 ways, to emit events and to respond to events
// // event listener : respond to events using .on method
// emitter.on("bakePizza", function(){
//     console.log(" Baking a pizza!")
// })
// // event emitter : emitting events using .emit method 
// emitter.emit("bakePizza");

// Example With parameters
emitter.on("bakePizza", function(size, topping){
    console.log(`Baking a ${size} pizza with ${topping}!`)
});

// adding an additional emitter
emitter.on("bakePizza", function(size){
    if(size = "Family size"){
        console.log("Serving a free drink !")
    }
})

emitter.emit("bakePizza", 'Family size', 'Salami');


