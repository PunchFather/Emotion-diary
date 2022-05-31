import React, { useReducer, useRef } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1652052874428 },
  { id: 2, emotion: 2, content: "오늘의 일기 2번", date: 1652052874429 },
  { id: 3, emotion: 3, content: "오늘의 일기 3번", date: 1652052874430 },
  { id: 4, emotion: 4, content: "오늘의 일기 4번", date: 1652052874431 },
  { id: 5, emotion: 5, content: "오늘의 일기 5번", date: 1652052874432 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataID = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataID.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataID.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          {" "}
          {/*브라우저url과 리액트 앱을 연결하는 라이브러리*/}
          <div className="App">
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
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
