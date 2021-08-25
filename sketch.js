var title,title_img;
var play,play_img;
var bg_img,bg;
var bg2,bg2_img;
var girl,girl_img;
var mousepointer,mousepointer_img;
var BgMusic;
var tick1,tick1_img;
var soundon,soundon_img,soundoff,soundoff_img;
var shirt1,shirt1_img,shirt1_girl,shirt1_girl_img;
var shirt2,shirt2_img,shirt2_girl,shirt2_girl_img;
var shirt3,shirt3_img,shirt3_girl,shirt3_girl_img;
var shirt4,shirt4_img,shirt4_girl,shirt4_girl_img;
var pant1,pant1_img;
var pant2,pant2_img;
var pant3,pant3_img;
var pant4,pant4_img;
var face1,face1_img;
var face2,face2_img;
var face3,face3_img;
var face4,face4_img;
var face5,face5_img;
var face6,face6_img;
var hair1,hair1_img;
var hair2,hair2_img;
var hair3,hair3_img;
var hair4,hair4_img;
var hair5,hair5_img;
var hair6,hair6_img;
var hair7,hair7_img;
var shirt1_face1,shirt1_face1_img;
var shirt1_pant1,shirt1_pant1_img;
var shirt1_pant2,shirt1_pant2_img;
var shirt1_pant3,shirt1_pant3_img;
var shirt1_pant4,shirt1_pant4_img;
var shirt2_pant1,shirt2_pant1_img;
var shirt2_pant2,shirt2_pant2_img;
var shirt2_pant3,shirt2_pant3_img;
var shirt2_pant4,shirt2_pant4_img;
var shirt3_pant1,shirt3_pant1_img;
var shirt3_pant2,shirt3_pant2_img;
var shirt3_pant3,shirt3_pant3_img;
var shirt3_pant4,shirt3_pant4_img;
var shirt4_pant1,shirt4_pant1_img;
var shirt4_pant2,shirt4_pant2_img;
var shirt4_pant3,shirt4_pant3_img;
var shirt4_pant4,shirt4_pant4_img;
var fabulous,fabulous_img;
var tick2,tick2_img;
var shirt1_pant1_final,shirt1_pant1_final_img;
var shirt1_pant2_final,shirt1_pant2_final_img;
var shirt1_pant3_final,shirt1_pant3_final_img;
var shirt1_pant4_final,shirt1_pant4_final_img;
var shirt2_pant1_final,shirt2_pant1_final_img;
var shirt2_pant2_final,shirt2_pant2_final_img;
var shirt2_pant3_final,shirt2_pant3_final_img;
var shirt2_pant4_final,shirt2_pant4_final_img;
var shirt3_pant1_final,shirt3_pant1_final_img;
var shirt3_pant2_final,shirt3_pant2_final_img;
var shirt3_pant3_final,shirt3_pant3_final_img;
var shirt3_pant4_final,shirt3_pant4_final_img;
var shirt4_pant1_final,shirt4_pant1_final_img;
var shirt4_pant2_final,shirt4_pant2_final_img;
var shirt4_pant3_final,shirt4_pant3_final_img;
var shirt4_pant4_final,shirt4_pant4_final_img;


