// document.body.classList.add('article');
// document.body.classList.remove('main page'); // alert할 class name 없으면 alert 안됨 
// document.body.classList.toggle('article'); // 있으면 지워라 없으면 만들어라

// alert(document.body.className);

// contains: 있으면 true, 아니면 false 반환
// document.body.classList.contains('article');
// alert(document.body.className);

// iteration index 0 - n 까지 갈 수 있는 (iterable)
// document.body.style.backgroundColor = prompt('Choose a Color: ','');

document.body.style.display="none" // 지우는게 아니라 잠깐 안보이게
setTimeout(() => document.body.style.display="",1000);