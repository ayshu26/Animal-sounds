// 
function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vc3FcQV5C/model.json", modelready)
}
function modelready() {
    classifier.classify(gotresult)
}
function gotresult(error, result) {
    console.log(result);
    console.log(result);
    img1 = document.getElementById("image")

    document.getElementById("resultlabel").innerHTML = "I can hear: " + result[0].label
    document.getElementById("reslutaccuracy").innerHTML = "Accuracy: " + (result[0].confidence * 100).toFixed(2) + " %"
    r = Math.floor(Math.random() * 255) + 1
    g = Math.floor(Math.random() * 255) + 1
    b = Math.floor(Math.random() * 255) + 1
    document.getElementById("resultlabel").style.color = "rgb(" + r + "," + g + "," + b + ")"
    document.getElementById("reslutaccuracy").style.color = "rgb(" + r + "," + g + "," + b + ")"

    if (result[0].label == 'cow') {
        img1.src = "cow.webp"

    } if (result[0].label == 'goat') {
        img1.src = "goat.jpg"

    } if (result[0].label == 'dog') {
        img1.src = "dog.jpg"

    } if (result[0].label == 'cat') {
        img1.src = "cat.avif"

    } else {
        img1.src = "ear.jpg"

    }
}




