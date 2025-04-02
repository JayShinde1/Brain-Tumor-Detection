import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Upload.css";

export default function Upload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/result", { state: { result: response.data.result, filename: response.data.filename } });
        } catch (error) {
            console.error(`Error uploading the file: ${error}`);
            alert("Upload failed");
        }
    };

    return (
        <div className="main-container1">
            <div className="content-container">
                {/* Right Side - Info Section */}
                <div className="info-container1">
                    <motion.div 
                        className="info-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                    <h2 className="info-title">About Brain Tumors</h2>
                    <p>
                    Brain tumors range in size from very small to very large. Some brain tumors are found when they are very small because they cause symptoms that you notice right away. Other brain tumors grow very large before they're found. Some parts of the brain are less active than others. If a brain tumor starts in a part of the brain that's less active, it might not cause symptoms right away. The brain tumor size could become quite large before the tumor is detected.
                    </p>

                    <h3 className="info-subtitle">How AI Helps:</h3>
                    <p>
                        Brain tumors affect thousands globally. Our AI system helps detect  
                        abnormalities in MRI scans, assisting doctors in early diagnosis. <br />
                        Our deep learning model scans MRI images for early signs of tumors,  
                        increasing diagnosis speed and accuracy.
                    </p>
                    <p>
                    The process is simple: <strong>Upload an MRI scan</strong>, and our AI will provide a prediction in seconds
                    </p>
                    </motion.div>
                </div>
                <div className="right_elements">
                <div className="symptom-container">
                    <motion.div 
                                className="upload-section"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                        <h3 className="info-subtitle">Symptoms to Watch:</h3>
                        <ul>
                            <li>Headache or pressure in the head that is worse in the morning.</li>
                            <li>Headaches that happen more often and seem more severe.</li>
                            <li>Nausea or vomiting.</li>
                            <li>Headaches that are sometimes described as tension headaches or migraines.</li>
                            <li>Losing feeling or movement in an arm or a leg.</li>
                            <li>Eye problems, such as blurry vision, seeing double or losing sight on the sides of your vision.</li>
                            <li>Trouble with balance.</li>
                            <li>Speech problems.</li>
                            <li>Feeling very tired.</li>
                            <li>Confusion in everyday matters.</li>
                        </ul>
                        </motion.div>
                    </div>
                    <div className="upload-container">
                        {/* Left Side - Upload Section */}
                        <motion.div 
                            className="upload-section"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="upload-title">Brain Tumor Detection</h1>
                            <p className="upload-description">
                                Upload your MRI scan and let AI analyze it instantly.  
                                Early detection can be life-saving.
                                
                            </p>
                            <form onSubmit={handleUpload} className="upload-form">
                                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required />
                                <motion.button 
                                    type="submit" 
                                    className="upload-button"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Upload & Predict
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
