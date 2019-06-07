let wid = 700;
let hei = 800;
let col = [];
let or = [];
let used = [];
let num;
let used_ans = [];
let ans;
let or_ans = [];
let State = 0;
let win;
let check = -1;
let score;
let timer;

col = ['red','purple','blue',
       'red','blue','purple',
       'blue','red','purple',
       'blue','purple','red',
       'purple','blue','red',
       'purple','red','blue']

class circle {
    constructor(x,y,ang){
        this.x=x;
        this.y=y;
        this.r=80;
        this.ang = ang;
    }

    display(id){
          fill('yellow');
          arc(this.x,this.y,this.r,this.r,this.ang,this.ang+PI/2);

          fill(col[3*id]);
          arc(this.x,this.y,this.r,this.r,this.ang+PI/2,this.ang+PI);

          fill(col[3*id+1]);
          arc(this.x,this.y,this.r,this.r,this.ang+PI,this.ang+PI+PI/2);

          fill(col[3*id+2]);
          arc(this.x,this.y,this.r,this.r,this.ang+PI+PI/2,this.ang+2*PI);
    }
}

let cir = [];


function setup(){
   createCanvas(wid,hei);
   menu();
   // createMap();
}

function menu(){
    buttonS = createButton('Start');
    buttonS.size(100,50);
    buttonS.position(wid/3+55, 350);
    buttonS.mousePressed(startGame);
    check = -1;
    score = 0;
}

function startGame(){ 
    buttonS.hide();
    createMap();
    State = 1; 
}

function lose(){
    State = 2; // thua
    buttonBM = createButton('Back to menu');
    buttonR = createButton('Play again');

    buttonBM.size(100,50);
    buttonBM.position(wid/3-15, 250);

    buttonR.size(100,50);
    buttonR.position(wid/2+20, 250);  

    buttonBM.mousePressed(goToPage);
    buttonR.mousePressed(playAgain);
}

function goToPage(){
  State = 0;
  menu();
  buttonBM.hide();
  buttonR.hide();
}

function playAgain(){
   State = 1;
   score = 0;
  createMap();
  buttonR.hide();
  buttonBM.hide();
}


function createMap(){
      win = 0;
      if(score<30) timer = 30;
      else if(score<70) timer = 25;
      else if(score<150) timer = 20;
      else timer = 15;

      let k1 = int(random(0,100))*(PI/2),k2=int(random(0,100))*(PI/2);
          cir[0] = new circle(120,150,k1);
          cir[1] = new circle(320,150,k1+PI/2);
          cir[2] = new circle(520,150,k1+PI+PI/2);
          cir[3] = new circle(220,250,k1+2*PI);
          cir[4] = new circle(420,250,k1+PI);

          cir[5] = new circle(120,400,k2+PI);
          cir[6] = new circle(270,400,k2+PI/2);
          cir[7] = new circle(420,400,k2+2*PI);
          cir[8] = new circle(570,400,k2+PI+PI/2);
          // cir[0] = new circle(100,100,0);

      for(let i =0;i<6;i++){
            or[i] = 0;
            used[i] = 0;
            or_ans[i] = 0;
            used_ans[i] = 0;
      }

          num = int(random(0,5));
      while(used[num]){
            num = int(random(0,5)); 
      }
          or[0] = num;
          used[num] = 1;

          num = int(random(0,5));
      while(used[num]){
            num = int(random(0,5)); 
      }
          or[1] = num;
          used[num] = 1;

          num = int(random(0,5));
      while(used[num]){
            num = int(random(0,5)); 
      }
          or[2] = num;
          used[num] = 1;

          num = int(random(0,5));
      while(used[num]){
            num = int(random(0,5)); 
      }
          or[3] = num;
          used[num] = 1;

          num = int(random(0,5));
      while(used[num]){
            num = int(random(0,5)); 
      }
          or[4] = num;
          used[num] = 1; 

      for(let i = 0;i<6;i++){
            if(used[i] == 0){
              or[5] = i;
              used[i] = 1;
            }
      }


          ans = int(random(5,8));

          num = int(random(0,4));
      while(used_ans[num]){
            num = int(random(0,4)); 
      }
          or_ans[0] = num;
          used_ans[num] = 1;

          num = int(random(0,4));
      while(used_ans[num]){
            num = int(random(0,4)); 
      }
          or_ans[1] = num;
          used_ans[num] = 1;

          num = int(random(0,4));
      while(used_ans[num]){
            num = int(random(0,4)); 
      }
          or_ans[2] = num;
          used_ans[num] = 1;

}


