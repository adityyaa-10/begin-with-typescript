"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUpperCase() => It shows error
    // because toUpperCase is for strings only
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('Aditya');
function signUp(name, email, isPaid) {
}
signUp('Adi', 'myname@example.com', false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('Adi', 'adi@gmail.com');
