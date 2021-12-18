//ex 1. Create variable letters with 'c' and 'd'. Add in beggining 'a' and 'b' and 
//to the end 'e' and 'f'. Check includes 'c'
const letters =['c', 'd']

letters.unshift('a','b')
console.log(letters)

letters.push('e','f')
console.log(letters)

console.log(letters.includes('c'))

//Create first array with numbers, second with 'meals' and new variable with connected both arrays
//Use two methods: with concat and spread

const numbers = [1, 2, 3, 5]
const meals = ['burger', 'pizza', 'fries', 'banana']

const menu = numbers.concat(meals)
console.log(menu)

const menu2 = [...numbers, ...meals]
console.log(menu2)


/*Create array = [1, 5, 13, 26, 48]. With using forEach or map (you will decide) show all letters * 5
New array must be new variable. Next check by 'if' and adequate loop go to array and
check which letters are even. Result must be a template string*/

const array = [1, 5, 13, 26, 48]

function action(x) {
    return x * 5
}
const newArray = array.map(action)
console.log(newArray)

function even(newArray) {
if (newArray % 2 == 0) {
    console.log(`${newArray} is even`)
} else {
    console.log(`${newArray} is odd`)
}
}

newArray.forEach(even)

/*Create array = 'blue'. Add additional kolors: at the end and beggining of array (with uppercase using). 
Display colors with first letter uppercase, with using methods to string  */

let colors = ['blue']

colors.unshift('yellow')
colors.push('green')

for (let i = 0; i < colors.length; i++)  {
    console.log(`Mój ulubiony kolor to: ${colors[i].toUpperCase()}`)
}

console.log(colors)


for (let i = 0; i < colors.length; i++)  {
    let char = colors[i].charAt(0).toUpperCase()
    let rest = colors[i].slice(1)
    let newColors = char.concat(rest)
    console.log(`Mój ulubiony kolor to: ${newColors}`)
}

/*Create string = 'Audi, Mercedes, BMW, Nissan, Dodge'. With method to strings change it to an array
Check the array's lenght > 3 and show info. If the array include any car brand - add any at the beggining
to array. If array hasn't this value - delete last value in array*/
const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'
let carsString = (cars.split(', '))

console.log(`carsString: ${carsString}`)

if(carsString.length > 3) {
    console.log('It is ok')
} else {
    console.log('It is not OK')
}

if (carsString.includes('Audi')) {
    carsString.unshift('Mazda')
    console.log(carsString)
} else {
    carsString.pop()
    console.log(carsString)
}
