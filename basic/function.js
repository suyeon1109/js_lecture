let userName = "John"; // global 

function showMessage(from,text='no text given') {
    // let userName = 'Bob'; // global variable
    // 내부에서만 Bob 이 되고 나가면 다시 John
    // let message="안녕하세요"; // local
    alert(from + ': ' + text);
}

function sum(a,b) {
    return a+b;
}

let result = sum(1,5);
alert(result);

showMessage('Danny', "Hello!!");
showMessage('Danny', "What's Up!");
showMessage('Danny');

/*
showCalculator
getName
getAge
calcNumber
createBox
checkAge
** start with verb **
*/

// 화살표 함수. 간결
// let func= (arg1,arg2, ... argN) => expression
// = let func = function(arg1,arg2, ... argN) {
    return expression;


let sum=(a,b) => a+b;

/*
=
let sum = function(a,b) {
    return a+b;
}
*/

alert(sum(1,2));


let age = prompt('tell me yout age', '');

let welcome = (age < 18) ?
() => alert('안녕') :
() => alert('안녕하세요');

function welcome() {
    if (age<18) alert('안녕');
    else alert('안녕하세요');
}

welcome();

let sum=(a,b) => {
    let result = a+b;
    return result;
}

alert(sum(1,2));

