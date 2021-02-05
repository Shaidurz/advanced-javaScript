const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Jashim",
    salary: 20000,
}

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(3000);
console.log(heroPerson.salary);