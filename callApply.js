const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(100);
console.log(normalPerson.salary);