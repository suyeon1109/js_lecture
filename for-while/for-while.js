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