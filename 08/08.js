document.addEventListener("DOMContentLoaded", ()=>{
    //DOM 생성후에 img, input, buttom 가져오기
    const upDownImg = document.querySelector("img") ;
    // const numInput = document.querySelector("#num1");
    const numInput = document.getElementById("num1");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    //랜덤 수 생성 변수
    let n ;
    let flag = false;

    //버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e)=>{
        e.preventDefault();

        // 랜덤 수 생성
        // if(flag===false)
        if(!flag) {
            n= Math.floor(Math.random()*100) + 1;
            console.log("n=", n)
            flag = true;
        }

        // input 박스 내용가져오기
        if(numInput.value == ''){
            // alert("숫자를 입력하세요.");
            msg.innerHTML = "<span>숫자를 입력하세요<span>";
            numInput.focus();
            return;
        }

        // 숫자비교
        msg.innerHTML = "";
        if (n === parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "./img/good.png");
        }
        else if ( n > numInput.value){
            // msg.innerHTML = "up"
            upDownImg.setAttribute("src", "./img/up.png");
        }
        else {
            // msg.innerHTML = "down"
            upDownImg.setAttribute("src", "./img/down.png");
        }
    });
});
