function display<O>(a:O){
    return a
}
display("FFF")
display(99)




const addIUid=<T>(obj:T)=>{
    let uid=Math.floor(Math.random()*100+1)
    return  {...obj, uid}
}
var myobj={
    name:'niranjan',
    class:'react'
}


var once=addIUid(myobj)
console.log(once.name)

