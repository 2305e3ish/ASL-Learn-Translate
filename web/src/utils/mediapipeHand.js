import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
// Removed unused imports
// import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
// import { HAND_CONNECTIONS } from '@mediapipe/hands';
import * as ort from 'onnxruntime-web'; // Import ONNX Runtime

export async function initializeHandRecognition(videoRef, canvasRef, setOutputText) {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');

    try {
        const modelPath = `${process.env.PUBLIC_URL || ''}/models/sign_language_model.onnx`;
        const session = await ort.InferenceSession.create(modelPath);

        const hands = new Hands({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });
        hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        hands.onResults(async (results) => {
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            canvasCtx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height); // Overlay video feed

            if (results.multiHandLandmarks) {
                for (const landmarks of results.multiHandLandmarks) {
                    // Removed drawing of connectors and landmarks
                    // drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 5 });
                    // drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });

                    try {
                        // Flatten the landmarks into a single array of x and y coordinates
                        const flattenedLandmarks = landmarks.reduce((acc, landmark) => {
                            acc.push(landmark.x, landmark.y); // Use only x and y coordinates
                            return acc;
                        }, []);
                        console.log('Flattened landmarks:', flattenedLandmarks); // Debugging log
                        console.log('Flattened landmarks length:', flattenedLandmarks.length); // Debugging log

                        if (flattenedLandmarks.length === 42) { // Adjusted to match 21 landmarks * 2 coordinates
                            const inputTensor = new ort.Tensor('float32', flattenedLandmarks, [1, 42]);
                            console.log('Input tensor shape:', inputTensor.dims); // Debugging log

                            const output = await session.run({ input: inputTensor });
                            const predictions = output.output.data;
                            const maxIndex = predictions.indexOf(Math.max(...predictions));
                            const predictedLetter = String.fromCharCode(65 + maxIndex);

                            setOutputText(predictedLetter); // Display predicted letter
                        } else {
                            console.error('Invalid input shape for ONNX model:', flattenedLandmarks.length);
                            setOutputText('Invalid input shape for ONNX model.');
                        }
                    } catch (inferenceError) {
                        console.error('Error during model inference:', inferenceError);
                        setOutputText('Error during model inference.');
                    }
                }
            } else {
                setOutputText('No hands detected.');
            }
        });

        const camera = new Camera(videoElement, {
            onFrame: async () => {
                await hands.send({ image: videoElement });
            },
            width: 640,
            height: 480,
        });
        camera.start();
    } catch (modelError) {
        console.error('Error loading ONNX model:', modelError);
        setOutputText('Error loading ONNX model.');
    }
}
