const bottle = {
    color: 'yellow',
    hold: 'water',
    price: '50',
    isCleaned: true
};
/*
for(let i = 0; i< 10; i++)
for(const data of datas){}// array for
for(const prop in student){}// object for
*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop])
}

//  advanced
const entities = Object.entries(bottle);
// console.log(entities);
const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

// 
// const arr = ['color', 'jeans', 'tom'];
// arr[0];