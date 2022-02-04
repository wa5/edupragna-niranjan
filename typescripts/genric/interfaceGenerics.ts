interface myinter<U,V>{
key:U,
Value:V
}
interface AS<>{
num:number
m:()=> void
}
var mm:AS={
    num: 0,
    m: function (): void {
        console.log("hello")
    }
}



let MONTH:myinter<string,AS>={
    key: "ffggfgfgf",
    Value: mm
}