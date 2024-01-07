function Person(fn,ln)
{
    this.firstname=fn
    this.lastname=ln
    this.show= function(){
        console.log(this.firstname,this.lastname)
    }
}
let p = new Person("Shreyash","Killedar")
p.show()