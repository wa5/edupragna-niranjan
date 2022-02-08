// returns a random integer between 0 and 9
var getRandomInt = function () {
    return (Math.random() * 10).toFixed(0);
};
// resolve with an `even` integer
var findEven = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // convert `string` to `number`
        var value = parseInt(getRandomInt());
        if (value % 2 === 0) {
            resolve(value);
        }
        else {
            reject('Odd number found!');
        }
    }, 1000);
});
// listen to promise resolution
findEven.then(function (value) {
    // (parameter) value: number
    console.log('Resolved:', value + 1);
})["catch"](function (error) {
    // (parameter) error: any
    console.log('Rejected:', error);
})["finally"](function () {
    console.log('Completed!');
});
