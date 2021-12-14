//Create list of 2* numbers from table. Use 'for of' to make iteration to all elements in the table

const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number * 2)
}

//Create table [5, 8, 10, 23, 48, 60], divide it by 5 and display. Show even and odd numbers

let numbs = [5, 8, 10, 23, 48, 60]
for (const numb of numbs) {
    console.log(numb/5)
        if (numb%2 == 0) {
            console.log(`Number ${numb} is even`)
        } else {
            console.log(`Number ${numb} is odd`)
        }

}