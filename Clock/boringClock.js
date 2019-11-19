let date = new Date();
const getTime = ()=>{
    date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    if(hour>12){hour=hour%12}
    if(hour===0){hour=12}
    return `${month}-${day}-${year} ${hour}:${minute} ${seconds}`

}


let h = document.getElementById('boringClock')
        h.style.border = '1rem solid'
        h.style.justifySelf = 'center'

const writeToPage = (str)=>{
    h.innerText = str
}

const BoringClock = ()=>writeToPage(getTime());
export default BoringClock