const bottle = {
    color: 'yellow',
    hold: 'water',
    price: '50',
    isCleaned: true
};
// getting the property name all
const keys = Object.keys(bottle);
// console.log(keys);
// get all values
const value = Object.values(bottle);
// console.log(value);
// get entities from object
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle)
