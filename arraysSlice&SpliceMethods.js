const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

//With using 'slice' show number2 = [0, 0] and number3 = [2, 2, 2]
console.log(numbers)
const numbers2 = numbers.slice(0, 2)
const numbers3 = numbers.slice(4)

console.log(numbers2)
console.log(numbers3)

//With using 'splice' show 2 last elements from array 'colors' and take them to new array 'randomStuff. Show it in console

const randomStuff = colors.splice(3,2)
console.log(colors)
console.log(randomStuff)


//With using 'splice' create variable 'newCars' with

const newCars = cars.splice(2, 4)
console.log(cars)
console.log(newCars)