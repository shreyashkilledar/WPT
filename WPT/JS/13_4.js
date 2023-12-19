let callback = ()=>{console.log("hi")}

let intervalId = setInterval(callback,70)

setTimeout(()=>{console.log("settimeout callback runs calling clearinterval")
clearInterval(intervalId)
},7000)


//
console.log("program ends")