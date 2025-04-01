# Brain-Tumor-Detection
This dataset is taken from Kaggle and detects if a person has a brain tumor or not.
<<<<<<< HEAD
Project Description
This project aims to automate the detection of brain tumors from MRI images using deep learning techniques. Early diagnosis of brain tumors is crucial for timely treatment and improved survival rates. This system leverages Convolutional Neural Networks (CNN) to classify brain scans into tumor or no tumor categories.

Key Features:
✅ Image Preprocessing: MRI scans are processed to enhance image quality, resize them, and normalize pixel values.
✅ Model Training: A deep learning model, likely based on CNN architecture, is trained on a labeled dataset of brain images.
✅ Classification: Given an input MRI scan, the system predicts whether a brain tumor is present or not.
✅ Visualization: The project includes visualizations such as sample images, accuracy graphs, and loss curves to better understand the model’s performance.

Technologies Used:
Python
TensorFlow / Keras (for deep learning)
OpenCV / PIL (for image handling)
NumPy, Pandas, Matplotlib (for data manipulation and visualization)
Jupyter Notebook (for experimentation and analysis)

=======
Dataset link: (https://www.kaggle.com/datasets/navoneel/brain-mri-images-for-brain-tumor-detection?select=yes)
>>>>>>> f355e52cc69e21b8749fc89b6528d4bac504cbf2

Frontend Overview (React + Vite)
The frontend of this project is built using React with Vite as the build tool. It consists of three main pages:

1. Home Page (Home.jsx)
This page serves as the entry point of the application.
It contains a title and a button to navigate to the upload page.
Users can click the button to proceed to the Upload page.

2. Upload Page (Upload.jsx)
This page allows users to upload an MRI scan to check for brain tumors.
When a user selects an image and clicks the submit button, the image is sent to the Flask backend.
The request is made using Axios:
axios.post("http://127.0.0.1:5000/predict", formData)
The backend processes the image, runs the prediction model, and returns the result.
The frontend then redirects the user to the Result Page to display the prediction.

3. Result Page (Result.jsx)
This page retrieves the prediction result from the backend.
It displays:
The uploaded MRI image (fetched from Flask’s /display/<filename> route).
The prediction result ("Tumor Detected" or "No Tumor").

Backend Overview (Flask + TensorFlow)
The backend is built with Flask and serves two main purposes:

Handling file uploads (saving the images in an uploads/ folder).

Running the trained deep learning model to classify the MRI scan.

Flask API Routes
1. /predict (POST)
This is the core API endpoint where the frontend sends the uploaded image.
The Flask app:
Receives the image from the frontend.
Saves it in the uploads/ folder.
Processes the image (resizing, normalizing).
Runs it through the trained TensorFlow model.
Returns the prediction result (Tumor Detected or No Tumor) as a JSON response.

2. /display/<filename> (GET)
This route allows the frontend to fetch and display the uploaded image in the Result Page.

Frontend & Backend Communication
The frontend and backend communicate using HTTP requests (REST API calls):

1. Uploading an Image (Frontend → Backend)
Frontend (Upload Page) sends a POST request:
axios.post("http://127.0.0.1:5000/predict", formData)
Backend (Flask /predict route) receives the request:
file = request.files['file']
file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
file.save(file_path)
The image is preprocessed and predicted using TensorFlow:
prediction = model.predict(input_image)
The prediction result is sent back to the frontend:
return jsonify({"filename": file.filename, "result": predicted_class})

2. Displaying the Image (Frontend → Backend)
Frontend requests the uploaded image:
<img src={`http://127.0.0.1:5000/display/${filename}`} alt="Uploaded MRI" />
Backend serves the image from the uploads/ folder:
@app.route('/display/<filename>')
def display_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
Merging the Frontend and Backend (Running with One Command)
To simplify the workflow, we integrated the React frontend and Flask backend so they start with a single command.

Modifications to Flask (app.py)
Flask now serves the React build files:
app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")
The vite.config.js was updated to output the frontend build inside the backend folder:
build: {
  outDir: '../frontend/dist'
}
This way, after running:
npm run build
The React frontend files are served by Flask.

Single Start Script (server.py)
To start both frontend and backend with one command, we created a Python script:
import subprocess
import os

# Start Flask Backend
flask_process = subprocess.Popen(["python", "Brain-Tumor-Detection/app.py"])

# Start React Frontend
os.chdir("frontend")
react_process = subprocess.Popen(["npm", "run", "dev"])

try:
    flask_process.wait()
    react_process.wait()
except KeyboardInterrupt:
    flask_process.terminate()
    react_process.terminate()

start.bat:
@echo off
start cmd /k "cd Brain-Tumor-Detection && python app.py"
start cmd /k "cd frontend && npm run dev"

Now, running:
start.bat
Starts both the Flask server and the React development server simultaneously.

Final Workflow
User visits http://127.0.0.1:5000/
User uploads an MRI scan (frontend → backend /predict).
Flask processes the image & predicts (Tumor Detected or No Tumor).
Frontend receives & displays the result.
User sees the uploaded image & prediction on the result page.
