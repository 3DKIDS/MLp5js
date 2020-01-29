//작성자 : 서종원
//email: 3dkids4u@gmail.com
//ML p5js study
//3dkids.kr
//wgfactory.xyz

//  MobileNet을 사용하여 이미지를 클래스화 하기
let classifier;

// 클래스화 하기위한 이미지를 담을 변수
let video;

//라벨구역 html tag div 담을 변수
let div, div2;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');

    video = createCapture(VIDEO);
    video.hide();
}

function setup() {
  createCanvas(400,400);
    div = createDiv('label: ').size(100, 100);
    div2 = createDiv('confidence: ').size(100, 100);
}

function draw(){
    classifier.classify(video, gotResult);
  image(video, 0, 0);
    
}

// 클래스파이 실행시 에러와 결과 처리 함수
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
      div.html(`${results[0].label}`);
      div2.html(`${nf(results[0].confidence, 0, 2)}`);
      
  }
}
