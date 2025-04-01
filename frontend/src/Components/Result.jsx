import { useLocation, Link } from "react-router-dom";
export default function Result(){
    const location = useLocation()
    const { result, filename } = location.state || {result: "No result", filename: ""}
    return(
        <div className="main_container">
            <h1 className="main_heading">Prediction Results</h1>
            <p>Prediction: {result}</p>
            {filename && <img src={`http://127.0.0.1:5000/display/${filename}`} alt="Uploaded MRI" className="image_file"/> }
            <Link to="/" className="to_home">
                Go Home
            </Link>
        </div>
    )
}