import BoringClock from "./clocks/textTime.js"
import bitClock from "./clocks/bitClock.js";
import getDate from "./functions/getDate.js";
import makeClockRadio from "./clocks/clockRadio.js";
import roundClock from "./roundClock.js";



setInterval(()=>{
BoringClock();
bitClock(getDate())
makeClockRadio(getDate())
roundClock(getDate())
},10)


