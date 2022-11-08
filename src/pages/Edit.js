import { useNavigate, useSearchParams } from "react-router-dom"


const Edit = () => {

    const navigate = useNavigate();
    // navigate = page moving
    // link 태그 없이도 페이지 이동 가능
    const [searchParams, setSearchParams] = useSearchParams();
    // queryString

    const id = searchParams.get('id');
    console.log('id :', id)

    const mode = searchParams.get("mode")
    console.log('mode :', mode)


    return (
        <div>
            <p>Edit.js입니다.</p>
            <div>
                <button onClick={() => setSearchParams({ who: "winterlood" })}>QS바꾸기</button>
            </div>
            <div>
                <button onClick={() => { navigate("/home") }}>Home으로 가기</button>
                <button onClick={() => { navigate(-1) }}>뒤로 가기</button>
            </div>
        </div>
    )
}

export default Edit