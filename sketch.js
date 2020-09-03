

var bow, arrow, background, redB, pinkB, greenB, blueB, arrowGroup, redBall, arrow;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;

var redBCounter = 0, arrowCounter = 0;

function preload() {

  backgroundImage = loadImage("background0.png");

  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

}



function setup() {
  createCanvas(600, 600);

  //creating background
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImage);
  background.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  score = 0
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();


}

function draw() {

  // moving ground
  background.velocityX = -3

  if (background.x < 0) {
    background.x = background.width / 2;
  }

  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {

    //   if(arrow=== undefined){
    //     createArrow();

    //   }
    //  else{
    //   console.log(arrow.x)
    //    if(arrow.x<=250){
    //      console.log(arrow.x)
    //      createArrow();
    //    }
    //  }
    createArrow();

  }

  //creating continous enemies
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 120 == 0) {
    // console.log(select_balloon)
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      blueBalloon();
    } else if (select_balloon == 3) {
      greenBalloon();
    } else {
      pinkBalloon();
    }
  }

  //   if (arrowGroup.isTouching(redB)) {
  //   redB.destroyEach();
  //   arrowGroup.destroyEach();
  //     score=score+1;
  // }

//hitiing each individual redbaloon
  
for (var i = 0; i < redBCounter; i++) {
    if (redB.get(i) != undefined && redB.get(i).isTouching(arrowGroup)) {
     redB.get(i).destroy();
     
      score=score+1;
    }
 }
for (var i = 0; i < blueBCounter; i++) {
    if (blueB.get(i) != undefined && blueB.get(i).isTouching(arrowGroup)) {
     blueB.get(i).destroy();
     
      score=score+1;
    }
 }
  for (var i = 0; i < greenBCounter; i++) {
    if (greenB.get(i) != undefined && greenB.get(i).isTouching(arrowGroup)) {
     greenB.get(i).destroy();
     
      score=score+1;
    }
 }
 for (var i = 0; i < pinkBCounter; i++) {
    if (pinkB.get(i) != undefined && pinkB.get(i).isTouching(arrowGroup)) {
     pinkB.get(i).destroy();
     
      score=score+1;
    }
 } 
  //  if (arrowGroup.isTouching(greenB)) {
  //   greenB.destroyEach();
  //   arrowGroup.destroyEach();
  //   score=score+3;
  // }



  //  if (arrowGroup.isTouching(blueB)) {
  //   blueB.destroyEach();
  //   arrowGroup.destroyEach();
  //   score=score+2;
  // }



  // if (arrowGroup.isTouching(pinkB)) {
  //   pinkB.destroyEach();
  //   arrowGroup.destroyEach();
  //   score=score+1;
  // }

  //for (var i = 0; i < arrowCounter; i++) {
   // for (var j = 0; j < redBCounter; j++) {

     // if (arrowGroup.get(i) != undefined && redB.get(j) != undefined &&arrowGroup.get(i).x>=100 && redB.get(j).x<=480) {
       // if (arrowGroup.get(i).overlap(redB.get(j))) {
       //   redB.get(j).destroy()
        //  arrowGroup.get(i).destroy()
         // score = score + 1;
         // console.log("destroyed")
        }
      }
    }
  }
  
  // if (arrow != undefined && redBall != undefined) {
  //   if (arrow.overlap(redBall)) {
  //     redBall.destroy()
  //     arrow.visible = false;
  //     score = score + 1;
  //     console.log("destroyed")
  //   }
  // }

  drawSprites();
  text("Score: " + score, 500, 50);
}

function redBalloon() {
  
// am adding a frame count in the redballon function so then b aloons will come at specific frame for example each 80th frame.
  if(frameCount%80==0){
  redBall = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redBall.addImage(red_balloonImage);
  redBall.velocityX = 3;
  redBall.lifetime = 180;
  redBall.scale = 0.1;


  redB.add(redBall);

  redBCounter++;
  }
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 300;
  blue.scale = 0.1;
  blueB.add(blue);
  blueBCounter;
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 300;
  green.scale = 0.1;
  greenB.add(green);
  greenBCounter;
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 300;
  pink.scale = 1
  pinkB.add(pink);
  pinkBCounter;
}


// Creating  arrows for bow
function createArrow() {

  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

  arrowCounter++;

  // console.log(redBall)


}
