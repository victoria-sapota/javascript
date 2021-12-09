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