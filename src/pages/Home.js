import { useContext, useEffect, useState } from "react"

import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import DiaryList from "../components/DiaryList";

import { DiaryStateContext } from "../App";

const Home = () => {



    const diaryList = useContext(DiaryStateContext);
    // dummydate context로 가져옴
    const [data, setData] = useState([]);

    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`
    // getMonth는 월을 가져오는 함수인데 첫시작이 0월 부터 시작이라 + 1을 해줘야 한다.

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장`;
    }, []);

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
                // 이번년도 이번달 1일을 표시 
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
                // 이번년도 이번달 마지막날을 표시
            ).getTime();
            //  첫째날과 마지막날을 사이에 있는 데이터를 가져와라
            setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
        }
    }, [diaryList, curDate])
    // 월이 바뀔때마다 원하는 데이터를 가져오기 위해 useEffect를 씀

    useEffect(() => {
        console.log(data);
    }, [data])

    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
        );
    };

    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
        );
    };
    return (

        <div>
            <MyHeader headText={headText}
                leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
                rightChild={<MyButton text={">"} onClick={increaseMonth} />}
            />
            <DiaryList diaryList={data} />

        </div >
    )
}

export default Home