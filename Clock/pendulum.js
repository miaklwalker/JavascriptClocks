const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.width = 150
canvas.height = 250

document.body.appendChild(canvas)

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);


const centerX = canvas.width / 2
const centerY = 0


const points = [];


for (let i = 70; i < 110; i += .4) {
    let triangle = findPoint(centerX, centerY, 150, i)
    let {
        x,
        y
    } = triangle
    points.push({
        x,
        y
    })
}

let i = 0
let j = 1

export default function drawPendulum() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (i >= points.length - 1) {j *= -1};
    if (i < 1) { j *= -1;i += 1};
    i += j
    
    context.beginPath()
    context.moveTo(centerX, centerY);
    context.lineTo(points[i].x, points[i].y);
    context.stroke();
    context.strokeStyle = 'Gold'
    context.lineWidth = 4
    context.closePath();

    context.beginPath();
    context.fillStyle = 'gold'
    context.ellipse(points[i].x, points[i].y, 20, 20, 0, 0, Math.PI * 2);
    context.fill();
    context.closePath()
}