const x = 100

if (x > 20) {
    console.log(`${x} > 20`)
} else {
    console.log(`${x} < 20`)
}

//alternative (this method only in simple condition)
const newX = (x > 20) ? `${x} > 20` : `${x} < 20`
console.log(newX)


//with functions
const isloggedIn = true

function loggedIn() {
    console.log('User is logged')
}

function loggedOut() {
    console.log("User isn't logged")
}

isloggedIn ? loggedIn() : loggedOut()

//Create variable. Check is an even number
//with function
const z = 70
function modulo() {
    if (z%2 == 0) {
        console.log('Z is an even number')
    } else {
        console.log("Z isn't an even number")
    }

}
modulo(z);

//with operator
/*const newX = (x > 20) ? `${x} > 20` : `${x} < 20`
console.log(newX)
*/
const t = 13
const modulo2 = (t%2) == 0 ? `${t} is an even number` : `${t} is not an even number`
console.log(modulo2)