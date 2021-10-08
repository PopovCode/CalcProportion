const btn = document.querySelector('button')
const calculated = document.querySelector('.calculated')
let values = {}

btn.addEventListener("click", () => {
    let lastRes = document.querySelectorAll('.result')
    if (lastRes.length > 0){
        document.querySelectorAll('.result').forEach(e => e.remove())
    }
    dataCollect()
    createResult()

})

const dataCollect = () => {
    values.a = document.querySelector('#valA').value
    values.b = document.querySelector('#valB').value
    values.c = document.querySelector('#valC').value
}

const createResult = () => {
    let res = document.createElement('div')
    res.className = "result"
    let d = Number(values.b) * Number(values.c) / Number(values.a)
    res.innerHTML = `${values.b} * ${values.c} / ${values.a} = ${d.toFixed(2)}<br> X = ${d.toFixed(2)} %`
    calculated.appendChild(res)
}