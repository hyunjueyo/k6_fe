// alert ("안녕하세요");

//함수작성 1 
/*
function handleClick(n){
    // 메시지 영역 가져오기 1  >>function handleClick(){}일때
    // document.getElementById("msgArea").innerHTML = "안녕하세요" ; 

    // 메시지 영역 가져오기 2  >>변수 n넣었을 때 + h2 메세지 스타일 변경
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;
    
    // 메시지 영역 가져오기 3  
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>` ;
}
*/

//함수작성 2 : 화살표 함수
//js에서는 상수랑 변수밖에 없음. const는 상수값. let는 변수값
const handleClick = (n) => {
    // document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>` ;
    
    let msg ;
    if (n==1) msg = "안녕" ;
    else msg = "잘가";

    document.querySelector("#msgArea").innerHTML = `<h2>${msg}</h2>` ;
    // 더 간단하게
    // document.querySelector("#msgArea").innerHTML = msg ;
    
}
