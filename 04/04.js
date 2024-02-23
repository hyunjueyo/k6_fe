// document.addEventListener("DOMContentLoaded", ()=>{
//     //버튼 가져오기
//     // const bt1 = document.querySelector("div > button");
//     const bt1 = document.querySelector("#bt1");

//     //버튼 이벤트 달기
// //     bt1.addEventListener("click", ()=>{
// //         handleClick();
// //     })
// // })

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("click");

    const bt1 = document.querySelector("#bt1");

    bt1.addEventListener("click", () => {
        const handleClick = () => {
            const n = Math.floor(Math.random() * 6) +1;
            const img = document.querySelector("#img");
            img.setAttribute("src", `./img/${n}png`);
        };
    });
})

    

        // const handleClick = () => {
        //     // math.floor는 소숫점 잡히는 거 잡는 거. 지금까지 버튼 누르면 
        //     const n = Math.floor(Math.random() * 6) +1;

        //     const img = document.querySelector("#img");
        //     img.setAttribute("src", `./img/${n}png`)
        // }
