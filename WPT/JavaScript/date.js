let today=new Date()

console.log(today)

console.log(today.getDate(),"-",today.getMonth()+1,"-",today.getFullYear())
console.log(today.getDay)

let bdyDay=new Date(2024,2,11)
console.log(bdyDay.getDay())


let yearEnd= new Date("2024-12-31")
console.log(yearEnd.getDay())

let birthDate = new Date(2000,0,1)

let diff = today - birthDate
console.log(diff,"ms")
