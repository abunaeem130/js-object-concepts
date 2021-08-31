const student = {
    id: 34,
    money: 5000,
    name: 'Subur',
    major: 'mathmatics',
    isrich: true,
    subject: ['english', 'economics', 'aljebra', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: 'mathmatics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDe: function (expense, bokshis) {
        this.money = this.money - expense - bokshis;
        return this.money
    }
}

student.takeExam()
const remaining1 = student.treatDe(900, 100);
const remaining2 = student.treatDe(500, 50);
console.log(remaining2);