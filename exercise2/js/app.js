const video = document.getElementById("webcam");
const label = document.getElementById("label");

const options = { numLabels: 3 };
// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet', console.log('Model Loaded.'));
// Create a new classifier using those features and with a video element
const classifier = featureExtractor.classification(video, options, console.log('The video is ready.'));

const labelBtns = ["labelOne", "labelTwo", "labelThree"].map(label => {
    const btn = document.querySelector(`#${label}`);
    btn.addEventListener("click", () => {
        classifier.addImage(label);
        console.log(`Classified ${label}.`);
    });
    return btn;
});

document.querySelector('#train').addEventListener("click", () => {
    classifier.train((lossValue) => {
        console.log('Loss is', lossValue);
        if (lossValue === null) {
            console.log('Training completed.');
            classify();
        } else {
            console.log('Continuing training...');
        }
    });
});

document.querySelector('#save').addEventListener("click", () => {
    featureExtractor.save();
    console.log("Model saved!");
});

document.querySelector('#load').addEventListener("click", () => {
    featureExtractor.load('model/model.json', () => {
        console.log("Previously saved model loaded!");
        classify();
    });
});

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.log("Something went wrong!");
        });
}

const classify = () => {
    setInterval(() => {
        classifier.classify(video, (err, result) => {
            if (err) console.log(err);
            console.log(result);
            label.innerHTML = result[0].label;
        });
    }, 1000);
};

label.innerText = "";