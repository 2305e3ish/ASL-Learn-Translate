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

- ###Some snippets
- ![WhatsApp Image 2025-04-14 at 12 57 09_b8fad892](https://github.com/user-attachments/assets/d2dc9e65-3f43-41c3-b941-5232593a5e59)
- ![WhatsApp Image 2025-04-14 at 12 57 29_9b83dd55](https://github.com/user-attachments/assets/c6663908-aae0-4a37-a0d9-db8e82201587)
- ![WhatsApp Image 2025-04-09 at 00 11 41_38c950da](https://github.com/user-attachments/assets/817019b5-062e-4759-8c3d-667fdd35d805)
- ![WhatsApp Image 2025-04-09 at 00 12 05_6d072679](https://github.com/user-attachments/assets/a548fbd6-f954-47c7-89a6-35a84015b7de)



