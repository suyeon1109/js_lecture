/* 사용자로부터 값을 입력받아 리스트를 생성하는 인터페이스를 만들어보세요.

리스트의 모든 요소는 아래 방법으로 생성합니다.값을

prompt를 사용해 사용자로부터 리스트의 내용을 입력받습니다.
1번에서 입력받은 내용을 갖는 <li>를 생성한 후에 <ul> 에 추가
사용자가 입력을 취소할때까지 계속 (esc 키나 프롬프트 창의 취소 버튼을 누를 때까지)
    // if (!data) {break;}
모든 요소는 동적으로 생성되어야 합니다.

사용자가 HTML 태그를 입력하더라도 텍스트로 처리되어야 합니다.
*/

while (true) {
    let data = prompt("Give me an element", "");
    alert(typeof(data));
    if (!data) {break;}

    let li = document.createElement('li');
    li.textContent=data;
    // 아니면 ul.innerHTML=data;
    alert(li);
    ul.append(li); 
}
