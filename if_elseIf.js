const pass = '!dsada2321d56kkd'
const mark = '!'

//display information about password lenght
if(pass.length > 10) {
    console.log('Hasło ma więcej niż 10 znaków')
} else if(pass.length = 10) {
    console.log('Hasło ma równe 10 znaków')
} else {
    console.log('Hasło jest za krótkie, ma mniej niż 10 znaków')
}

//display information about special mark
if(pass.includes(mark)) {
    console.log(`Hasło zawiera "${mark}""`)
} else {
    console.log('Hasło nie zawiera "' + mark + '"')
}

//Create z=50 i y=30 and 'if' to check x > y. Result should be displaying by template string

const z = 50
const y = 30

if (z > y) {
    console.log(`${z} jest większe od ${y}`)
}

//create variables: color = 'blue', newcolor = 'green'. By 'if' check color==newColor? Inform by console.log
const color = 'blue'
const newColor = 'green'

if (color == newColor) {
    console.log('Colors are the same')
} else {
    console.log('Colors are different')
}

//Create variables: a = 100, b = 50. By 'if' check: a > b; a = b; a < b. Display results

const a = 30
const b = 50

if (a > b) {
    console.log(`${a} > ${b};  a > b`)
} else if (a == b) {
    console.log(`${a} = ${b};  a = b`)
} else {
    console.log(`${a} < ${b};  a < b`)
}


/*Create variable v = 60. With 'if' check v >= 100 and display "v > 100"
Check v < 100 and v > 30 and display "v is in the middle". 
If v <= 30 display "v is too small". Text must be written by high letters (with function using!). */

const v = 99

if (v >= 100) {
    console.log('v is >= 100'.toUpperCase())
} else if (v < 100 && v > 30) {
    console.log('v is in the middle'.toUpperCase())
} else {
    console.log('v is too small'.toUpperCase())
}