// 2) 중복되니까 함수로 만들기
// const handleChange = (s1, s2) => {
//     if (s1.value === "℃") s2.value ="℉";
//     else s2.value = "℃";
// }
const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
    if (s1.value === "℃") {
        s2.value = "℉";
        lb1.innerHTML = "℃";
        lb2.innerHTML = "℉";
    }
    else {
        s2.value = "℃";
        lb1.innerHTML = "℉";
        lb2.innerHTML = "℃";
    }

    t1.value = "";
    // focus: 커서가 찍혀 있는 것.
    t1.focus();
    t2.value = "";
    }

    const handleTxt = () => {
    console.log("t")
    }

    //document가 자바에서 class 만드는 것 처럼 객체로 생각하면 됨.
document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");


    // 일반 태그는 innerHTML이나 textContent로 가져오는데
    // input 타입(홈 값)은 .value로 가져와야 함.

    // sel1.addEventListener("change", ()=>{
    //     console.log(sel1.value);
    //     if(sel1.value === "℃") sel2.value = "℉" ;
    //     else sel2.value = "℃" ;
    // });

    txt1.addEventListener("input", () => {
        console.log(txt1.value);
        // console.log(labels[0].textContent);
        if (sel1.value === "℃") {
            //섭씨온도를 화씨온도로 변경
            txt2.value = (parseFloat(txt1.value) * (9 / 5)) + 32;
        }
        else {
            //화씨온도를 섭씨온도로 변경
            txt2.value = (parseFloat(txt1.value) - 32) * (5 / 9);
        }
    });

    sel1.addEventListener("change", () => {
    // txt1.value =''; 이렇게 하려고 했는데, 그냥 6:여기에 t1, t2를 추가해줌
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
    });

    sel2.addEventListener("change", () => {
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);
    });
});

// sel2.addEventListener("change", ()=>{
//     console.log(sel2.value);
//     if(sel2.value === "℃") sel1.value = "℉" ;
//     else sel1.value = "℃" ;
// });

