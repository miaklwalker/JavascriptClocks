const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 80
canvas.height = 160

function makeTop(x,y,width,height){
    context.beginPath();
    context.moveTo(x,y)
    context.lineTo(width-5,y)
    context.lineTo(width,y+height/2)
    context.lineTo(width-5,y+height)
    context.lineTo(x,y+height)
    context.lineTo(x-5 , y+height/2)
    context.lineTo(x,y)
    context.closePath()
    context.fill();
}

const toRad = (n)=>n*(Math.PI/180)


export default function makeSevenSegmentDisplay(x,y){
    context.fillStyle = 'black'
    context.fillRect(x,y,80,160)
    return (a,b,c,d,e,f,g)=>{
        context.fillStyle=a?'red':'black';
        makeTop(x+25,y+10,60,10)
        context.fillStyle=b?'red':'black';
        makeTop(x+25,y+70,60,10)
        context.fillStyle=c?'red':'black';
        makeTop(x+25,y+130,60,10)
        context.fillStyle=d?'red':'black';
        context.save()
        context.translate(40,80)
        context.rotate(toRad(90));
        makeTop(4,20,54,10)
        context.fillStyle=e?'red':'black';
        makeTop(4,-30,54,10)
        context.fillStyle=f?'red':'black';
        makeTop(-58,20,-6,10)
        context.fillStyle=g?'red':'black';
        makeTop(-58,-30,-6,10)
        context.restore()
        return canvas
    }
}