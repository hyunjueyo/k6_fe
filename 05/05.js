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
  const btsNum = [1,1,1];

  //  for of 해당하는 값을 넣어줄 수 있다.
  for(let [idx, bt] of bts.entries()){
    const n = Math.floor(Math.random() * 6) + 1;
    bt.setAttribute("src", `./img/${n}.png`);
    btsNum[idx] = n;

    console.log(btsNum);
  }


  //    //for of => 파이썬의 for in , 추천!!
  // for(let bt of bts){
  //   const n = Math.floor(Math.random() * 6) + 1;
  //   bt.setAttribute("src", `./img/${n}.png`);
  // }


  //     // forEach는 한개씩 돈다. 
  //     bts.forEach((item) => {
  //       const n = Math.floor(Math.random() * 6) + 1;
  //       item.setAttribute("src", `./img/${n}.png`);
        
  //       console.log("click", n)
  //     });
  //   }


//   //for in 거의 안 씀
//   for(let i in bts){
//     const n = Math.floor(Math.random() * 6) + 1;
//     bts[i].setAttribute("src", `./img/${n}.png`);

//     console.log("for in i", bts[i]);
//   }
// }


// //기본 for
// for(let i = 0; i<bts.length; i++){
//     const n = Math.floor(Math.random() * 6) + 1;
//     bts[i].setAttribute("src", `./img/${n}.png`);
// };

}