# Smart ASL

Smart ASL is a web-based application that enables real-time recognition of American Sign Language (ASL) gestures using AI and computer vision. It aims to make communication more inclusive for the deaf and hard-of-hearing community by offering interactive learning, real-time feedback, and gesture translation.

## What It Does

- Detects ASL gestures in real-time using webcam input  
- Uses a trained deep learning model to recognize signs  
- Offers a structured "Learn" module with Beginner, Intermediate, and Advanced levels  
- Provides guided "Practice" sessions with instant feedback  
- Includes an "ASL Translate" tool to convert English text into sign language  
- Features a clean, responsive UI designed for accessibility and ease of use  

## Tech Stack

### Frontend
- React: Core framework for building the user interface  
- Vite: Fast bundler and development server  
- Axios: For HTTP communication with the backend  
- Figma: Used for UI/UX design  

### Backend
- Python: Used for preprocessing, model integration, and backend logic  
- Flask: Lightweight framework to serve the ASL model API  

### AI/ML
- PyTorch: Framework used to build and train the neural network model  
- MediaPipe: For real-time hand landmark detection  
- OpenCV: To capture and process video frames  
- ONNX: For exporting the PyTorch model to a web-compatible format  

### Data & Preprocessing
- Kaggle ASL Dataset: Primary dataset for training and validation  
- NumPy and Pandas: For data manipulation and preprocessing  
