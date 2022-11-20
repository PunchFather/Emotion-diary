import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from './MyButton';
import DiaryItem from "./DirayItem";


const sortOptionlist = [
    { value: "latest", name: '최신순' },
    { value: "oldest", name: '오래된 순' }
]

const filterOptionList = [
    { value: "all", name: '전부 다' },
    { value: "good", name: '좋은 감정만' },
    { value: "bad", name: '안좋은 감정만' },

]


const ControlMenu = React.memo(({ value, onChange, optionList }) => {
    return <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
    </select>
});

const DiaryList = ({ diaryList }) => {

    const navigate = useNavigate();
    const [sortType, setSortType] = useState('latest');
    // 최신순, 오래된 순  스테이트
    const [filter, SetFilter] = useState("all");
    // 좋은 감정만, 안좋은 감정만 필터링 스테이트

    const getProcessedDiary = () => {

        const filterCallBack = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date)
            } else {
                return parseInt(a.date) - parseInt(b.date)
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList));
        // sort함수는 배열 원본이 바꾸니깐 위에와 같이 코드를 짜서 깊은 복사를 만들어야 한다. 

        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallBack(it));

        const sortedList = filteredList.sort(compare)
        return sortedList;
    }


    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionlist} />
                    {/* 위에 컨트롤 메뉴 컴포넌트는 최신순, 오래된순 필터 컨트롤 메뉴 */}
                    <ControlMenu value={filter} onChange={SetFilter} optionList={filterOptionList} />
                    {/* 위에 컨트롤 메뉴 컴포넌트는 모두 다, 좋은감정만, 안좋은 감정만 나오게 하는 필터 컨트롤 메뉴*/}
                </div>
                <div className="right_col">
                    <MyButton type={'positive'} text={'새 일기쓰기'} onClick={() => navigate("/new")} />
                </div>
            </div>

            {getProcessedDiary().map((it) => (
                <DiaryItem key={it.id} {...it} />
            ))}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};


export default DiaryList;