import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/*브라우저url과 리액트 앱을 연결하는 라이브러리*/}
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 버튼")} />
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 버튼")}
            />
          }
        />

        <h2>app.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"postive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />
        <Routes>
          {/*브라우저에 url이 바뀌게 되면 어떤 컴포넌트를 랜딩해서 보이게 할지 라우터로 감싼다.*/}
          <Route path="/" element={<Home />} />
          {/*route컴포넌트는 실질적으로 url경로와 컴포넌트를 맵핑시켜주는 컴포넌트.*/}
          <Route path="/new" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          {/*/diary/:id 콜론을 사용해서 뒤에있는 아이디값을 전달하겠다.*/}
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
