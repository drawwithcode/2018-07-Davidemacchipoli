var mic;
var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

frameRate(10);


  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();

  capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();






}

function draw() {

  background(vol*0.255,vol*0.255,vol*0.255);
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  //ellipse(width/2,height/2,vol * 1200);
push();
  for(var x = 25; x < windowWidth; x += 200) {
        for(var y = 225; y < windowHeight; y += 200) {

          noStroke();

          var myImage = capture.loadPixels();

          image(myImage, x - (vol*6400)/2, y - (vol*4800)/2, vol*6400, vol*4800);
angleMode(DEGREES);
//rotate(random()*30,random()*30);





        }
  }
pop();

      textSize(56);
      textFont('Black Ops One');
  fill(random()*255,random()*255,random()*255);
  textAlign(CENTER);



  text('BIG G IS WATCHING YOU', width/2 , height/2 -280 );
  textSize(36);
text('Keep your voice down', width/2 , height/2 -230);

}
