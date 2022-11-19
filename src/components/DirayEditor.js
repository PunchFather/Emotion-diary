import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem'
import { DiaryDispatchContext } from './../App';
import { getStringDate } from '../utill/date';
import { emotionList } from '../utill/emotion';



const DiaryEditor = ({ isEdit, originData }) => {

    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));

    const { onCreate, onEdit } = useContext(DiaryDispatchContext)
    const handleClickEmote = (emoiton) => {
        setEmotion(emoiton)
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        if (content.length < 1) {
            contentRef.current.focus();
            return;
        }
        if (window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")) {
            if (!isEdit) {
                onCreate(date, content, emotion);
            } else {
                onEdit(originData.id, date, content, emotion);
            }
        }

        navigate('/', { replace: true })
        // replace true 작성 후 뒤로 못돌아가게 하는 것
    }

    useEffect(() => {
        if (isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emoiton);
            setContent(originData.content);
        }
    }, [isEdit, originData])


    return (
        <div className='DiaryEditor'>
            <MyHeader headText={isEdit ? "일기 수정하기 " : "새 일기쓰기"} leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />} />
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