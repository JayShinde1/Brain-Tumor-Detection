import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css"; // Import the updated CSS file

export default function Home() {
    return (
        <div className="main-container">
            {/* Hero Section */}
            <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Brain Tumor Detection
            </motion.h1>

            {/* Brain Tumor Info & Types - Staggered Layout */}
            <div className="info-sections">
                <div className="brain-tumor-info">
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    >
                    <h2>What is brain tumor:</h2>
                    <p>
                    A brain tumor is a growth of cells in the brain or near it. Brain tumors can happen in the brain tissue. 
                    Brain tumors also can happen near the brain tissue. Nearby locations include nerves, the pituitary gland, the pineal
                    gland, and the membranes that cover the surface of the brain.
                    </p>
                    <p>
                    Brain tumors can begin in the brain. These are called primary brain tumors. Sometimes, cancer spreads to the brain 
                    from other parts of the body. These tumors are secondary brain tumors, also called metastatic brain tumors.
                    </p>
                    </motion.div>
                </div>
                
                <div className="brain-tumor-types">
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2>Types of brain tumor:</h2>
                    <p>
                        There are many types of brain tumors. The type of brain tumor is based on the kind of cells that make up the tumor.
                        Special lab tests on the tumor cells can give information about the cells. Your health care team uses this information
                        to figure out the type of brain tumor.
                    </p>
                    <p>
                    Many different types of primary brain tumors exist. Some brain tumors aren't cancerous. These are called
                    noncancerous brain tumors or benign brain tumors. Noncancerous brain tumors may grow over time and press on the 
                    brain tissue. Other brain tumors are brain cancers, also called malignant brain tumors. Brain cancers may grow 
                    quickly. The cancer cells can invade and destroy the brain tissue.
                    </p>
                    </motion.div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="info-container">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                <p className="info-text">
                    To predict the tumor, click on the "Predict Now" button.
                </p>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link to="/upload" className="cta-button">
                    Predict Now 🚀
                </Link>
            </motion.div>
        </div>
    );
}
