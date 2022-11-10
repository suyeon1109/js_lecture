// alert("Hi!")

// ----------------------

// let admin, name_;

// name_ = "John";
// admin = name_;

// alert(admin);

// ----------------------

// let user="John", age=25,message="HI";
// alert(user + age + message);

// ----------------------

/* _ X
바뀌지 않는 것 대문자로 (let BIRTHDAY = 19901101;) */

// ----------------------

let name = "Danny";
alert( `hello ${1}` );
alert(`hello ${"name"}`);
alert(`hello ${name}`);   //스트링 안에 외부 변수 넣는 법

// ----------------------
// 문자 형 변환
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

let str="1.23";   //integer, digit 상관 없음
alert(typeof str);
str=Number(str);
alert(typeof str);

let test = "true";
alert(typeof Boolean(test));

// ----------------------
// operator

let a=1,b=1;
alert(++a);  // 2
alert(a++);  // 2
alert(a);    // 3
alert(a+b);  // 4