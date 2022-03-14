
let count = 0


const ShowData = (num = count + 25) => {
    while(count < num){
        let h1 = document.createElement("h1")
        h1.innerHTML = `Masai Student ${count}`
        count++
        document.getElementById("container").append(h1)
    }
}

const debouncing = (func, delay)=>{
    return function (){
        setTimeout(()=>{
        func()
        },delay)
    }
}

let handleScroll =debouncing(ShowData, 500)

handleScroll()

let cont = document.getElementById("container")

cont.addEventListener("scroll", ()=>{
    if(cont.offsetHeight + cont.scrollTop >= cont.scrollHeight){
        handleScroll()
    }
})