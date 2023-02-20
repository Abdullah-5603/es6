// problem-1
// qst-1
const multiply = (a,b,c) => {
    const multiply = a*b*c;
    return multiply;
}
// const result = multiply(10,10,10);
// console.log(result);

// qst-2
const threeLines = `I am a web Developer.
I love Code.
I love to eat biriyani`;
// console.log(threeLines);

// qst-3
const add = (a, b = 0) =>{
    const add = a + b;
    return add;
}
// const result = add(10);
// console.log(result)

// problem-2
const array = array => {
    let evenLength = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(element.length % 2 === 0){
            evenLength.push(element.length)
            
        }
    }
    return evenLength;
}
const Array = ['abul', 'dabul', 'chabul', 'habul'];
// const result = array(Array);
// console.log(result)

// problem-3
const squareArrayElements = array => {
    let squaredArray = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        const squareElement = element ** 2;
        squaredArray.push(squareElement);
    }
    const sum = squaredArray.reduce((a, b) => a + b, 0);
    const average = sum / squaredArray.length;
    return average;        
};
  
const arrayElements = [1, 4, 9, 16, 25];
const result = squareArrayElements(arrayElements);
console.log(result); // output: 195.8