function preload(){
  title_img = loadImage("images/title.png");
  play_img = loadImage("images/playbutton.png");
  bg_img = loadImage("images/bg.jpg");
  bg2_img = loadImage("images/bg2.jpg");
  girl_img = loadImage("images/defultgirl.png");
  mousepointer_img = loadImage("images/Mousepointer.png");
  shirt1_img = loadImage("images/Shirt1.png");
  shirt1_girl_img = loadImage("images/Shirt1_Worn.png");
  shirt2_img = loadImage("images/Shirt2.png");
  shirt2_girl_img = loadImage("images/Shirt2_Worn.png");
  shirt3_img = loadImage("images/Shirt3.png");
  shirt3_girl_img = loadImage("images/Shirt3_Worn.png");
  shirt4_img = loadImage("images/Shirt4.png");
  shirt4_girl_img = loadImage("images/Shirt4_Worn.png");
  BgMusic = loadSound("Dua Lipa - Levitating.mp3");
  soundon_img = loadImage("images/Soundon.png");
  soundoff_img = loadImage("images/SoundOFF.png");
  pant1_img = loadImage("images/Pant1.png");
  pant2_img = loadImage("images/Pant2.png");
  pant3_img = loadImage("images/Pant3.png");
  pant4_img = loadImage("images/Pant4.png");
  face1_img = loadImage("images/Face1.png");
  face2_img = loadImage("images/Face2.png");
  face3_img = loadImage("images/Face3.png");
  face4_img = loadImage("images/Face4.png");
  face5_img = loadImage("images/Face5.png");
  face6_img = loadImage("images/Face6.png");
  hair1_img = loadImage("images/Hair1.png");
  hair2_img = loadImage("images/Hair2.png");
  hair3_img = loadImage("images/Hair3.png");
  hair4_img = loadImage("images/Hair4.png");
  hair5_img = loadImage("images/Hair5.png");
  hair6_img = loadImage("images/Hair6.png");
  hair7_img = loadImage("images/Hair7.png");
  shirt1_face1_img = loadImage("images/Shirt1_Face1.png");
  tick1_img = loadImage("images/tick1.png");
  
  shirt1_pant1_img = loadImage("images/Shirt1_Pant1.png");
  shirt1_pant2_img = loadImage("images/Shirt1_Pant2.png");
  shirt1_pant3_img = loadImage("images/Shirt1_Pant3.png");
  shirt1_pant4_img = loadImage("images/Shirt1_Pant4.png");
  shirt2_pant1_img = loadImage("images/Shirt2_Pant1.png");
  shirt2_pant2_img = loadImage("images/Shirt2_Pant2.png");
  shirt2_pant3_img = loadImage("images/Shirt2_Pant3.png");
  shirt2_pant4_img = loadImage("images/Shirt2_Pant4.png");
  shirt3_pant1_img = loadImage("images/Shirt3_Pant1.png");
  shirt3_pant2_img = loadImage("images/Shirt3_Pant2.png");
  shirt3_pant3_img = loadImage("images/Shirt3_Pant3.png");
  shirt3_pant4_img = loadImage("images/Shirt3_Pant4.png");
  shirt4_pant1_img = loadImage("images/Shirt4_Pant1.png");
  shirt4_pant2_img = loadImage("images/Shirt4_Pant2.png");
  shirt4_pant3_img = loadImage("images/Shirt4_Pant3.png");
  shirt4_pant4_img = loadImage("images/Shirt4_Pant4.png");
  fabulous_img = loadImage("images/Fabulous.png");
  tick2_img = loadImage("images/tick2.png");
  shirt1_pant1_final_img = loadImage("images/Shirt1_Pant1_final.png");
}
function setup(){
    createCanvas(1280,644);

    BgMusic.loop();

    bg = createSprite(640,322);
    bg.scale=0.7;
    bg.addImage(bg_img);

    title = createSprite(650,80);
    title.scale = 1.5;
    title.addImage(title_img);

    play = createSprite(900,200);
    play.scale=0.2;
    play.addImage(play_img);

    bg2 = createSprite(640,322);
    bg2.addImage(bg2_img);
    bg2.scale =1.5;
    bg2.visible = false;

    soundon = createSprite(40,620);
    soundon.addImage(soundon_img);
    soundon.scale = 0.1;

    soundoff = createSprite(40,620);
    soundoff.addImage(soundoff_img);
    soundoff.scale = 0.05;
    soundoff.visible = false;

    girl = createSprite(640,332);
    girl.addImage(girl_img);
    girl.visible = false;

    shirt1 = createSprite(100,100);
    shirt1.addImage(shirt1_img);
    shirt1.scale=0.4;
    shirt1.visible = false;

    shirt1_girl = createSprite(640,322);
    shirt1_girl.addImage(shirt1_girl_img);
    shirt1_girl.visible = false;

    shirt2 = createSprite(100,250);
    shirt2.addImage(shirt2_img);
    shirt2.scale=0.4;
    shirt2.visible = false;

    shirt2_girl = createSprite(640,322);
    shirt2_girl.addImage(shirt2_girl_img);
    shirt2_girl.visible = false;

    shirt3 = createSprite(100,400);
    shirt3.addImage(shirt3_img);
    shirt3.scale=0.4;
    shirt3.visible = false;

    shirt3_girl = createSprite(640,322);
    shirt3_girl.addImage(shirt3_girl_img);
    shirt3_girl.visible = false;

    shirt4 = createSprite(100,550);
    shirt4.addImage(shirt4_img);
    shirt4.scale=0.4;
    shirt4.visible = false;

    shirt4_girl = createSprite(640,322);
    shirt4_girl.addImage(shirt4_girl_img);
    shirt4_girl.visible = false;

    pant1 = createSprite(1150,100);
    pant1.addImage(pant1_img);
    pant1.scale = 0.4;
    pant1.visible = false;

    pant2 = createSprite(1150,250);
    pant2.addImage(pant2_img);
    pant2.scale = 0.4;
    pant2.visible = false;

    pant3 = createSprite(1150,400);
    pant3.addImage(pant3_img);
    pant3.scale = 0.4;
    pant3.visible = false;

    pant4 = createSprite(1150,550);
    pant4.addImage(pant4_img);
    pant4.scale = 0.4;
    pant4.visible = false;

    face1 = createSprite(360,80);
    face1.addImage(face1_img);
    face1.scale = 0.2;
    face1.visible = false;

    face2 = createSprite(460,80);
    face2.addImage(face2_img);
    face2.scale = 0.2;
    face2.visible = false;

    face3 = createSprite(560,80);
    face3.addImage(face3_img);
    face3.scale = 0.2;
    face3.visible = false;

    face4 = createSprite(660,80);
    face4.addImage(face4_img);
    face4.scale = 0.2;
    face4.visible = false;

    face5 = createSprite(760,80);
    face5.addImage(face5_img);
    face5.scale = 0.2;
    face5.visible = false;

    face6 = createSprite(860,80);
    face6.addImage(face6_img);
    face6.scale = 0.2;
    face6.visible = false;

    hair1 = createSprite(300,550);
    hair1.addImage(hair1_img);
    hair1.scale = 0.3;
    hair1.visible = false;

    hair2 = createSprite(410,550);
    hair2.addImage(hair2_img);
    hair2.scale = 0.3;
    hair2.visible = false;

    hair3 = createSprite(520,550);
    hair3.addImage(hair3_img);
    hair3.scale = 0.3;
    hair3.visible = false;

    hair4 = createSprite(620,550);
    hair4.addImage(hair4_img);
    hair4.scale = 0.3;
    hair4.visible = false;

    hair5 = createSprite(720,550);
    hair5.addImage(hair5_img);
    hair5.scale = 0.3;
    hair5.visible = false;
    hair5.setCollider("rectangle",0,-15,170,300);

    hair6 = createSprite(820,560);
    hair6.addImage(hair6_img);
    hair6.scale = 0.5;
    hair6.visible = false;
    hair6.setCollider("rectangle",0,-15,130,200);

    hair7 = createSprite(920,550);
    hair7.addImage(hair7_img);
    hair7.scale = 0.3;
    hair7.visible = false;
    hair7.setCollider("rectangle",0,0,230,400);

    shirt1_face1 = createSprite(640,322);
    shirt1_face1.addImage(shirt1_face1_img);
    shirt1_face1.visible = false;

    shirt1_pant1 = createSprite(640,322);
    shirt1_pant1.addImage(shirt1_pant1_img);
    shirt1_pant1.visible = false;

    shirt1_pant2 = createSprite(640,322);
    shirt1_pant2.addImage(shirt1_pant2_img);
    shirt1_pant2.visible = false;
 
    shirt1_pant3 = createSprite(640,322);
    shirt1_pant3.addImage(shirt1_pant3_img);
    shirt1_pant3.visible = false;

    shirt1_pant4 = createSprite(640,322);
    shirt1_pant4.addImage(shirt1_pant4_img);
    shirt1_pant4.visible = false;

    shirt2_pant1 = createSprite(640,322);
    shirt2_pant1.addImage(shirt2_pant1_img);
    shirt2_pant1.visible = false;

    shirt2_pant2 = createSprite(640,322);
    shirt2_pant2.addImage(shirt2_pant2_img);
    shirt2_pant2.visible = false;
 
    shirt2_pant3 = createSprite(640,322);
    shirt2_pant3.addImage(shirt2_pant3_img);
    shirt2_pant3.visible = false;

    shirt2_pant4 = createSprite(640,322);
    shirt2_pant4.addImage(shirt2_pant4_img);
    shirt2_pant4.visible = false;

    shirt3_pant1 = createSprite(640,322);
    shirt3_pant1.addImage(shirt3_pant1_img);
    shirt3_pant1.visible = false;

    shirt3_pant2 = createSprite(640,322);
    shirt3_pant2.addImage(shirt3_pant2_img);
    shirt3_pant2.visible = false;
 
    shirt3_pant3 = createSprite(640,322);
    shirt3_pant3.addImage(shirt3_pant3_img);
    shirt3_pant3.visible = false;

    shirt3_pant4 = createSprite(640,322);
    shirt3_pant4.addImage(shirt3_pant4_img);
    shirt3_pant4.visible = false;

    shirt4_pant1 = createSprite(640,322);
    shirt4_pant1.addImage(shirt4_pant1_img);
    shirt4_pant1.visible = false;

    shirt4_pant2 = createSprite(640,322);
    shirt4_pant2.addImage(shirt4_pant2_img);
    shirt4_pant2.visible = false;
 
    shirt4_pant3 = createSprite(640,322);
    shirt4_pant3.addImage(shirt4_pant3_img);
    shirt4_pant3.visible = false;

    shirt4_pant4 = createSprite(640,322);
    shirt4_pant4.addImage(shirt4_pant4_img);
    shirt4_pant4.visible = false;

    tick1 = createSprite(200,600);
    tick1.addImage(tick1_img);
    tick1.visible = false;
    tick1.scale = 0.1;

    fabulous = createSprite(650,550);
    fabulous.addImage(fabulous_img);
    fabulous.visible = false;
    fabulous.scale = 0.5;

    tick2 = createSprite(1080,600);
    tick2.addImage(tick2_img);
    tick2.visible = false;
    tick2.scale = 0.1;

    mousepointer = createSprite(0,0);
    mousepointer.addImage(mousepointer_img);
    mousepointer.scale = 0.1;
    
}

