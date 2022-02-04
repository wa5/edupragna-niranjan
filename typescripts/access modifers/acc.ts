class Emp{
    name:string
    salary:number
    private bonus:number
    constructor(){
        this.name="niran"
    this.salary=30000
    this.bonus=1000
    }
    total():number{
        return (this.salary+this.bonus)
    }
}
var p1=new Emp()
//console.log(p1.bonus)
console.log(p1.total())