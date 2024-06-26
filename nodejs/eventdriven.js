// In event driven approach we look at a event which occurs and then based on that event we call the callback function
// Example : Ordering a pizza with a size and toppings properties

const EventEmitter = require('node:events');

const event = new EventEmitter();
event.emit('order-pizza',('large','mushrooms'));  // Run Non Blocking (Asynchronously) only when the event is there

event.on('order-piza', (size,topping) =>{
    console.log(`Your Oder is Placed. A ${size} pizza with ${topping} as toppings is getting baked`);
});
event.on('order-piza',(size)=>{
    if(size === 'large'){
        console.log('You have attained $25 Amazon Voucher');
    }
})


console.log("Code before the event");
// event.emit('order-pizza','large');  // Run Non Blocking (Asynchronously) only when the event is there
console.log("Code after the event");

