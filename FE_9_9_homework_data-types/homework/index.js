// Your code goes here
function findType(param) {
    return typeof param;
}

function forEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function map(array, func) {
    let newArray = [];
    forEach(array, function (el) {
        newArray.push(func(el));
    });
    return newArray;
}

function filter(array, func) {
    let newArray = [];
    forEach(array, function (el) {
        if (func(el)) {
            newArray.push(el);
        }
    });

    return newArray;
}

function getAdultAppleLovers(data) {
    const filtered = filter(data, function (el) {
        return el.age >= 18 && el.favoriteFruit === 'apple';
    });
    return map(filtered, function (el) {
        return el.name;
    });
}

function keys(object) {
    let newArray = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newArray.push(key);
        }
    }
    return newArray;
}

function values(object) {
    let newArray = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newArray.push(object[key]);
        }
    }
    return newArray;
}

function showFormattedDate(dateString) {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}