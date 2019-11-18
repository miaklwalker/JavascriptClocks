import BoringClock from './boringClock.js';
import bitClock from './bitClock.js'
import htmlGenerator from './bitClockHTMLGenerator.js'
BoringClock();
bitClock()
setInterval(()=>{
    BoringClock()
    bitClock()
},1000)

