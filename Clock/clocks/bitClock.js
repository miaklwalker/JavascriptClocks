import makeBitTimer from "../functions/displayBit.js"

// Caching the Dom
let y = document.getElementById('decYear')
let d = document.getElementById('decDate')
let m = document.getElementById('decMonth')
let h = document.getElementById('decHour')
let mi = document.getElementById('decMinute')
let s = document.getElementById('decSecond')
let mis = document.getElementById('decMilliseconds')



export default function bitClock(date) {
    const {month, day, year, hour, minute, seconds, milli} = date;
    const dec = [m, d, y, h, mi, s, mis].forEach((div, index) => div.innerText = date[index])
    makeBitTimer(document.getElementById('bitClockYear'), year)
    makeBitTimer(document.getElementById('bitClockMonth'), month)
    makeBitTimer(document.getElementById('bitClockDate'), day)
    makeBitTimer(document.getElementById('bitClockHour'), hour)
    makeBitTimer(document.getElementById('bitClockMinute'), minute)
    makeBitTimer(document.getElementById('bitClockSecond'), seconds)
    makeBitTimer(document.getElementById('bitClockMilliSecond'), milli)
}