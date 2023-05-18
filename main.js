function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oKd1CohEm/model.json',modelReady)}

function modelReady(){
  classifier.classify(gotResults);
}
var dog =0;
var cat =0;
var lion =0;
var cow =0; 
var background=0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_count").innerHTML = 'Detected lion - '+lion+ ' Detected Cow - '+cow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    img = document.getElementById("image");

    if(results[0].label == "Barking"){
        img.src = 'bark.gif';
        dog = dog+1;
        document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
    }
    else if(results[0].label == "Meowing"){
        img.src = 'meow.gif';
        cat = cat+1;
        document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
    }
    else if(results[0].label == "Roar"){
        img.src = 'roar.gif';
        lion = lion+1;
        document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
    }
    else if(results[0].label == "Mooing"){
        img.src = "moo.gif";
        cow = cow+1;
        document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
    }
    else{
        img.src = "listeim";
        background_noise = background+1;
        document.getElementById("detected").innerHTML = "Detected Background - "+ background;
    }
}
}


