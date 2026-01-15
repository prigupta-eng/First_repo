const arr = [1, 2, 3, 4, 5];
// arr.multiplyByTwo = function() {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(this[i] * 2);
//     }
//     return result;
// }
arr.customMap = function(fn) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))
    }
    return result;
}
const multiplyByTwo = arr.customMap((item) => item * 2);
console.log(multiplyByTwo);


// const newArr = arr.multiplyByTwo();
// console.log(newArr);



// const ages = [12, 18, 25, 30, 15, 40];

// const adult = ages.filter((age) => age >= 18);
// console.log(adult);

// const doubled = ages.map((age) => age*2);
// console.log(doubled);