function mousePressed(){
    let x = mouseX , y = mouseY;
    if(State==1&&win==0) check++;

    // console.log(int(dist(100,300,x,y)),int(dist(250,300,x,y)),int(dist(400,300,x,y)),int(dist(400,300,x,y)),int(dist(550,300,x,y)))

    if(check > 0 && win==0){
          if(int(dist(120,400,x,y))<40){
          if(ans == 5) win = 1;
          else win = 2;
        }

        else if(int(dist(270,400,x,y))<40){
          if(ans == 6) win = 1;
          else win = 2;
        }

        else if(int(dist(420,400,x,y))<40){
          if(ans == 7) win = 1;
          else win = 2;
        }

        else if (int(dist(570,400,x,y))<40){
          if(ans == 8) win = 1;
          else win = 2;
        }

        else{
          win = 0;
        }

        if(win==1){
          score+=10;
          createMap();
        }
        if(win==2){
          lose();
        }
  }
}

function draw(){
  if(State==0){
    background(196,168,84);

      let tmp = hei/6+5;
      let tmp_wid = 5*wid/38-20;

    fill(255);
    rect(60,40,570,400);

    fill('red'); 
    textSize(30);
    text('PermiuTaysion',wid/3+15,tmp-35);

     textSize(18);
     fill(0);
     text('trong gian hàng trưng bày sản phẩm tại gian hàng của mình, anh ',tmp_wid,tmp); 
     tmp+=30;
     text('thợ gốm Cecil nhận ra có 6 cách để sắp xếp bốn phần tư khác màu ',tmp_wid,tmp);
     tmp+=30; 
     text('nhau trên một chiếc đĩa. Và anh đã sắp xếp chúng thành 5 chiếc đĩa ',tmp_wid,tmp);
     tmp+=30;
     text( 'khác nhau để tạo nên một bộ trưng bày. Anh thợ đưa ra một câu đố ',tmp_wid,tmp);

     tmp+=30;
     text( 'Chiếc đĩa nào là chiếc đĩa còn lại trong bộ trưng bày ? Bạn có đủ ',tmp_wid,tmp);

     tmp+=30;
     text( 'thông minh và nhanh nhẹn để giúp anh thợ trong thời gian ngắn ',tmp_wid,tmp);

     tmp+=30;
     text( 'nhất không?',tmp_wid,tmp);

    fill(80);
       stroke(196,168,84);
       strokeWeight(5);
       rect(wid/3+48,hei/2-57,115,65);
       noStroke();


  }

  else if(State==2){
    background(90,90,90,20);

      if(score<30)
          fill(0);

      else if(score<70)
          fill('blue');

      else if(score<150)
          fill('orange');

      else
          fill('red');

    textSize(40);
    text('Your score:'+score,wid/3-5,hei/4);
  }
  else{
      background(204,155,52);
      for(let i=0;i<5;i++){
        cir[i].display(or[i]);
      }

      if(ans==5){
        cir[5].display(or[5]);
        cir[6].display(or[or_ans[1]]);
        cir[7].display(or[or_ans[2]]);
        cir[8].display(or[or_ans[3]]);
      }

      else if(ans==6){
        cir[6].display(or[5]);
        cir[5].display(or[or_ans[1]]);
        cir[7].display(or[or_ans[2]]);
        cir[8].display(or[or_ans[3]]);

      }

      else if(ans==7){
        cir[7].display(or[5]);
        cir[6].display(or[or_ans[1]]);
        cir[5].display(or[or_ans[2]]);
        cir[8].display(or[or_ans[3]]);
      }

      else{
        cir[8].display(or[5]);
        cir[6].display(or[or_ans[1]]);
        cir[7].display(or[or_ans[2]]);
        cir[5].display(or[or_ans[3]]);
      }

      if (frameCount % 60 == 0 && timer > 0) { 
          timer --;
      }
      if(score<30)
      fill(0);

      else if(score<70)
          fill('blue');

      else if(score<150)
          fill('orange');

      else
          fill('red');

      textSize(30);
      text('Score:'+score,50,50);

      fill('brown');
      textSize(30);

      if(timer<10){
          text('Time:0'+timer, 5*wid/6-25, 50); 
      }
      else
      text('Time:'+timer, 5*wid/6-25, 50);

      if(timer==0){
        lose();
      }

      fill(0);
      textSize(25);
      text('Choose the correct circle to get 10 score',wid/5-18,490);
    }
}