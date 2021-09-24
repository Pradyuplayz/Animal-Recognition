function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    if (results[0].label == "Cat") {
    document.getElementById("Output").src="Cat.jpg";

    } else if (results[0].label == "Cow") {
      document.getElementById("Output").src="Cow.jpg";

    } else if (results[0].label == "Dog") {
      document.getElementById("Output").src="Dog.jpg";

    }else if (results[0].label == "Elephant") {
      document.getElementById("Output").src="Elephant.jpg";

    }else if (results[0].label == "Tiger") {
      document.getElementById("Output").src="Tiger.jpg";

    }else if (results[0].label == "Wolf") {
      document.getElementById("Output").src="Wolf.jpg";

    }else{
      document.getElementById("Output").src="";

    }

  }
}


function startclassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6veHAQDrL/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);

}


