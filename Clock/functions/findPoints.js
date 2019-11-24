
export default function findPoint(x1, y1, rad, deg) {
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