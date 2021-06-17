var speechrecognition=window.webkitSpeechRecognition;
// window.webkitSpeechRecognition is a web speech API AI model which is trained on many human launguages(natural launguages)
var recognition = new speechrecognition();

function Start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
//start function is the predefined function of web speech api which starts recognizing voice
//on result function is predefined function of web speech api which holds result of recognition function
}

recognition.onresult=function(event)
{
    console.log(event);
 var content=event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML=content;

 if(content == "take my selfie")
 {
  speak();
 }
}

function speak()
{
var synth= window.speechSynthesis;
//window.speechSynthesis is api which  is used to convert text to speech
//var speak_data=document.getElementById("textbox").value;
var speak_data="taking your selfie within 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_data);
//speechSynthesisUtterance is a pre defined function of api converts text to speech
//utterthis variable stores the converted text to speech
synth.speak(utterthis);
//speak is a pre defined function of api by which the system will speak out converted text to speech
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  Webcam.attach( '#camera' );
  setTimeout(function()
  {
    
    take_ss();
    save();
   }, 5000);
  
}

function take_ss(){
  alert("click me for activation") ;
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'"/>'
  });
}
function save(){
  link=document.getElementById("link");
  img=document.getElementById("selfieimage").src;
  link.href=img;
  link.click();
}