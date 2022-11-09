import { useParams } from "react-router-dom"

const Diary = () => {

    const { id } = useParams();
    // useParams = custome hook
    console.log(id);


    return <div>Diary.js입니다.</div>


}

export default Diary