const arr = [
    {nam: 'qwe', age:22},
    {nam: 'zsa', age:11},
    {nam: 'fgh', age:45},
    {nam: 'nmf', age:55},
    {nam: 'frd', age:32},
    {nam: 'fgh', age:56},
    {nam: 'etdgd', age:67},
    {nam: 'ghhjm', age:78},
    {nam: 'jjkl', age:78}
]
const divbase = document.createElement('div')
divbase.classList.add('base')

const divtwo = document.createElement('div')
divtwo.classList.add('basetwo')

const body = document.body
body.appendChild(divbase)
body.appendChild(divtwo)

const cards = arr.map(elem => `<div class="cards"><p>Name: ${elem.nam}, Age: ${elem.age}</p><button class="btn">Close</button></div>`).join('')
divbase.innerHTML = cards

const buttons = document.querySelectorAll('.btn')
buttons.forEach(elem => elem.addEventListener('click', closefn))

function closefn(e){
    console.log(e.composedPath()[1])
    let out = e.composedPath()[1].outerHTML
    out = out.replace('<button class="btn">Close</button>',"")
    divtwo.insertAdjacentHTML('afterbegin', out)
    e.composedPath()[1].remove()
}