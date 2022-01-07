function total() {
    var person = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        person[_i] = arguments[_i];
    }
    var total = 0;
    person.forEach(function (num) { return total = total + num; });
    return total;
}
console.log(total(100, 600, 700, 5, 78, 55, 43));
