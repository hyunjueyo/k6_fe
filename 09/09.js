// 자바스크립트 데이터 타입
// 기본 타입
let n1 = 10 ;           //정수
let n2 = 10.5 ;         //실수
let s1 = "안녕하세요."; //문자열

console.log("정수 : ", n1) ;
console.log("실수 : ", n2) ;
console.log("문자열 : ", s1) ;
console.log("문자열 : ",s1[1]);
// 문자열 순회
for(let i in s1){
    console.log("문자열 :", s1[i]);
}
// 파이썬에서 for in은 스크립트에서 for
for(let c of s1){
    console.log("문자열 :", c);
}

// 배열
// tailing 쉼표 사용가능
let arr = ['🍕', 1, '🍔', 2, '🌭', 3,]
console.log("배열 :" , arr);
console.log("배열의 요소 접근 :", arr[1]);

// 오브젝트
// tailing 쉼표 사용가능
let obj = {'🍕':1, '🍔':2, '🌭':3,};
console.log("오브젝트 :" , obj);
console.log("오브젝트 요소 접근 :", obj['🍕'])