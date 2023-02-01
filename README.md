# 코딩애플 온라인 React 강좌

## 기초문법

### JSX 문법 3개

- class 넣을땐 className
- 변수를 html에 꽂아넣을 때는 {중괄호}
- style 넣을 땐 style={{스타일명: '값}}

### state

```js
import {useState} from "react";

let [a, b] = useState(자료, state변경을 도와주는 함수)
```

state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줌  
그렇기에 state는자주 변할 것 같은 데이터들을 저장하는게 좋음  
즉 자주변경될 것 같은 데이터들은 state에 저장했다가  
html에 {데이터바인딩} 해놓고 변경할 일이 없는 데이터들과  
굳이 html에 표기가 필요없는 데이터들은 변수에 저장

state를 변경하려면 state 변경함수를 꼭 이용(이용하지 않으면 재렌더링이 잃어나지 않음)  
state변경함수는 () 안에 입력한걸로 기존 state를 변경해줌

### onClick 사용법

클릭시 무엇인가를 실행하고 싶다면 onClick 이벤트 핸들러를 사용

```js
<div onClick={실행할함수}>
```

- Click 대문자
- { } 중괄호 사용
- 코드가 아니라 함수를 넣어야 잘 동작

## 쇼핑물 프로젝트
