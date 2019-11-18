let date = new Date();
let toggle = () =>{
    let state = false
    return ()=>{
        state = !state
        return state
    }
}
let colonToggle = toggle()
const getTime = ()=>{
    date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    if (hour > 12) {
        console.log(hour)
        hour %= 12;
    }
    
    return colonToggle()?`${month}-${day}-${year} 
    ${hour}:${minute} ${seconds}`:
    `${month}-${day}-${year} 
    ${hour}   ${minute} ${seconds}`
}

let previous
let h = document.getElementById('boringClock')
        document.body.append(h)
        h.style.border = '1rem solid'
        h.style.justifySelf = 'center'
        h.style.marginLeft = '450px'
        h.style.marginRight = '470px'
const writeToPage = (str)=>{
    h.innerText = str
}

const BoringClock = ()=>writeToPage(getTime());
export default BoringClock