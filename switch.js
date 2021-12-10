//Display name of variable day
const day = 'Thursday'

switch (day) {
    case 'Monday':
        console.log('Today is Monday')
        break

    case 'Tuesday':
        console.log('Today is Tuesday')
        break

    case 'Wednesday':
        console.log('Today is Wednesday')
        break

    case 'Thursday':
        console.log('Today is Thursday')
        break
    
    case 'Friday':
        console.log('Friday')
        break

    case 'Saturday':
        console.log('Today is Saturday')
        break

    case 'Sunday':
        console.log('Today is Sunday')
           break
        
    default:
        console.log('Error')
}

//Create variable promo='20%' and 3 cases: 10%, 20%, 30% and display value of a discount
const promo = '80%'

switch(promo) {
    case '30%':
        console.log('Dziś mamy 30% zniżki')
    break

    case '20%':
        console.log('Dziś mamy 20% zniżki')
    break

    case '10%':
        console.log('Dziś mamy 10% zniżki')
    break

    default:
        console.log(`Dziś mamy ${promo} zniżki`)
}