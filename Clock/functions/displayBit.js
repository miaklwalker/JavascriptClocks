import dec2Bit from "./dec2bin.js"

let makeBitTimer = (container, num) => {
    let bitNum = dec2Bit(num)
    bitNum = bitNum.padStart(11, '0')
    let divs = []
    let ran = container.getElementsByTagName('div').length
    if (ran !== 0) {
        [...container.getElementsByTagName('div')].forEach(element => {
            element.remove()
        })
    }
    Array(11).fill(null).forEach(item => {
        divs.push(document.createElement('div'))
    });
    divs.forEach((div, index) => {
        div.style.backgroundColor = bitNum[index] == 1 ? 'white' : 'black'
    })
    divs.forEach(div => container.append(div))
}

export default makeBitTimer