import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Upload(){
    const [file, setFile] = useState(null);
    const navigate = useNavigate()

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file!")
        const formData = new FormData()
        formData.append("file", file)
        try{
            const response = await axios.post("http://127.0.0.1:5000/predict", formData, {headers: { "Content-Type": "multipart/form-data" },})
            navigate("/result", { state: { result: response.data.result, filename: response.data.filename}})
        }
        catch(error){
            console.error(`Error uploading the file: ${error}`)
            alert("Upload failed")
        }
    }

    return(
        <div className="main_container">
            <h1 className="main_heading">
                Upload An MRI Image
            </h1>
            <form onSubmit={handleUpload} className="upload_image">
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required/>
                <button type="submit" className="button">
                    Upload & Predict
                </button>
            </form>
        </div>
    )
}