import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RouteTest from './components/RotueTest';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h2>app.js</h2>
                {/* h2부분이 계속 나오는 이유는 라우트 바깥에서 있기 때문, 고정으로 해놔야할 부분은 라우트 밖에다가 해놓자. */}
                <Routes>
                    {/* route는 실질적으로 컴포넌트 매핍시켜주는 것 */}
                    <Route path='/' element={<Home />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path='/diary/:id' element={<Diary />} />
                </Routes>
                <RouteTest />
            </div>
        </BrowserRouter>
    );
}

export default App;


import { useNavigate, useSearchParams } from "react-router-dom"


const Edit = () => {

    const navigate = useNavigate();




    return (
        <div>
            <p>Edit.js입니다.</p>

            <div>
                <button onClick={() => { navigate("/home") }}>Home으로 가기</button>
                <button onClick={() => { navigate(-1) }}>뒤로 가기</button>
            </div>
        </div>
    )
}

export default Edit


// import { useNavigate, useSearchParams } from "react-router-dom"


// const Edit = () => {

//     const navigate = useNavigate();
//     const [searchParams, setSearchParams] = useSearchParams();

//     const id = searchParams.get('id');
//     console.log('id :', id)

//     const mode = searchParams.get("mode")
//     console.log('mode :', mode)


//     return (
//         <div>
//             <p>Edit.js입니다.</p>
//             <div>
//                 <button onClick={() => setSearchParams({ who: "winterlood" })}>QS바꾸기</button>
//             </div>
//             <div>
//                 <button onClick={() => { navigate("/home") }}>Home으로 가기</button>
//                 <button onClick={() => { navigate(-1) }}>뒤로 가기</button>
//             </div>
//         </div>
//     )
// }

// export default Edit