/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let post = "배고파";
  let [글제목, 음식변경] = useState([
    "바지락 칼국수 먹고 싶다",
    "대창 먹고 싶다",
    "초콜릿 먹고 싶다",
  ]);
  let [좋아요, 좋아요변경] = useState(0);

  function 함수() {}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal />
      <He />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

let He = () => {
  return (
    <div className="modal">
      <h2>배고파</h2>
      <h3>정말 배고파</h3>
      <h4>정말 많이 배고파</h4>
    </div>
  );
};
export default App;
