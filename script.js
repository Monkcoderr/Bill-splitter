const mi = document.querySelector(".money");
    const pi = document.querySelector(".nop");
    const gba = document.querySelector(".gb");
    const epb = document.querySelector(".eb");
    const cot = document.querySelector(".ctip")
    const btt = document.querySelector(".button")
    let st = 0
gba.addEventListener('click',()=>{
//     const boi = parseInt(mi.value);
//         const noop = parseInt(pi.value);
//         const coot = parseInt(cot.value);
        
//         const eop = (boi + coot) / noop;
//         epb.innerHTML = eop
// console.log(eop)

const ct = parseInt(cot.value)
const boi = parseInt(mi.value);
const noop = parseInt(pi.value);
const eop = (boi + ct+st) / noop;
    epb.innerHTML = eop
})
 
btt.addEventListener('click',(e)=>{
    [...btt.children].forEach((bo)=>{
        bo.classList.remove('s')
    })
    
    e.target.classList.add("s")
    // const ct = parseInt(e.target.innerHTML)
    // const boi = parseInt(mi.value);
    // const noop = parseInt(pi.value);
    // const eop = (boi + ct) / noop;
    //     epb.innerHTML = eop
        st = parseInt(e.target.innerText)
       cot.value = 0


})

cot.addEventListener('click',()=>{
    st = 0;
    cot.value="";
    [...btt.children].forEach((bo)=>{
        bo.classList.remove('s')
    })
    
    
})