const button1 = document.getElementById('button1');
const output = document.getElementById('output');
const header = document.createElement('h1');
const pin = '1122'
let nilai = ''
const submit = document.getElementById('submit')
const del = document.getElementById('delete')

button1.onclick = function() {
    const text = document.createTextNode('1')
    nilai += '1'
    header.appendChild(text)
    output.appendChild(header)
}
button2.onclick = function() {
    const text = document.createTextNode('2')
    nilai += '2'
    header.appendChild(text)
    output.appendChild(header)
}
button3.onclick = function() {
    const text = document.createTextNode('3')
    nilai += '3'
    header.appendChild(text)
    output.appendChild(header)
}
button4.onclick = function() {
    const text = document.createTextNode('4')
    nilai += '4'
    header.appendChild(text)
    output.appendChild(header)
}
submit.onclick = function() {
    const popup = document.getElementById('pop')
    const header = document.createElement('h1');
    
    if (nilai == pin){
        const text = document.createTextNode('Pin Benar')
        del_r = document.getElementById('salah')
        header.appendChild(text)
        header.id = "benar"
        header.style.color = "green";
        pop.appendChild(header)
        del_r.remove()
    } else{
        const text = document.createTextNode('Pin Salah')
        del_g = document.getElementById('benar')
        header.appendChild(text)
        header.id = "salah"
        header.style.color = "red";
        pop.appendChild(header)
        del_g.remove()
    }
}
del.onclick = function() {
    nilai = ''
    header.textContent = ''
}
