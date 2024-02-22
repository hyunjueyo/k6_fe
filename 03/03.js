// alert ("안녕하세요");

function handleClick(n){
    // 메시지 영역 가져오기 1  >>function handleClick(){}일때
    // document.getElementById("msgArea").innerHTML = "안녕하세요" ; 

    // 메시지 영역 가져오기 2  >>변수 n넣었을 때 + h2 메세지 스타일 변경
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>" ;
    
    // 메시지 영역 가져오기 3  
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>` ;
}