const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 500
canvas.height = 540
document.body.append(canvas);

function listPoints(resolution, radius) {
    let r = radius
    let cx = 245
    let cy = 245
    let toRads = (n) => n * Math.PI / 180
    let points = [];
    for (let i = 270; i < 630; i += resolution) {
        let x = cx + (r * Math.cos(toRads(i)));
        let y = cy + (r * Math.sin(toRads(i)));
        points.push({
            x,
            y
        })
    }
    return points
};
// line {x1,x2,y1,y2}
function drawHand(lw, pos) {
    context.lineWidth = lw
    context.beginPath();
    context.moveTo(pos.x1, pos.y1);
    context.lineTo(pos.x2, pos.y2)
    context.stroke()
}

const drawDots = (width) => {

}
export default function roundClock() {
    let points = listPoints(6, 199)
    let minPoints = listPoints(6, 175);
    let hPoints = listPoints(30, 155);
    let tinyRadius = listPoints(6, 2)
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'black';
    points.forEach((point, index) => {
        let fillDots = (width) => {
            context.beginPath()
            context.ellipse(point.x, point.y, width, width, 0, 0, Math.PI * 2)
            context.closePath();
            context.fill()
        }
        index % 15 === 0?fillDots(8):
        index % 5 === 0 ?fillDots(5):fillDots(2)
    });
    let seconds = new Date().getSeconds();
    let mins = new Date().getMinutes();
    let hours = new Date().getHours();
    hours = hours > 12 ? hours % 12 : hours;
    drawHand(2, {
        x1: tinyRadius[seconds].x,
        x2: points[seconds].x,
        y1: tinyRadius[seconds].x,
        y2: points[seconds].y
    })
    drawHand(6, {
        x1: tinyRadius[mins].x,
        x2: minPoints[mins].x,
        y1: tinyRadius[mins].x,
        y2: minPoints[mins].y
    })
    drawHand(10, {
        x1: tinyRadius[hours].x,
        x2: hPoints[hours].x,
        y1: tinyRadius[hours].x,
        y2: hPoints[hours].y
    })
    context.beginPath();
    context.ellipse(canvas.width / 2 - 4, canvas.height / 2 - 25, 10, 10, 0, 0, Math.PI * 2)
    context.closePath();
    context.fill()
}