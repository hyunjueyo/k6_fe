// document.addEventListener("DOMContentLoaded", () => {
//     //all은 이미지 모두를 불러온다. 이미지가 한개여도 상관없다.
//     const bts = document.querySelectorAll("img");
//     // console.log(bts);

//     bt1.addEventListener("click", ()=>{
//         handleClick();
//       });
// });

//버튼클릭?, 클릭 후 이미지 어떻게? 
const handleClick = (n) => { 
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");

  const nc = Math.floor(Math.random() * 6) + 1;
  img1.setAttribute("src", `./img/${nc}.png`);
  img2.setAttribute("src", `./img/${n}.png`);

  if (n == nc) {
    document.querySelector("#msg").innerHTML = "맞음" ;
  }
  else {
    document.querySelector("#msg").innerHTML = "틀림" ;
  }

}