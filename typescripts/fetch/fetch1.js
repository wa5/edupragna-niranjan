function api(url) {
    return fetch(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(function (data) {
        return data.data;
    });
}
// Consumer - consumer remains the same
api('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (_a) {
    var title = _a.title, message = _a.message;
    console.log(title, message);
})["catch"](function (error) {
    console.log(error);
});
