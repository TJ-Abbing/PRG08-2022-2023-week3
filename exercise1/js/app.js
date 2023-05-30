const image = document.getElementById("image");
const label = document.getElementById("label");
const uploadInput = document.getElementById("uploadInput");

// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Make a prediction with the selected image
function classifyImage() {
  classifier.classify(image, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(results);
    const predictedLabel = results[0].label;
    label.innerText = predictedLabel;
    speak(predictedLabel); // Call the speak function with the predicted label
  });
}

// Event listener for the image upload button
uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      classifyImage();
    };
  }
});

const labelOneBtn = document.querySelector("#labelOne");
const labelTwoBtn = document.querySelector("#labelTwo");
const labelThreeBtn = document.querySelector("#labelThree");
const trainBtn = document.querySelector("#train");

labelOneBtn.addEventListener("click", () => console.log("button 1"));
labelTwoBtn.addEventListener("click", () => console.log("button 2"));
labelThreeBtn.addEventListener("click", () => console.log("button 3"));

trainBtn.addEventListener("click", () => console.log("train"));

label.innerText = "Ready when you are!";

let synth = window.speechSynthesis;

function speak(text) {
  if (synth.speaking) {
    console.log('still speaking...');
    return;
  }
  if (text !== '') {
    let utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  }
}

speak("Upload an image please.");