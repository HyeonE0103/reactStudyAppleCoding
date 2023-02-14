/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "바지락 칼국수 먹고 싶다",
    "대창 먹고 싶다",
    "초콜릿 먹고 싶다",
  ]);

  let [좋아요, 좋아요변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0); //map돌릴때 글제목 하나씩 뽑아오기

  let [입력값, 입력값변경] = useState("");

  function 함수() {}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitle(i);
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>2월 18일 발행</p>
            <div
              className="button"
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제버튼
            </div>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          color={"skyblue"}
        />
      ) : null}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        className="button"
        onClick={() => {
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);

          let numbers = [...좋아요];
          numbers.push(0);
          좋아요변경(numbers);
        }}
      >
        추가버튼
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <div
        className="button"
        onClick={() => {
          let c = [...props.글제목];
          c[0] = "짜장면 먹고 싶다";
          props.글제목변경(c);
        }}
      >
        변경버튼
      </div>
    </div>
  );
}
export default App;
//또는
