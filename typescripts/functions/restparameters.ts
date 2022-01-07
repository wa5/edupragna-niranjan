function total(...person:number[]){
    let total=0
    person.forEach((num)=>total=total+num)
    return total

}

console.log(total(100,600,700,5,78,55,43))