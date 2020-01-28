//  MobileNet을 사용하여 이미지를 클래스화 하기
let classifier;

// 클래스화 하기위한 이미지를 담을 변수
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  //img = loadImage('images/bird.jpg');
    img = createCapture(VIDEO);
}

function setup() {
  createCanvas(400,400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// 클래스파이 실행시 에러와 결과 처리 함수
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}