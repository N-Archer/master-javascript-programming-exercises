// Write your function here

const getAllElementsButNth = (array, num) => {
    return array.filter(elm, idx) => idx != num;
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']