function draw(){
    background(0);

    mousepointer.x = World.mouseX;
    mousepointer.y = World.mouseY;

    if(mousePressedOver(soundon)){
      BgMusic.stop();
      soundoff.visible = true;
      soundon.visible = false;
    }
    
    if(mousePressedOver(play)){
       title.visible = false;
       play.visible = false;
       bg.visible = false;
       bg2.visible = true;
       girl.visible = true;
       shirt1.visible = true;
       //shirt2.visible = true;
       //shirt3.visible = true;
       //shirt4.visible = true;
       tick1.visible = true;
    }

    if(mousePressedOver(shirt1)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = true;
      /*shirt2.visible = true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;*/
    }

    /*if(mousePressedOver(shirt2)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = true;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;

    }
    if(mousePressedOver(shirt3)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = true;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      
    }
    if(mousePressedOver(shirt4)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = true;
    }*/

    if(mousePressedOver(tick1)){
       shirt1.visible = false;
       shirt2.visible = false;
       shirt3.visible = false;
       shirt4.visible = false;
       pant1.visible = true;
       pant2.visible = true;
       pant3.visible = true;
       pant4.visible = true;
       tick1.visible = false;
       tick2.visible = true;
    }

    if(mousePressedOver(pant1)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      pant1.visible = true;
      if(shirt1_girl.visible = true){
        shirt1_pant1.visible = true;
        shirt1_girl.visible = false;
        shirt1.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
      }
      if(shirt1_pant2.visible = true){
        shirt1_pant2.visible = true;
        shirt1_pant3.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant3.visible = true){
        shirt1_pant3.visible = true;
        shirt1_pant1.visible = false;
        shirt1_pant2.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant4.visible = true){
        shirt1_pant2.visible = false;
        shirt1_pant3.visible = false;
        shirt1_pant4.visible = true;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
     /* if(shirt1_girl.visible = true){
        shirt2_pant1.visible = true;
        shirt2_girl.visible = false;
        shirt2.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt2_pant2.visible = true){
        shirt2_pant2.visible = true;
        shirt2_pant3.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant2.visible = false;
      }
      if(shirt2_pant3.visible = true){
        shirt2_pant3.visible = true;
        shirt2_pant1.visible = false;
        shirt2_pant2.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant3.visible = false;
      }
      if(shirt2_pant4.visible = true){
        shirt2_pant1.visible = false;
        shirt2_pant3.visible = false;
        shirt2_pant4.visible = true;
        shirt2_pant2.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant4.visible = false;
      }

      if(shirt3_girl.visible = true){
        shirt3_pant1.visible = true;
        shirt3_girl.visible = false;
        shirt3.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt3_pant2.visible = true){
        shirt3_pant2.visible = true;
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant2.visible = false;
      }
      if(shirt3_pant3.visible = true){
        shirt3_pant3.visible = true;
        shirt3_pant1.visible = false;
        shirt3_pant2.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant3.visible = false;
      }
      if(shirt3_pant4.visible = true){
        shirt3_pant4.visible = false;
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = true;
        shirt3_pant2.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant4.visible = false;
      }

     /* if(shirt4_girl.visible = true){
        shirt4_pant1.visible = true;
        shirt4_girl.visible = false;
        shirt4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt3_pant1.visible = false;
      }
      if(shirt4_pant2.visible = true){
        shirt4_pant2.visible = true;
        shirt4_pant3.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant2.visible = false;
      }
      if(shirt4_pant3.visible = true){
        shirt4_pant3.visible = true;
        shirt4_pant1.visible = false;
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant3.visible = false;
      }
     /* if(shirt4_pant4.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant3.visible = false;
        shirt4_pant4.visible = true;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant4.visible = false;
      }*/
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;

    }
    if(mousePressedOver(pant2)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      shirt1_pant1 .visible = false;
      if(shirt1_girl.visible = true){
        shirt1_pant2.visible = true;
        shirt1_pant3.visible = false;
        shirt1_pant4.visible = false;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant1.visible = true){
        shirt1_pant1.visible = true;
        shirt1_pant3.visible = false;
        shirt1_pant2.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
        
      }
      if(shirt1_pant2.visible = true){
        shirt1_pant2.visible = true;
        shirt1_pant3.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
       
      }

      if(shirt1_pant3.visible = true){
        shirt1_pant3.visible = true;
        shirt1_pant2.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
       
      }
      if(shirt1_pant4.visible = true){
        shirt1_pant4.visible = true;
        shirt1_pant3.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant2.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
        

      }
    /*  if(shirt2_girl.visible = true){
        shirt2_pant2.visible = true;
        shirt2_pant3.visible = false;
        shirt2_pant4.visible = false;
        shirt2_pant1.visible = false;
        shirt2_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
      }
      if(shirt2_pant1.visible = true){
        shirt2_pant1.visible = true;
        shirt2_pant3.visible = false;
        shirt2_pant2.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt2_pant2.visible = true){
        shirt2_pant2.visible = true;
        shirt2_pant3.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant2.visible = false;
      }

      if(shirt2_pant3.visible = true){
        shirt2_pant3.visible = true;
        shirt2_pant2.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant3.visible = false;
      }
      if(shirt2_pant4.visible = true){
        shirt2_pant4.visible = true;
        shirt2_pant3.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant2.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant4.visible = false;

      }

      if(shirt3_girl.visible = true){
        shirt3_pant2.visible = true;
        shirt3_pant3.visible = false;
        shirt3_pant4.visible = false;
        shirt3_pant1.visible = false;
        shirt3_girl.visible = false;
        shirt3_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
      }
      if(shirt3_pant1.visible = true){
        shirt3_pant1.visible = true;
        shirt3_pant3.visible = false;
        shirt3_pant2.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant1.visible = false;
      }
      if(shirt3_pant2.visible = true){
        shirt3_pant2.visible = true;
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt1_pant2.visible = false;
      }

      if(shirt3_pant3.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = true;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt1_pant3.visible = false;
      }
      if(shirt3_pant4.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = true;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant4.visible = false;

      }

      if(shirt4_girl.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant3.visible = false;
        shirt4_pant4.visible = false;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
      }
      /*if(shirt4_pant1.visible = true){
        shirt4_pant1.visible = true;
        shirt4_pant3.visible = false;
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3_pant1.visible = false;
      }
      if(shirt4_pant2.visible = true){
        shirt4_pant2.visible = true;
        shirt4_pant3.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant2.visible = false;
      }

      if(shirt4_pant3.visible = true){
        shirt4_pant3.visible = true;
        shirt4_pant2.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant3.visible = false;
      }
     /* if(shirt4_pant4.visible = true){
        shirt4_pant4.visible = true;
        shirt4_pant3.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant2.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant4.visible = false;

      }*/
      pant3.visible = true;
      pant4.visible = true;
    }

    if(mousePressedOver(pant3)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      if(shirt1_girl.visible = true){
        shirt1_pant3.visible = true;
        shirt1_pant2.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant1.visible = true){
        shirt1_pant3.visible = true;
        shirt1_pant2.visible = false;
        shirt1_pant4.visible = false;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant3.visible = true){
        shirt1_pant2.visible = false;
        shirt1_pant3.visible = true;
        shirt1_pant4.visible = false;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant4.visible = true){
        shirt1_pant2.visible = false;
        shirt1_pant3.visible = true;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
     /* if(shirt2_girl.visible = true){
        shirt2_pant3.visible = true;
        shirt2_pant2.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt2_pant1.visible = true){
        shirt2_pant3.visible = true;
        shirt2_pant2.visible = false;
        shirt2_pant4.visible = false;
        shirt2_pant1.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant2.visible = false;
      }
      if(shirt2_pant3.visible = true){
        shirt2_pant2.visible = false;
        shirt2_pant3.visible = true;
        shirt2_pant4.visible = false;
        shirt2_pant1.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant3.visible = false;
      }
      if(shirt2_pant4.visible = true){
        shirt2_pant2.visible = false;
        shirt2_pant3.visible = true;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant4.visible = false;
      }

      if(shirt3_girl.visible = true){
        shirt3_pant3.visible = true;
        shirt3_pant2.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant1.visible = false;
      }
      if(shirt2_pant1.visible = true){
        shirt3_pant3.visible = true;
        shirt3_pant2.visible = false;
        shirt3_pant4.visible = false;
        shirt3_pant1.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant2.visible = false;
      }
      if(shirt3_pant3.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = true;
        shirt3_pant4.visible = false;
        shirt3_pant1.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant3.visible = false;
      }
      if(shirt3_pant4.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = true;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant4.visible = false;
      }

      /*if(shirt4_girl.visible = true){
        shirt4_pant3.visible = false;
        shirt4_pant2.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt4_pant1.visible = true){
        shirt4_pant1.visible = true;
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = false;
        shirt4_pant3.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant2.visible = false;
      }
      if(shirt4_pant3.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant3.visible = true;
        shirt4_pant4.visible = false;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant3.visible = false;
      }
      /*if(shirt4_pant4.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = true;
        shirt4_pant1.visible = false;
        shirt4_pant3.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant4.visible = false;
      }*/
      pant4.visible = true;
    }

    if(mousePressedOver(pant4)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      if(shirt1_girl.visible = true){
        shirt1_pant3.visible = false;
        shirt1_pant2.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = true;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant1.visible = true){
        shirt1_pant3.visible = false;
        shirt1_pant2.visible = false;
        shirt1_pant4.visible = true;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant2.visible = true){
        shirt1_pant3.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = true;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant3.visible = true){
        shirt1_pant2.visible = false;
        shirt1_pant3.visible = false;
        shirt1_pant4.visible = true;
        shirt1_pant1.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
      if(shirt1_pant4.visible = true){
        shirt1_pant2.visible = false;
        shirt1_pant3.visible = false;
        shirt1_pant1.visible = false;
        shirt1_pant4.visible = true;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
      }
     /* if(shirt2_girl.visible = true){
        shirt2_pant3.visible = false;
        shirt2_pant2.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = true;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1_pant1.visible = false;
        shirt2.visible = false;
      }
      if(shirt2_pant1.visible = true){
        shirt2_pant3.visible = false;
        shirt2_pant2.visible = false;
        shirt2_pant4.visible = true;
        shirt2_pant1.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant1.visible = false;
      }
      if(shirt2_pant2.visible = true){
        shirt2_pant3.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = true;
        shirt2_pant2.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1.visible = false;
        shirt2_pant2.visible = false;
      }
      if(shirt2_pant3.visible = true){
        shirt2_pant2.visible = false;
        shirt2_pant3.visible = false;
        shirt2_pant4.visible = true;
        shirt2_pant1.visible = false;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt1_pant3.visible = false;
        shirt2.visible = false;
      }
      if(shirt2_pant4.visible = true){
        shirt2_pant2.visible = false;
        shirt2_pant3.visible = false;
        shirt2_pant1.visible = false;
        shirt2_pant4.visible = true;
        shirt2_girl.visible = false;
        shirt1_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2.visible = false;
        shirt1_pant4.visible = false;
      }

      if(shirt3_girl.visible = true){
        shirt3_pant3.visible = false;
        shirt3_pant2.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = true;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2_pant1.visible = false;
        shirt3.visible = false;
      }
      if(shirt3_pant1.visible = true){
        shirt3_pant3.visible = false;
        shirt3_pant2.visible = false;
        shirt3_pant4.visible = true;
        shirt3_pant1.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant1.visible = false;
      }
      if(shirt3_pant2.visible = true){
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = true;
        shirt3_pant2.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt1_pant2.visible = false;
      }
      if(shirt2_pant3.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = false;
        shirt3_pant4.visible = true;
        shirt3_pant1.visible = false;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt2_pant3.visible = false;
        shirt3.visible = false;
      }
      if(shirt3_pant4.visible = true){
        shirt3_pant2.visible = false;
        shirt3_pant3.visible = false;
        shirt3_pant1.visible = false;
        shirt3_pant4.visible = true;
        shirt3_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt4_girl.visible = false;
        shirt3.visible = false;
        shirt2_pant4.visible = false;
      }

      if(shirt4_girl.visible = true){
        shirt4_pant3.visible = false;
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = false;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt3_pant1.visible = false;
        shirt4.visible = false;
      }
     /* if(shirt4_pant1.visible = true){
        shirt4_pant3.visible = false;
        shirt4_pant2.visible = false;
        shirt4_pant1.visible = true;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant1.visible = false;
      }
      if(shirt4_pant2.visible = true){
        shirt4_pant3.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant2.visible = true;
        shirt4_pant4.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant2.visible = false;
      }
      if(shirt4_pant3.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant4.visible = false;
        shirt4_pant3.visible = true;
        shirt4_pant1.visible = false;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt3_pant3.visible = false;
        shirt4.visible = false;
      }
      /*if(shirt4_pant4.visible = true){
        shirt4_pant2.visible = false;
        shirt4_pant3.visible = false;
        shirt4_pant1.visible = false;
        shirt4_pant4.visible = true;
        shirt4_girl.visible = false;
        shirt1_girl.visible = false;
        shirt2_girl.visible = false;
        shirt3_girl.visible = false;
        shirt4.visible = false;
        shirt3_pant3.visible = false;
      }*/
    }
if(mousePressedOver(face1)){
      title.visible = false;
      play.
    visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      if(shirt1_girl.visible = true){
        if(mousePressedOver(face1)){
          shirt1_face1.visible = true;
          shirt1_girl.visible = false;
          face1_girl.visible = false;
        }
     }
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true;
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }

    if(mousePressedOver(face2)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }

    if(mousePressedOver(face3)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }

    if(mousePressedOver(face4)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }
    if(mousePressedOver(face5)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }

    if(mousePressedOver(face6)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
    }

    if(mousePressedOver(hair1)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair2)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair3)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair4)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair5)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair6)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }

    if(mousePressedOver(hair7)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible =  false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      pant1.visible = true;
      pant2.visible = true;
      pant3.visible = true;
      pant4.visible = true;
      face1.visible = true; 
      face2.visible = true;
      face3.visible = true;
      face4.visible = true;
      face5.visible = true;
      face6.visible = true;
      hair1.visible = true;
      hair2.visible = true;
      hair3.visible = true;
      hair4.visible = true;
      hair5 .visible = true;
      hair6.visible = true;
      hair7.visible = true;
    }
     

    drawSprites();
}