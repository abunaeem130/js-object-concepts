const kibria = {
    id: 101,
    money: 5000,
    name: 'rj kibria',
    treatDe: function (expense, bokshis, tax) {
        this.money = this.money - expense - bokshis - tax;
        console.log('here', this);
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const normalGolam = {
    id: 103,
    money: 4000,
    name: 'normal golam',
}
// call
// kibria.treatDe.call(heroBalam, 500, 100, 80);
// kibria.treatDe.call(heroBalam, 300, 400, 30);

// apply
kibria.treatDe.apply(heroBalam, [500, 100, 50])
kibria.treatDe.apply(heroBalam, [1000, 200, 100])

kibria.treatDe.apply(normalGolam, [400, 100, 50])

