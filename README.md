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

#### Component 문법을 사용하려면
1. function을 이용해서 함수를 하나 만들어주고 작명
2. 함수 안에 return () 안에 축약을 원하는 HTML을 담으면 됨
3. 원하는 곳에서 <함수명></함수명> 사용
4. 원하는 곳에 축약한 HTML 등장

#### Component 만들때 주의점
- component 작명할 땐 영어대문자로 보통 작명
- return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없음
- function App(){} 내부에서 만들면 안됨
- <컴포넌트></컴포넌트>라고 쓰거나 <컴포넌트/>로 사용

Compont를 많이 만들면 관리가 힘들기 때문에 꼭 필요한 곳만 Component를 만들어야 함(사이트에 반복해서 나타나거나 내용이 자주 변경될 것 같은 부분 등)