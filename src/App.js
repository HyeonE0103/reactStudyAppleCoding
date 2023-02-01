import "./App.css";
import { useState } from "react";

function App() {
  let post = "배고파";
  let [글제목, b] = useState("바지락 칼국수 먹고싶다");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;
