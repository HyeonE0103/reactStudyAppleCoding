import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "배고파";

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "20px" }}>교육중</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}
export default App;
