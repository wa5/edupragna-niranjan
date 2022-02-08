
function* generator(){
    console.log("execuon start")
    yield 0;
    console.log("execuon resumed")
    yield 1
    console.log("execuon resumed")
}

var itrator2=generator()
console.log("start iteration")
console.log(itrator2.next())
console.log(itrator2.next())
console.log(itrator2.next())



function* inil(){
    var i=0
    while(true){
yield i++
    }
}

var itrator=inil()
while(true){
    console.log(itrator.next())
}