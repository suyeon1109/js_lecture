let div = document.createElement('div');
let textNode = document.createTextNode('HELLO.');

div.className="alert";

div.innerHTML="<strong>HELLO</strong> This is a notice from the server."
document.body.append(div);   // 가장 뒤

setTimeout(() => div.remove(), 1000) // 7000는 time을 의미, 밀리세컨드
// div.remove() 자체가 함수가 아니라 콜할 수 없으니까 화살표 쓰는거.

// document.body.prepend(div);  // 가장 앞

// document.body.before(div);   // body 들어가기 전
// document.body.after(div);    // body 끝나고

// document.body.replaceWith("HELLO");    // body, head, li, table ... 다 가능

let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = "Bye"; 
div.after(div2);

