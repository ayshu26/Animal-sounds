// 
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vc3FcQV5C/model.json",modelready)
}
 function modelready(){
    classifier.classify(gotresult)
 }
 function gotresult( error,result){
 console.log(result);
 }