from flask import Flask, render_template, request, redirect, url_for
import os
import numpy as np
import cv2
import tensorflow as tf

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load trained model
MODEL_PATH = "model/brain_tumor_model.h5"
model = tf.keras.models.load_model(MODEL_PATH)

IMG_SIZE = 128  # Image size used in training

# Preprocessing Function
def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    return img / 255.0

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)

            # Process the image
            img = preprocess_image(file_path)
            input_image = np.expand_dims(img, axis=0)

            # Predict using the model
            prediction = model.predict(input_image)
            predicted_class = "Tumor Detected" if prediction[0][0] > 0.5 else "No Tumor"

            return render_template('result.html', filename=file.filename, result=predicted_class)
    
    return render_template("predict.html")

@app.route('/display/<filename>')
def display_image(filename):
    return redirect(url_for('static', filename='uploads/' + filename), code=301)

if __name__ == "__main__":
    app.run(debug=True)
