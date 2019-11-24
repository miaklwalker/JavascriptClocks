export default function getDate  () {
    let date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();
    date = new Date()
    const seconds = date.getSeconds();
    const milli = date.getMilliseconds();
    return {month, day, year, hour, minute, seconds, milli};
}