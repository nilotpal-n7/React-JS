let count = 0;
let turnO = true;
let winner = false;
let reset = document.querySelector(".rstBtn");
let game = document.querySelector(".game");
let msg = document.querySelector("#msg")

for(let i=0; i<9; i++){
    let btn = document.createElement("button");
    btn.setAttribute("class", "box");
    game.append(btn);
};
let boxes = document.querySelectorAll(".box");

const winPtrns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function checkWinner() {
    for(let ptrn of winPtrns) {
        let ptrn0 = boxes[ptrn[0]].innerText;
        let ptrn1 = boxes[ptrn[1]].innerText;
        let ptrn2 = boxes[ptrn[2]].innerText;

        if((ptrn0 != "") && (ptrn1 != "") && (ptrn2 != "")) {
            if((ptrn0 == ptrn1) && (ptrn1 == ptrn2)) {
                boxes.forEach((box) => box.disabled = true);
                msg.innerText = `Winner is ${ptrn0}!🥳`;
                winner = true;
            };
        };
    };

    if((count == 9) && (winner == false)) {
        msg.innerText = `It's a Draw!😎`;
    };
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO) {
            box.innerText = "O";
            turnO = false;
            msg.innerText = "X Turn";
        }
        else {
            box.innerText = "X";
            turnO = true;
            msg.innerText = "O Turn";
        };
        
        count += 1;
        box.disabled = true;
        checkWinner();
    });
});

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        count = 0;
        turnO = true;
        winner = false;
        box.disabled = false;
        box.innerText = "";
    });

    msg.innerText = "O Turn";
});