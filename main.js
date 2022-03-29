var SpeechRecognition = window.webkitSpeechRecognition; //speech to text (web speech API)
var recognition = new SpeechRecognition();
 function start(){
     document.getElementById("textbox").innerHTML=""
     recognition.start();

 }
 recognition.onresult=function(event){
     console.log(event)
     content=event.results[0][0].transcript
     document.getElementById("textbox").innerHTML=content
     console.log(content)
     if (content=="take my selfie") {
         console.log("taking selfie now")
         Speak()
     }
     Webcam.attach(cam);
     setTimeout(function(){
         selfie_time()
         save()
     },5000)
}


 function Speak(){
     var synth=window.speechSynthesis; //text to speech (web speech API)
     speak_data="Taking selfie in 5 seconds. Say cheeeese"
     var utter_this=new SpeechSynthesisUtterance(speak_data)
     synth.speak(utter_this)
 }
 Webcam.set({
     width: 360,
     height: 250,
     image_format: 'png',
     png_quality: 10000
 });
cam=document.getElementById("camera")

function selfie_time(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captured_image'>"
    })
}

function save(){
    link=document.getElementById("link")
    var image=document.getElementById("captured_image").src
    link.href=image
    link.click()
}