const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const reload= document.getElementsByClassName("reload");

let result = 0;
let hitpos;
let currtime = 5;
let countdownId;
let buff= currtime;

function randomSquare() {
    // first we clean the board
    squares.forEach(square => {
        square.classList.remove("mole");
    });
    // Then we add the mole
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitpos = randomSquare.id;
}

function movemole() {
    let timerId = setInterval(randomSquare, 500);
}



//movemole();


// Upon Click Increases the result
squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitpos) {
            result++;
            console.log(result);
            score.innerHTML = "Score is" + result;
            hitpos = 0;
        }
    });
});


function countDown() {
    currtime--;
    buff--;
    if(currtime>0){
    time.innerHTML = "Time left=" + currtime;
    console.log(currtime);
    }
    else{
        score.innerHTML="";
    }
    

    if (currtime == 0) {
        clearInterval(countdownId);
        time.innerHTML = "Time Up! Score is " + result ;
        // Disable movemole function and event listener block
        clearInterval(timerId);
    }
}

countdownId = setInterval(countDown, 1000);
movemole();

reload[0].addEventListener("click",()=>{
    location.reload();
})



