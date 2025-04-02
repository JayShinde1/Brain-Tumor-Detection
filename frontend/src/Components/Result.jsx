import { useLocation, Link } from "react-router-dom";
import "./Result.css"; // Import the updated CSS file
export default function Result(){
    const location = useLocation()
    const { result, filename } = location.state || {result: "No result", filename: ""}
    return(
        <div className="main-container2">
            <h1 className="main_heading">Prediction Results</h1>
            <div className="submain_container">
                <div className="result">
                    <p>Prediction: {result}</p>
                    {filename && <img src={`http://127.0.0.1:5000/display/${filename}`} alt="Uploaded MRI" className="image_file"/> }
                    <Link to="/" className="to_home">
                        Go Home
                    </Link>
                </div>
                <div className="info_container2">
                    <h2 className="info-title">How It Works?</h2>
                    <p className="info-text">
                        Our deep learning model analyzes MRI images to determine whether a tumor is present. 
                        The model has been trained on thousands of images to ensure accuracy and reliability.
                    </p>
                    <p>
                    Our deep learning model analyzes MRI images to determine whether a tumor is present. 
                    </p>
                </div>
            </div>
        </div>
    )
}