let list = document.querySelectorAll('.item')
let avancar = document.getElementById('avancar')
let voltar = document.getElementById('voltar')

let count = list.length
let active = 0 

avancar.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active +1
    list[active].classList.add('active')
}

voltar.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count -1 : active -1
    list[active].classList.add('active')
}


