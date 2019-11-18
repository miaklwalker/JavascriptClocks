const timeN = (num)=> (n) => n * num
const time1 = timeN(1);
const time2 = timeN(2);
const time4 = timeN(4);
const time8 = timeN(8);
const time16 = timeN(16);
const time32 = timeN(32);
const time64 = timeN(64);
const time128 = timeN(128);
const time256 = timeN(256);
const time512 = timeN(512);

let bit = '1100000001'
let num = 560
const bit2decimal =(bits)=>{
    let bitrep = Array.from(bits).map(bit=>Number(bit)).reverse()
    const bitConverter = [0,time1,time2,time4,time8,time16,time32,time64,time128,time256,time512];
        return bitConverter.reduce((accumulator,fn,index)=> accumulator+fn(bitrep[index-1]))
}
export default bit2decimal