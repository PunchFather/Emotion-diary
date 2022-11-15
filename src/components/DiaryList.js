import { useState } from "react";

const sortOptionlist = [
    { value: "latest", name: '최신순' },
    { value: "oldest", name: '오래된 순' }
]


const ControlMenu = ({ value, onChange, optionList }) => {
    return <select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
    </select>
}

const DiaryList = ({ diaryList }) => {

    const [sortType, setSortType] = useState('lastest');
    const getProcessedDiary = () => {

        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date)
            } else {
                return parseInt(a.date) - parseInt(b.date)
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList));
        // sort함수는 배열 원본이 바꾸니깐 위에와 같이 코드를 짜서 깊은 복사를 만들어야 한다.  
        const sortedList = copyList.sort(compare)
        return sortedList;
    }


    return (
        <div>
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionlist} />
            {getProcessedDiary().map((it) => (
                <div key={it.id}>{it.content}</div>
            ))}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};


export default DiaryList;