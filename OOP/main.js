let adam = new Human('Adam', true, 60);
let eva = new Human('Eva', false, 66);
let apple = new Apple(1, 'blue');

let infoAdam = document.getElementById('adam');
let infoEva = document.getElementById('eva');
let infoApple = document.getElementById('apple');

showInfo();

function showInfo() {
    infoAdam.innerHTML = adam.say();
    infoEva.innerHTML = eva.say();
    infoApple.innerHTML = "Trong luong tao "+ apple.getWeight();
}

function adamEat() {
    adam.eat(apple);
    showInfo();
}

function evaEat() {
    eva.eat(apple);
    showInfo();
}

// let adam = new Human('Adam', true,60);
// let eva = new Human('Eva',false,50);
// let apple = new Apple(10);

// let infoAdam = document.getElementById('adam');
// let infoEva = document.getElementById('eva');
// let infoApple = document.getElementById('apple');

// showInfo;

// function showInfo (){
// infoAdam.innerHTML = adam.say();
// infoEva.innerHTML = eva.say();
// infoApple.innerHTML = "Trọng lượng táo" + this.getWeight();
// }

// function adamEat (){
//     adam.eat(apple);
//     showInfo();
// }

// function evaEat(){
//     eva.eat(apple);
//     showInfo();
// }









































