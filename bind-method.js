const kibria = {
    id: 101,
    money: 5000,
    name: 'rj kibria',
    treatDe: function (expense) {
        this.money = this.money - expense;
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

kibria.treatDe(100);
kibria.treatDe(500);

const heroTreatDey = kibria.treatDe.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(50);
heroTreatDey(2000);
heroTreatDey(20);

const golamTreatDe = kibria.treatDe.bind(normalGolam);
golamTreatDe(500);