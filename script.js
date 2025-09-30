// forEach() = method used to iterate over the elemnts 
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided to the callback

// ex
// let numbers = [1, 2, 3, 4, 5]; 

// numbers.forEach(cube); 
// numbers.forEach(display);

// function double(element, index, array){
//   array[index] = element * 2;
// }

// function triple(element, index, array){
//   array[index] = element * 3;
// }

// function square(elemnt, index, array){
//   array[index] = Math.pow(elemnt, 2); 
// }

// function cube(elemnt, index, array){
//   array[index] = Math.pow(elemnt, 3); 
// }

// function display(element){
//   console.log(element); 
// }

//* ex

let fruits = ["apple", "orange", "banana", "coconut"]; 

fruits.forEach(cap); 
fruits.forEach(display); 


function upperCase (element, index, array){
  array[index] = element.toUpperCase(); 
}

function lowerCase (element, index, array){
  array[index] = element.toLowerCase(); 
}

function cap(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
  console.log(element); 
}

