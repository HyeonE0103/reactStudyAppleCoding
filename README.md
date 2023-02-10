[코딩애플 온라인 React 강좌](https://codingapple.com/)

# 기초문법


## JSX 문법 3개

- class 넣을땐 className
- 변수를 html에 꽂아넣을 때는 {중괄호}
- style 넣을 땐 style={{스타일명: '값}}


## state

```js
import {useState} from "react";

let [a, b] = useState(자료, state변경을 도와주는 함수)
```

state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줌  
그렇기에 state는자주 변할 것 같은 데이터들을 저장하는게 좋음  

즉 자주변경될 것 같은 데이터들은 state에 저장했다가 html에 {데이터바인딩} 해놓고  
변경할 일이 없는 데이터들과 굳이 html에 표기가 필요없는 데이터들은 변수에 저장  

state를 변경하려면 state 변경함수를 꼭 이용(이용하지 않으면 재렌더링이 잃어나지 않음)  

state변경함수는 () 안에 입력한걸로 기존 state를 변경해줌  
array/object state를 변경하고 싶으면 독립적인 카피본을 만들어서 수정하는게 좋음

```js
[...기존state] 

{...기존state} 
```

이런식으로 독립적은 카피를 생성한 후 변경하기 원하는 곳만 변경


## onClick 사용법

클릭시 무엇인가를 실행하고 싶다면 onClick 이벤트 핸들러를 사용

```js
<div onClick={실행할함수}>
```

- Click 대문자
- { } 중괄호 사용
- 코드가 아니라 함수를 넣어야 잘 동작


## Component 문법

긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법
함수 또는 변수 만들 듯 HTML을 한 단어로 치환해서 원하는 곳에 꽂아넣을 수 있음

```js
function App (){
  return (
    <div>
      <함수명></함수명>
    </div>
  )
}

function 함수명(){
  return ( <div></div> )
}

//또는

let 함수명 = () => {
  return ( <div></div>) 
}
```

### Component 문법을 사용하려면
1. function을 이용해서 함수를 하나 만들어주고 작명
2. 함수 안에 return () 안에 축약을 원하는 HTML을 담으면 됨
3. 원하는 곳에서 <함수명></함수명> 사용
4. 원하는 곳에 축약한 HTML 등장

### Component 만들때 주의점
- component 작명할 땐 영어대문자로 보통 작명
- return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없음
- function App(){} 내부에서 만들면 안됨
- <컴포넌트></컴포넌트>라고 쓰거나 <컴포넌트/>로 사용

Compont를 많이 만들면 관리가 힘들기 때문에 꼭 필요한 곳만 Component를 만들어야 함  
(사이트에 반복해서 나타나거나 내용이 자주 변경될 것 같은 부분 등)


## 동적인 UI 모달창 만들기

### 1.Html Css 미리 UI 디자인

```js
function 함수명(){
  return ( <div></div> )
}

//또는

let 함수명 = () => {
  return ( <div></div>) 
}
```

state를 하나 만들고 현재 UI의 상태정보를 저장

### 2.UI의 현재 상태를 state로 저장

```js
let [modal, setModal] = useState(false);
```

### 3.state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

```js
function App (){

  let [modal, setModal] = useState(false);
  return (
    <div className="app">
      (생략)
      {
        modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}
```

#### JSX에서 조건문 쓰는 법
조건문은 if / else 문법을 쓰면 되는데 JSX 안에서는 if else 문법을 바로 사용할 수 없음  
하지만 if 문법 대신 삼항연산자라는건 JSX 중괄호 안에서 사용가능 함  

즉 if문 대신 사용할 수 있는 문법이 삼항연산자인 것

```js
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드
```

### 4.이벤트를 이용하여 모달창을 보이게 또는 안보이게 하기

```js
<div
  onClick={() => {
    modal == true ? setModal(false) : setModal(true);
  }}
>

<div
  onClick={() => {
    setModal(!modal);
  }}
>
```

지정된 곳에 원하는 이벤트를 넣어 modal의 state를 변경


## 많은 div를 반복문으로 줄이때 map 이용

### map
1. array 자료 갯수만큼 함수안의 코드 실행
2. 함수의 파라미터는 array안에 있던 자료
3. return 내용을 array로 담아 map()쓴 자리에 남겨줌

### map을 이용하여 div 반복생성

```js
let [글제목, 음식변경] = useState([
"바지락 칼국수 먹고 싶다",
"대창 먹고 싶다",
"초콜릿 먹고 싶다",
]);

{ 
글제목.map(function(a){	//1
  return (
  <div className="list">
    <h4>{ a }</h4>
  </div> )
}) 
}

{ 
글제목.map(function(a, i){	//2
  return (
  <div className="list">
    <h4>{ 글제목[i] }</h4>
  </div> )
}) 
}
```
또다른 예시로  위에 2가지 방법을 사용해도 똑같이 나오는데

- 첫번째는 a라는 파라미터는 map이 반복될 때마다 array자료 안에 있던 데이터들을 의미  
반복문이 돌 때 마다 a가 차례로 바지락 칼국수, 대창, 초콜릿이 됨  

- 2번째는 map(function(a, i){ 로 파라미터를 2개까지 작명 가능한데,  
첫째 파라미터 a는 array안에 있던 자료, 둘째 파라미터 i는 0부터 1씩 증가하는 정수가 됨  
즉 i는 0, 1, 2가 되는 것

## props를 이용하여 부모의 state 사용하기

자식 컴포넌트가 부모 컴포넌트에 있던 state를 쓰고 싶다면 props로 전송해서 써야함  

단 자식에서 부모 방향으로 전송은 불가능하며 같은 부모의 자식들 사이 서로간 전송도 불가능함  

### props로 부모에서 자식으로 state 전송하는 법
1. 자식 컴포넌트 사용하는 곳에 <자식컴포넌트 작명={state이름} />
      - 자식컴포넌트 작명={변수명}> 일반 변수, 함수 전송 가능
      - 일반 문자전송은 중괄호 없이 <자식컴포넌트 작명="내용">로 해도 됨  
      
2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용

