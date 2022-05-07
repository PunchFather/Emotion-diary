import { Link } from "react-router-dom";
// SPA/CSR 방식으로 페이지를 이동시켜주는 컴포넌트를 이용
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>diary</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/edit"}>diary</Link>
    </>
  );
};

export default RouteTest;
