// _______________________________________________________________________________________________________________
// Higher order exercises pt 2. No given Higher order function to use
let arrOfPeople = [{name:'Sally Jones',age:55,gender:'female'},{name:'Abe Johnson',age:28,gender:'male'},{name:'Lebron James',age:34,gender:'male'}];

// given an array of people objects, return only the females
    // the object will look like this: let sally = {name: 'Sally', age:55, gender: 'female'}
let females = arrOfPeople.filter(x=>x.gender==='female');
console.log(females);

// given an array of numbers, return an array without any even numbers
let arrOfNumbers = [1,2,3,4,5,6,44,21,49,1337];
let oddNumbers = arrOfNumbers.filter(a=>a%2==1);
console.log(oddNumbers);

// given an array of people objects, return an array with all ages
    // the object will look like this: let sally = {name: 'Sally', age:55}
    // part 2 find the average age of all people in the array (run a higher order function on your new array)
let ages = arrOfPeople.reduce((a,b)=>[...a,b.age],[]);
let averageAge = ages.reduce((a,b)=>a+b) / ages.length;
console.log(ages,'Average age ', averageAge);

// given an array of arrays, return an array of just the first elements of those inner arrays (only one array deep)
let arrOfArr = [[1,2],[3,4],[5,6],[7,8,9]];
let firstElements = arrOfArr.reduce((a,b)=>[...a,b[0]],[]);
console.log(firstElements);

// given an array of full names ('Sally Wadsworth') return the first and last initials
let names = arrOfPeople.map(a=>a.name);
let initials = names.reduce((a,b)=>{
    let fullName = b.split(' '), firstInitial = fullName[0][0], lastInitial = fullName[1][0];
    return a + firstInitial + lastInitial;
},'');
console.log(initials);

// given an array of numbers find the largest number 
let largest = arrOfNumbers.reduce((a,b)=>Math.max(a,b));
console.log(largest);

/*
### What is HTML?
Hyper Text Markup Language
### How does it relate to the internet?
Every webpage written in HTML
### How does it relate to the "web development stack"
its the client
### How does it relate to JavaScript?
Javascript is the mechanics that make HTML interactive
### What are the parts of HTML?
an html tag
### What are HTML Tags?
A
### What are some commonly used HTML elements?
div p head body
### What are HTML attributes?
the variables associated with HTML
*/