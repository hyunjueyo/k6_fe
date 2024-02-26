// document.addEventListener("DOMContentLoaded", () => {
//     //all은 이미지 모두를 불러온다. 이미지가 한개여도 상관없다.
//     const bts = document.querySelectorAll("img");
//     // console.log(bts);

//     bt1.addEventListener("click", ()=>{
//         handleClick();
//       });
// });

const handleClick = () => { 
    const bts = document.querySelectorAll("img") ;
    
    // forEach는 한개씩 돈다. 
    bts.forEach((item) => {
      const n = Math.floor(Math.random() * 6) + 1;
      item.setAttribute("src", `./img/${n}.png`);
      
      console.log("click", n)
    });
  }

