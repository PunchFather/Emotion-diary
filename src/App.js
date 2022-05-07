import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteTest from "./components/RouteRest";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/*브라우저url과 리액트 앱을 연결하는 라이브러리*/}
      <div className="App">
        <h2>app.js</h2>
        <Routes>
          {/*브라우저에 url이 바뀌게 되면 어떤 컴포넌트를 랜딩해서 보이게 할지 라우터로 감싼다.*/}
          <Route path="/" element={<Home />} />
          {/*route컴포넌트는 실질적으로 url경로와 컴포넌트를 맵핑시켜주는 컴포넌트.*/}
          <Route path="/new" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
