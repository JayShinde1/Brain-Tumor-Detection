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
