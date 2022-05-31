import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  {
    /*useNavigate는 경로를 변경할 수 있는 훅 */
  }
  {
    /*ex.로그인 안한 이용자가 로그인을 안하고 사용할때 로그인페이지로 변경함*/
  }

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  {
    /*Qurey스트링을뽑아냄*/
  }
  const id = searchParams.get("id");
  console.log("id:", id);

  const mode = searchParams.get("mode");
  console.log("mode:", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다</p>
      <button onClick={() => setSearchParams({ who: "windterlood" })}>
        QS {/*QS버튼을 누르면 query값을 바꿈 */}
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
          {
            /*뒤로 한번 가기때문에 -1*/
          }
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
