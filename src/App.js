import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteTest from './components/RotueTest';

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>app.js</h2>
        {/* routes밖인 app.js는 계속 똑같은 화면이 보임 */}
        <Routes>
          {/*컴포넌트 내에서 바뀌어야 할 부분을 Routes로 감싼다.*/}
          {/* Rotue는 실질적으로 연결해주는 역할 주소 맵핑*/}
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary' element={<Diary />} />
        </Routes>
        <RouteTest />
        {/* RouteTest 컴포넌트를 확인해보면 LInk to를 통해 기존 a태그를 대신해서 사용한다. */}

      </div>
    </BrowserRouter>
  )
}

export default App;
