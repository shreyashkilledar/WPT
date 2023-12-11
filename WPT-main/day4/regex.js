// let regex = /abc/
// let s ="pqrabc"

// let regex = /abc/i

// matches a single char bet A-Z
// let regex=/[A-Z]/
// let s="aFGHJK"

//matches a single char bet a-s and A-Z
// let regex =/[a-sA-Z]/
// let s="1Sa1"

//possible matches
//India Prachi --yes 
//IGGGG , I123 , I ---no
// let regex = /^[A-Z][a-z]/
// let s="ILTndia"


//possible matches
//India , I 
//let regex = /^[A-Z][a-z]*/

//possible matches
//Olympics123 =yes
//data2 , 123= no
//let regex =/[A-Za-z]+[0-9]{3}/

//let regex =/[A-Za-z]+[0-9]{3}$/

//possible matches abcdcom
//let regex=/[a-z]{2,3}.com/

//abcdcom = no match
//abc.com = match
//let regex=/[a-z]{2,3}\.com/

// let regex = /[-_#@]/

//regular expr in JS is object
console.log(typeof(regex))


// let s ="#"
let rv =s.match(regex)
console.log(rv)




