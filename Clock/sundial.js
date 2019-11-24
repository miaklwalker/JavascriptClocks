const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.width = 480
canvas.height = 480

let x = 0;
let y = 0;

const centerX = canvas.width / 2
const centerY = canvas.height / 2

let toRad = (n) => n * Math.PI / 180

const points = []

let numbers = [6,7,8,9,10,11,12,1,2,3,4,5,6]
let numPoints = []
function findPoint(x1, y1, rad, deg) {
   let top = {
      x: x1,
      y: y1
   }
   let other = {
      x: top.x + (rad * Math.cos(toRad(deg))),
      y: top.y + (rad * Math.sin(toRad(deg)))
   }
   return other

}
for (let i = -220; i < 40; i += .3612) {
   let triangle = findPoint(centerX, centerY, 200, i)
   let {x,y} = triangle
   points.push({x,y});
}

for(let j = -215 ; j < 40 ; j+=20){
    numPoints.push(findPoint(centerX,centerY,150,j))
}
console.log(numPoints.length)
console.log(points.length)

points.forEach(point=>{
   context.fillRect(point.x,point.y,10,10)
})

numPoints.forEach((point,index)=>{
    context.font = '32px times'
    context.fillText(`${numbers[index]}`,point.x,point.y)
})




export default function sundial(date){
let minutes = date.getMinutes()
let hours = date.getHours()

hours%=18
hours *=30
hours +=minutes

   x = points[hours].x
   y = points[hours].y

   let x2 = canvas.width - x
   let y2 = canvas.height - y

   const {height: h,width: w} = canvas

   context.strokeStyle = 'black'
   context.beginPath();
   context.moveTo(w / 2, h / 2);
   context.lineTo(x, y);
   context.closePath();
   context.stroke()
   context.strokeStyle = 'yellow'
   context.beginPath();
   context.moveTo(w / 2, h / 2);
   context.lineTo(x2, y2);
   context.closePath();
   context.stroke()

document.body.appendChild(canvas);
}