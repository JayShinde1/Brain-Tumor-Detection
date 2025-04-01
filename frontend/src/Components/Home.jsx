import {Link} from "react-router-dom" 
export default function Home(){
    return(
        <div className="main_container">
            <h1 className="main_heading">Brain Tumor Detection</h1>
            <p className="upload_image_title">Uplaod MRI Image To Check For A Brain Tumor</p>
            <Link to="/upload" className="predict_now_link">
                Predict Now
            </Link>
        </div>
    )
}