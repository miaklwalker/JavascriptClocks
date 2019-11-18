const canvas  = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 500
canvas.height = 540
document.body.append(canvas);
function loadImage(url){
    return new Promise(resolve=>{
        const image = new Image();
        image.addEventListener('load',()=>{
            resolve(image)
        })
        image.src = url;
    })
}
function listPoints(resolution,radius){
    let r = radius
    let cx = 245
    let cy = 245
    let toRads = (n)=> n * Math.PI / 180
    let points = [];
    for(let i = 270 ; i <630 ; i+=resolution){
        let x = cx+(r*Math.cos(toRads(i)));
        let y = cy+(r*Math.sin(toRads(i)));
        points.push({x,y})
}
return points
}
export default function roundClock(){
loadImage('./download.png').then(img=>{
    let points = listPoints(6,199)
    let minPoints=listPoints(6,175);
    let hPoints = listPoints(30,165)
    setInterval(()=>{        
        context.drawImage(img,0,0,canvas.width,canvas.height)
        points.forEach(point=>{context.fillRect(point.x,point.y,10,10)});
        context.fillStyle ='black';
        let seconds = new Date().getSeconds();
        let mins = new Date().getMinutes();
        let hours = new Date().getHours();
        context.lineWidth = 2
    context.beginPath();
    context.moveTo(245,245);
    context.lineTo(points[seconds].x,points[seconds].y)
    context.stroke()

    context.lineWidth=4
    context.beginPath();
    context.moveTo(245,245);
    context.lineTo(minPoints[mins].x,minPoints[mins].y)
    context.stroke()

    context.lineWidth=8
    context.beginPath();
    context.moveTo(245,245);
    context.lineTo(hPoints[hours].x,hPoints[hours].y)
    context.stroke()
})
})
}
