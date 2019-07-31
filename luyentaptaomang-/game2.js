let canvas = document.getElementById("game");
let context = canvas.getContext('2d');

let ball = {
    x:15,
    y:15,
    dx :5,
    dy :3,
    radius : 15,
    score: 0,
};
//thanh chắn
let bars = {
    width: 100,
    height: 20,
    x:0,
    y: canvas.height - 20,
    speed: 10,
    isMovingLeft: false,
    isMovingRight:false,
}

let isGameOver = false;
document.addEventListener('keyup',function(event){
    console.log('KEYUP')
    console.log(event);
    if(event.keyCode == 37){
        bars.isMovingLeft = false;
    }else if(event.keyCode == 39){
        bars.isMovingRight = false;
    }
});

document.addEventListener('keydown',function(event){
    console.log('KEYDOWN')
    console.log(event);
    if(event.keyCode == 37){
        bars.isMovingLeft = true;
    }else if(event.keyCode == 39){
        bars.isMovingRight = true;
    }
});
//vẽ banh
function drawBall(){
    context.beginPath();
    context.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
    context.fillStyle = 'green';
    context.fill();
    context.closePath();
}
//vẽ thanh chắn
function drawBars(){
    context.beginPath();
    context.rect(bars.x,bars.y,bars.width,bars.height);
    context.fill();
    context.closePath();
}
function drawScore() {
    context.beginPath();
    context.font = "20px Georgia";
    context.fillStyle = 'red'
    context.fillText("score: " + ball.score, 20, 20);
    context.closePath();
}
function drawgameover(){
  var img = document.getElementById("img");
  context.drawImage(img, 25, 50);
}

    

// xử lý bóng chạm biên !
function Ballbordercollisionhandling(){
    if(ball.x < ball.radius || ball.x > canvas.width -ball.radius){
        ball.dx = -ball.dx;
    }
    if(ball.y < ball.radius || ball.y >canvas.height -ball.radius){
        ball.dy = -ball.dy;
    }
}
//sử lý va chạm biên giới của thanh chắn!
 function Barsbordercollisionhandling(){
     if(ball.x +ball.radius >= bars.x && ball.x + ball.radius <= bars.x + bars.width && 
        ball.y + ball.radius >= canvas.height - bars.height ){
            ball.dy = -ball.dy;
            ball.score ++;
            
                
            
        }
 }

//tọa độ!
function positionBall(){
    ball.x +=ball.dx;
    ball.y +=ball.dy;
}
//xư lý đường biên thanh chắn!
function borderprocessing(){
    if(bars.isMovingLeft){
        bars.x -= bars.speed;
    }else if(bars.isMovingRight){
        bars.x += bars.speed;
    }
    
    if(bars.x < 0){
        bars.x = 0;
    }else if(bars.x > canvas.width - bars.width){
        bars.x = canvas.width -bars.width;
    }
}
//kiểm tra games over!
    function checkGameOver(){
        if(ball.y > canvas.height - ball.radius){
            isGameOver = true;
        }
    }

    function handleGameOver(){
        context.clearRect(0,0,canvas.width,canvas.height); 
        drawgameover();
    }
function draw(){
    if(!isGameOver){
    context.clearRect(0,0,canvas.width,canvas.height); 
        drawBall();
        drawBars();
        drawScore();
       
        Ballbordercollisionhandling();
        Barsbordercollisionhandling();
        positionBall();
        
        borderprocessing();

        checkGameOver()
    
//cải thiện độ giật của quả bóng!!
        requestAnimationFrame(draw);
}else{
         handleGameOver();
}
}
draw();
    function startGame() {
          location.reload();
}
































