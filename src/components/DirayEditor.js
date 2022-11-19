import { useNavigate } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';

import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem'
import { DiaryDispatchContext } from './../App';

const emotionList = [
    {
        emotion_id: 1,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript: '완전 좋음'
    },
    {
        emotion_id: 2,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript: '좋음'
    },
    {
        emotion_id: 3,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript: '그러저럭'
    },
    {
        emotion_id: 4,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript: '나쁨'
    },
    {
        emotion_id: 5,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript: '끔찍함'
    },
]


const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
    // ex. 202219~~ 여기서 0부터 10까지 끊으면 날짜까지 끊김
}

const DiaryEditor = () => {

    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));

    const { onCreate } = useContext(DiaryDispatchContext)
    const handleClickEmote = (emoiton) => {
        setEmotion(emoiton)
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        if (content.length < 1) {
            contentRef.current.focus();
            return;
        }

        onCreate(date, content, emotion);
        navigate('/', { replace: true })
        // replace true 작성 후 뒤로 못돌아가게 하는 것
    }

    return (
        <div className='DiaryEditor'>
            <MyHeader headText={"새 일기쓰기"} leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />} />
            <div>
                <section>
                    {/* section 태그는 디비전 태그랑 역할은 동일 이름만 다름 */}
                    <h4>오늘은 언제인가요?</h4>
                    <div className='input_box'>
                        <input className="input_date" value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </div>
                </section>
                <section>
                    <h4>오늘의 감정</h4>
                    <div className='input_box emotion_list_wraaper'>
                        {emotionList.map((it) => (<EmotionItem key={it.emotion_id} {...it} onClick={handleClickEmote} isSelected={it.emotion_id === emotion} />))}
                    </div>
                </section>
                <section>
                    <h4>오늘의 일기</h4>
                    <div className='input_box text_wrapper'>
                        <textarea placeholder='오늘은 어땠나요?' ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                </section>
                <section>
                    <div className='control_box'>
                        <MyButton text={'취소하기'} onClick={() => navigate(-1)} />
                        <MyButton text={'작성완료'} type={"positive"} onClick={handleSubmit} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DiaryEditor