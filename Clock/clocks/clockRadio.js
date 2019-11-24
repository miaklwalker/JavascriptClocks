import makeSevenSegmentDisplay from "../sevenSegmentClock.js";



let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
canvas.width = 480
document.body.appendChild(canvas)


// Values for the seven segment display
let values = {
    0:[true,false,true,true,true,true,true],
    1:[false,false,false,false,true,false,true],
    2:[true,true,true,true,false,false,true],
    3:[true,true,true,false,true,false,true],
    4:[false,true,false,false,true,true,true],
    5:[true,true,true,false,true,true,false],
    6:[true,true,true,true,true,true,false],
    7:[true,false,false,false,true,false,true],
    8:[true,true,true,true,true,true,true],
    9:[true,true,true,false,true,true,true],
}


export default function makeClockRadio(date){
    let {hour, minute, seconds } = date;
    let hours = hour
    let firstDigit = seconds%10
    let secondDigit = Math.trunc(seconds/10)
    let thirdDigit = minute%10
    let fourthDigit = Math.trunc(minute/10)
    if(hours>12){hour%=12}
    if(hours===0){hours=12}
    let fifthDigit = hour%10
    let sixthDigit = Math.trunc(hours/10)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[firstDigit]),400,0)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[secondDigit]),320,0)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[thirdDigit]),240,0)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[fourthDigit]),160,0)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[fifthDigit]),80,0)
    context.drawImage(makeSevenSegmentDisplay(0,0)(...values[sixthDigit]),0,0)
}