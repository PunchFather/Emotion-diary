import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
      break;
    }
    default:
      return state;

  }
  return newState
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1668427680167,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1668427680168,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    date: 1668427680169
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    date: 1668427680170
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1668427680171
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  console.log(new Date().getTime())
  // 현재 밀리세컨드 구하는 방법

  // CREATE
  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE", data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  }
  // REMOVE 
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }
  // EDIT 
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    })
  }


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate, onEdit, onRemove,
      }}>
        <BrowserRouter>
          <div className="App">
            {/* routes밖인 app.js는 계속 똑같은 화면이 보임 */}
            <Routes>
              {/*컴포넌트 내에서 바뀌어야 할 부분을 Routes로 감싼다.*/}
              {/* Rotue는 실질적으로 연결해주는 역할 주소 맵핑*/}
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary:id' element={<Diary />} />
            </Routes>
            {/* <RouteTest /> */}
            {/* RouteTest 컴포넌트를 확인해보면 LInk to를 통해 기존 a태그를 대신해서 사용한다. */}

          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App;
