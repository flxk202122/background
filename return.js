let a = 5;

a++; // a+1
a; // = 
++a; // a = a+1;

const arr = ["회사소개", "제품소개", "고객센터", "비고"] //array, oject는 참조(주소)값 저장
arr[3] = "다시" //추가대입식 집에들어가서 고친거라서 가능.
arr[3] += "들어가볼까" //추가대입식 집에들어가서 고친거라서 가능.

const arr2 = ["네이버", "다음", "구글"]
arr = [...arr2] // ...집을지우고 들어간애들로 바꿔라.
//arr = [arr2] //에러 


//arr = []; //이건 에러남.불가능. 


const obj = {}
const obj2 = { ...obj }

// 변수 x 를 이용해서 fotrin문으로 콘솔출력

for (x in arr) {
    console.log(x, arr[x]);
}

for (var i = 0; i < arr.length; i++) {
    console.log(x, arr[x]);
}

let arry = new Array();
arry[0] = "회사소개";
arry[100] = "제품소개";

arr.map()