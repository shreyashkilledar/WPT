/*function add(x,y)
{
    return x+y
}
let result=add(22,13,14,15)
console.log(result)

function sum(x=15,y=27)
{
    return x+y
}
console.log(sum())
console.log(sum(155,455))
console.log(sum(122,45,122))*/

function total(...nums)
{
    let sum =0
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    return sum
}
/*
console.log(total(1,2,3,4,5,6))

console.log("hi","how r you","go to hell","goodbye")*/