var Student={
    RollNo:101,
    Name:"Bhagyashri",
    Marks:95
}

var cloned={...Student}
cloned.RollNo="Bhagya"

console.log("Student: ",Student)
console.log("Cloned", cloned)