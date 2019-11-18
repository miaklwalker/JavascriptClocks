let config = {
    height:240,
    width:240,
}
const {height,width}=config;

let drawCanvas = ()=>{
    let bool = false;
    let canvas
    let context
    return()=>{
if(!bool){
    bool = true
 canvas = document.createElement('canvas')
canvas.width = width;
canvas.height = height;
 context = canvas.getContext('2d');
document.body.appendChild(canvas);
return context;
}else{return context};
}}
let increment = (members) => members.forEach(member=>console.log(member));
let decrement = (members) => members.forEach(member=>member-=1);
let i = 0;
let s = 0;
let m = 0;
let h = 0;

export default function drawClock(){
let context = drawCanvas()()
i < 30 ? s++:s--;
i < 30 ? m++:m--;
i < 30 ? h++:h--;
i===60 ? i = 0 : i;
i++
console.log(s,m,h,i);

context.clearRect(0,0,width,height)
context.fillRect(0,0,width,height);

context.fillStyle='white'
context.ellipse(width/2,height/2,120,120,0,0,Math.PI*2);

context.fill()
context.fillStyle ='black'

context.fillRect(115,0,10,20);
context.fillRect(0,115,20,10);
context.fillRect(115,220,10,20);
context.fillRect(220,115,20,10);
//hour hand
context.beginPath();
context.moveTo(width/2,height/2);
context.lineTo(width/2,30+h);
context.lineWidth = 5
context.stroke()

// minute hand
context.beginPath();
context.moveTo(width/2,height/2);
context.lineTo(140,20+m);
context.lineWidth = 5
context.stroke()

// second hand
context.beginPath();
context.moveTo(width/2,height/2);
context.lineTo(170,20+s);
context.lineWidth = 5
context.stroke()
}
