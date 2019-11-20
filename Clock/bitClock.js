import dec2Bit from "./functions/dec2bin.js";
let getend = (index, array) => (array.length - 1) - index;
let date = new Date()
let getDate = () => {
    date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();
    date = new Date()
    const seconds = date.getSeconds();
    const milli = date.getMilliseconds();
    if (hour > 12) {
        hour %= 12
    }
    if (hour == 0) {
        hour = 12
    }
    return [month, day, year, hour, minute, seconds, milli];
}
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
let y = document.getElementById('decYear')
let d = document.getElementById('decDate')
let m = document.getElementById('decMonth')
let h = document.getElementById('decHour')
let mi = document.getElementById('decMinute')
let s = document.getElementById('decSecond')
let mis = document.getElementById('decMilliseconds')

export default function bitClock() {
    let date = getDate();
    const [month, day, year, hour, minute, seconds, milli] = date;
    const dec = [m, d, y, h, mi, s, mis].forEach((div, index) => div.innerText = date[index])
    makeBitTimer(document.getElementById('bitClockYear'), year)
    makeBitTimer(document.getElementById('bitClockMonth'), month)
    makeBitTimer(document.getElementById('bitClockDate'), day)
    makeBitTimer(document.getElementById('bitClockHour'), hour)
    makeBitTimer(document.getElementById('bitClockMinute'), minute)
    makeBitTimer(document.getElementById('bitClockSecond'), seconds)
    makeBitTimer(document.getElementById('bitClockMilliSecond'), milli)

}