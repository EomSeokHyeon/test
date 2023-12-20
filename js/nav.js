const btn = document.getElementById('bttn');
const nav = document.getElementById('tnb-bg');

btn.addEventListener('click', () => {
  nav.classList.toggle('active'); // nav.active가 되면 왼쪽으로 몸뚱이만큼이동
  btn.classList.toggle('active'); // btn.active가 되면 왼쪽으로 110px이동
});