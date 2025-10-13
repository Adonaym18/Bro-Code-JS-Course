// this = reference to the obkect where THIS is used 
//       (the obkect depends on the immediate context) 
//       person.name = this.name



const person1 = {
    name: "Spongebob",
    favFood: "Hambergers", 
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)}, 
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}, 
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza", 
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)}, 
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}, 
}

person1.eat();  
person2.eat();  
