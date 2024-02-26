// //버튼 가져오기
// document.addEventListener("DOMContentLoaded", ()=>{
//     // console.log("click");
//     const bt1 = document.querySelector("#bt1");
//     // const bt1 = document.querySelector("div > button");

//     //버튼 이벤트 달기
//     bt1.addEventListener("click", ()=>{
//        handleClick();
//      });
// });

const handleClick = () => {
    const n = Math.floor(Math.random() * 6) + 1;
     // math.floor는 소숫점 잡히는 거

    const img = document.querySelector("#img");
    img.setAttribute("src", `./img/${n}.png`);
    console.log("click", n)
}