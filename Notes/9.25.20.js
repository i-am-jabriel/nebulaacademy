/*
here are some notes about thing i learned today

*/

/*
console.log('hello world');

let x = '350 New York, New York';
let y = 44;
console.log(x[0]);
console.log(x.charAt(0));
function whereIsChar(string){
    if(string.charAt(0) === 3){
        return true;
    }
    return false;
}

console.log(whereIsChar(x));
*/
var computers = ['Mac', 'Dell', 'Lenovo', 'Alienware', 'Compaq'];

computers.pop();

console.log(computers);

computers.push('HP');

console.log(computers);

console.log(computers.shift());

computers.unshift('Acer')
console.log(computers);

console.log(computers.join(' and '));

computers.splice(2,1);

console.log(computers);

var x = computers.slice(2,3);

console.log(x);

var s = function(param){
    return 'hello world';
}

var s2 = param => 'hello world 2';
console.log(s());
console.log(s2());

var json = 'This is a string;';
console.log(function(param){
    return param.replace(/;/g,',');
}(json));

function again(param){
    let newNum = param/2;
    if(newNum > 2){
       return again(newNum);
    } else {
        return newNum;
    }
}

console.log(again(10));

function evens(arr){
    var evenNums = [];

    for(var i = 0; i < arr.length; i++){
        var currentNum = arr[i];
        if(currentNum % 2 === 0){
            evenNums.push(currentNum)
        }
    }
    return evenNums;
}

console.log(evens([0,1,2,3,4,5,6,7,8,9,10]));
console.log('Earth'.split(''));


var planets = ['Earth', 'Mars', 'Venus'];

    function looper(arr){
        var newPlanets = [];
        var count = 0;

        for (var i = 0; i < arr.length; i++) {
            var planet = arr[i];
            var modifiedName = planet.split('');
            
            for (var j = 0; j < planet.length; j++) {
                count++
                if(j % 2 === 1){
                    var capLetter = planet[j].toUpperCase();
                    modifiedName[j] = capLetter;
                }
            }
            newPlanets.push(modifiedName.join(''));
        }
        console.log(count)
        return newPlanets;
    }
    
    console.log(looper(planets));

var obj = {name:'abe',color:'red'};
var y = 'x';
obj[y] = 1;
console.log(obj.name);
delete obj.x;
console.log(obj);
console.log(Object.values(obj));
for(let key in obj){
    console.log(key,obj[key]);
}

console.log('\n--Higher Order Excersizes--\n');

//Filter
console.log('Filter:');
let arr = [1,4,10,30,14];
let level0 = arr.filter(function(a){return a>10});
console.log(level0);
let level1a = arr.filter(function(a){return a%3==0});
console.log(level1a);
let level1b = arr.filter(function(a){return a%2==0});
console.log(level1b);
arr = ['3f31','41','1413153'];
let level2a = arr.filter(function(a){return a.length > 4});
console.log(level2a);
let level2b = arr.filter(function(a){return a.length < 10});
console.log(level2b);
let level3a = arr.filter(function(a){return Object.keys(a).indexOf('')})
console.log(level3a);
//Reduce
console.log('\nReduce:')
let rlevel0 = arr.reduce(function(a,b){return a+b});
console.log(rlevel0);
let rlevel1 = arr.reduce(function(a,b){return a*b});
console.log(rlevel1);
let rlevel2 = arr.reduce(function(a,b){return a+b});
console.log(rlevel2);

arr = [[1,2],[3,4]];
let rlevel3 = arr.reduce(function(a,b){return [].concat.apply([],arr)});
console.log(rlevel3);
let rlevel5 = arr.reduce(function(a,b){  
    return a + (b+'').replace(/[aeiou]+/g,'');
},'');
console.log(rlevel5);

//Map
arr = [1,2,3,4];
console.log('\nMap:');

let mlevel0 = arr.map(function(a){return a*2});
console.log(mlevel0);

let mlevel1 = arr.map(function(a){return a+1});
console.log(mlevel1);

arr = ['Earth','Mars','Venus'];
let mlevel2 = arr.map(function(a){return a.toUpperCase()});
console.log(arr);