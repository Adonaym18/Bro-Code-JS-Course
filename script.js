// Objects = A collection of related properties and/or methods 
//           Can represent real world objects (people, products, places) 
//            object = {key:value,
//                      function()}


//* Ex 1

const person1  = {
    firstName: "Spongebob",
    lastName: "Sqaurepants", 
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("Hi! I am Spongebob!")}, 
    eat: () => {console.log("I am eating a Krabby Patty")},
}

const person2  = {
    firstName: "Patirck",
    lastName: "Star", 
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey, I'm Patrick...")}, 
    eat: () => {console.log("I am eating rost beef, chicken, and pizza")},
}

person1.eat(); 
person2.eat(); 



