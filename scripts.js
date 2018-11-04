// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
// DOCUMENT READY FUNCTION BELOW
const inputs = [0,0,0,0];
const target = [];

let img;
let scale = 2;
let chars = ['$','@','B','%','8','&','W','M','#','*','o','a',
'k','b','d','p','q','w','m','Z','o','0','Q','L','C','J','U',
'Y','X','z','c','v','n','x','r','j','f','t','/','\\','|','(',
')','1','{','}','[',']','?','-','_','+','~','<','>','i','!',
'"','^','`',"'",'.', ' ']

function preload() {
  img = loadImage("safe.jpg");
}

function setup() {
  w = img.width, h = img.height;
  console.log(w, h);
  let canvas = createCanvas(w / scale, h / scale);
  canvas.parent('canvas-holder');
  noLoop();
  pixelDensity(1);
}



function draw() {
    img.loadPixels();
    for(let x = 0; x < w; x+= scale * 1.5) {
      for(let y = 0; y < h; y+= scale * 1.5) {
        let index = (x + y * w) * 4;
        noStroke();
        let c =
          (img.pixels[index] +
          (img.pixels[index] + 1) +
          (img.pixels[index] + 2)) / 3;
        for(let i = 0; i < chars.length; i++) {
          if((c > i * 255 /chars.length) && (c < (i + 1) * 255 / chars.length)){
            fill(0);
            textSize(scale * 2);
            text(chars[i] ,x / scale,y / scale);
          }
        }
      }
    }
    img.updatePixels();
}

const random = (num) => {
  return Math.floor(Math.random() * 4);
}

const fillTarget = () => {
  let i = 0,temp;
  while(i < 4){
    temp = (random(4));
    target.push(temp);
    i++;
  }
}

$(document).ready(function(){
  fillTarget();
  console.table(target);
  //add click handlers
  for(let i = 1; i <= 4; i++) {
    let tempId = "#cyan" + i;
    let tempInput = "#input" + i;
    $(tempId).on('click', () => {
      $(tempInput).css('background-color','cyan');
      inputs[i - 1] = 0;
    });
    tempId = "#yellow" + i;
    $(tempId).on('click', () => {
      $(tempInput).css('background-color','yellow');
      inputs[i - 1] = 1;
    });
    tempId = "#magenta" + i;
    $(tempId).on('click', () => {
      $(tempInput).css('background-color','magenta');
      inputs[i - 1] = 2;
    });
    tempId = "#black" + i;
    $(tempId).on('click', () => {
      $(tempInput).css('background-color','black');
      inputs[i - 1] = 3;
    });
  }

  $('#verify').on('click', () => {
    console.table(inputs);
    //update user choice boxes
      for(let i = 1; i <= 4; i++) {
        let tempId = '#choice' + i;
        switch(inputs[i - 1]) {
          case 0:
            $(tempId).css('background-color','cyan');
          break;
          case 1:
            $(tempId).css('background-color','yellow');
          break;
          case 2:
            $(tempId).css('background-color','magenta');
          break;
          case 3:
            $(tempId).css('background-color', 'black');
          break;
        }
      }
      //check the users input
        let numbersInCorrectPlace = 0,
            numbersCorrect = 0;
          for(let i = 0; i < 4; i++){
            if(inputs[i] === target[i]) {
              numbersInCorrectPlace++;
            }
          }
          for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
              if(inputs[i] === target[j]) {
                numbersCorrect++;
                break;
              }
            }
          }
          $(results).text('Number correct:' + numbersCorrect +
          ', number in correct place:' + numbersInCorrectPlace);
      });
  });
