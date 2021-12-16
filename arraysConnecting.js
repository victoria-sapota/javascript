// .map method
const numbers = [1, 2, 3, 5]

function multiply(x) {
    return x * 2
}

const newNumbers = numbers.map(multiply)
console.log(numbers)
console.log(newNumbers)

//arrays connecting

const nums = [1, 4, 8, 12]
const abc = ['a', 'b', 'c']
const newAbc = numbers.concat(abc)
console.log(newAbc)

//connecting with '...'
const drinks = ['pepsi', 'coffee', 'water']
const meals = ['chicken', 'burger', 'apple']

const menu = meals.concat(drinks)
console.log(...menu)

//or

const menu2 = [...meals, ...drinks]
console.log(menu2)