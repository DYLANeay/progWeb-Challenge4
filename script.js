//partie 1
function addTwo(number) {
    return number + 2;
}

//partie 2
function pluralize(word) {
    return word += "s";
}

//partie 3
const map = (array, callback) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
};

//partie 4 
let alphabet = "";
const letters = ["a", "b", "c", "d"];
letters.forEach(function (char) {
    alphabet += char;
});

//partie 5
const reduce = (array, callback, initialValue) => {
    let accum;
    if (initialValue !== undefined) {
        accum = initialValue;
    } else {
        accum = array[0];
        array.shift();
    }
    forEach(array, (el) => (accum = callback(accum, el)));
    return accum;
};