//arr
let arr = ["apple","mango","litchi"]
//2d arr
let arr2 = [["apple","mango"],["potato","mushroom"],["pants","shirts"]]
//acessing 2d arr

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turn0 = true;//playerX, playerY


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let i = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked")
        if(turn0){ //player0
            box.innerText = "O",
            turn0 = false;
        }else{ //playerX
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true;
        checkWinner();
        i++
        // if( i == 9){
        //     for(box of boxes){
        //         box.disabled = false;
        //         box.innerText = "";
        //     }
        // }
    })
})

const resetGame = () =>{
    trun0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disalbeBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disalbeBoxes()
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if( pos1Val != "" && pos2Val != "" &&pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner")
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame)






