import { useReducer } from "react";

const reducer = (state, action) => {
    // state = 지금 현재 상태 
    // action = 아래 디스패치에서 받았던 액션 객체
    
    switch (action.type) {
        case 1:
            return state + 1;
            // type이 1인 버튼을 클릭시 리턴값이 state +1 이기 떄문에 현재 상태값 1에 +1을 추가해서 count는 2가 된다.
        case 10:
            return state + 10;
        case 100:
            return state + 100;
        case 1000:
            return state + 1000;
        case 10000:
            return state + 10000;

        default:
            return state;
    }
};


const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 1);
    // count = 첫번째 받는 값은 state 
    // dispatch = 상태를 변화시키는 액션을 발생시키는 함수 
    // useReducer() 괄호 안에 있는 reducer는 상태변화가 일으켜지면 처리하는 함수
    // useReducer() 두번째 1은 count에 초기값이다.


    return (
        <div>
            {count}
            <button onClick={() => dispatch({ type: 1 })}>add 1</button>
            {/* dispatch() 괄호안 객체에는 타입이라는 프로퍼티가 있는데, 이것을 액션 개체라고 말한다. 액션 = 상태 = 상태변화를 설명할 객체  */}
            {/* dispatch를 호출하면 reducer로 넘어간다. */}
            <button onClick={() => dispatch({ type: 10 })}>add 1</button>
            <button onClick={() => dispatch({ type: 100 })}>add 1</button>
            <button onClick={() => dispatch({ type: 1000 })}>add 1</button>
            <button onClick={() => dispatch({ type: 10000 })}>add 1</button>
        </div>
    )

}