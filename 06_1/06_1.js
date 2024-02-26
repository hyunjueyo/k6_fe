document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("section img");
  const bts = document.querySelectorAll("section button");

  for (let bt of bts) {
    bt.addEventListener("click", () => {
      console.log(bt.innerHTML.slice(-1));
      // console.log(bt.textContent); 이렇게 해도 됨

      const nc = Math.floor(Math.random() * 6) + 1;
      // 문자를 숫자로 변환
      const n = parseInt(bt.innerHTML.slice(-1));

      imgs[0].setAttribute("src", `./img/${nc}.png`);
      imgs[1].setAttribute("src", `./img/${n}.png`);

      if (nc === n) {
        // == : 값이 같은 것, === : 값과 데이터타입을 모두 확인
        document.querySelector("#msg").innerHTML = "맞음";
      }
      else {
        document.querySelector("#msg").innerHTML = "틀림";
      }
      
    });
  }
});

// //버튼클릭?, 클릭 후 이미지 어떻게?
// const handleClick = (n) => {
//   const img1 = document.querySelector("#img1");
//   const img2 = document.querySelector("#img2");

//   const nc = Math.floor(Math.random() * 6) + 1;
//   img1.setAttribute("src", `./img/${nc}.png`);
//   img2.setAttribute("src", `./img/${n}.png`);

//   if (n == nc) {
//     document.querySelector("#msg").innerHTML = "맞음" ;
//   }
//   else {
//     document.querySelector("#msg").innerHTML = "틀림" ;
//   }

// }