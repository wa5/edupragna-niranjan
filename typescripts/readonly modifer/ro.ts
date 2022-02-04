class Hum{
   readonly birthdate:Date
   constructor(bd:Date){
       this.birthdate=bd
   }
}

var p=new Hum(new Date(1990,12,25))
//p.birthdate=new Date()