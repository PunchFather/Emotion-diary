import { Link } from "react-router-dom"

const RouteTest = () => {
    return <>
        {/* html에서는 a태그로 넘어갔는데 react는 Link태그에 to={주소}를 넣어서 넘김 */}
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/diary"}>DIARY</Link>
        <br />
        <Link to={"/new"}>NEW</Link>
        <br />
        <Link to={"/edit"}>EDIT</Link>
        <br />
    </>
}

export default RouteTest