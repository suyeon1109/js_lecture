/* while (condition) {
     // code
} */

let i = 0;
while (i<3) {
    alert(i);
    i++;
}

/*
do {
    // code
} while (condition);
*/

let i=0;
do {
    alert(i);
    i++;
} while (i<3);


for (let j=0;j<3;j++) {
    alert(i);
}


//break
let sum=0;
while (true) {
    let value = +prompt("Give me a number.", "");
    if (!value) break; // cancel or 그냥 엔터 쳤을때
    sum+=value;
}

alert("Sum:" + sum)

//continue
for (let i=0;i<10;i++) {
    if (i%2==0) {
        continue;
    }
    alert(i);
}


/*
shorten this

let accessAllowed;
let age=prompt('나이를 입력해주세요');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);
*/

// let result = condition ? value1 : value2
let age=prompt('나이를 입력해주세요',"");
let accessAllowed = (age>18) ? true : false;



/*
shorten this 

let result;

if (a+b<4) {
    result='미만';
} else {
    result = '이상';
}
*/

let result=(a+b<4) ? '미만' : '이상';


/*
shorten this

let message;

if (login == '직원') {
    message="안녕하세요.";
} else if (login=='임원) {
    message="환영합니다.";
} else if (login='') {
    message="로그인이 필요합니다.";
} else {
    message='';
}
*/

// let message=(login == '직원') ? '미만' : (login=='임원) ? '환영합니다' : '';

/*
answer

let message = (login == '직원') ? '안녕하세요' :
    (login=='임원) ? '환영합니다' :
    (login='') ? '로그인이 필요합니다.'
*/

let a=2+2;

switch (a) { //a를 대상으로 3,4,5를 비교해봤을때
    case 3:
        alert('smaller');
        break;
    case 4:
        alert('equal');
    case 5:
        alert('bigger');
        break;
    default: // else
    alert('cannot find the answer')
}