import { useParams } from "react-router-dom"

const Diary = () => {

    const { id } = useParams();
    // useParams = custome hook
    console.log(id);


    return <div>Diary.js입니다. 안녕하세요</div>


}

export default Diary