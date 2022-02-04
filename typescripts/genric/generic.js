var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function display(a) {
    return a;
}
function display1(a) {
    return a;
}
function display3(a) {
    return a;
}
var addIUid = function (obj) {
    var uid = Math.floor(Math.random() * 100 + 1);
    return __assign(__assign({}, obj), { uid: uid });
};
var myobj = {
    name: 'niranjan',
    "class": 'react'
};
console.log(addIUid(myobj));
