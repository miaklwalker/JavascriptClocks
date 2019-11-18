let htmlGenerator = ()=>{
    document.body.innerHTML = `
    <div id="grid-container">
    <div id="year"> Year </div>
    <div id="date"> Day </div>
    <div id="month"> Month </div>
    <div id="hour"> Hour </div>
    <div id="minute"> Minute </div>
    <div id="second"> Second </div>
    <div id="milliseconds">MilliSecond</div>
    <div id="bitClockYear"></div>
    <div id="bitClockDate"></div>
    <div id="bitClockMonth"></div>
    <div id="bitClockHour"></div>
    <div id="bitClockMinute"></div>
    <div id="bitClockSecond"></div>
    <div id="bitClockMilliSecond"></div>
  </div>`
}
export default htmlGenerator