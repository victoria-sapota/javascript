const arr = [true, 123, 'hello']
console.log(arr)

const btns = document.querySelectorAll('button')
console.log(btns)

function btnMsg(e) {
    console.log(`Clicked ${e.target.textContent} !`)
}

btns.forEach(btn => btn.addEventListener('click',btnMsg))