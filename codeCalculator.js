
const allDiv = document.querySelectorAll("div");
const nav = document.querySelector("nav")
let count = 0;
const WINNING_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let arrX = [];
let arrO = [];

for (let div of allDiv) {
    div.addEventListener('click', function (e) {
        count++; 
        if (count % 2 == 1) {
            let i = document.createElement("i");
            this.append(i);
            i.classList.add("fa-solid", "fa-xmark");
            arrX.push(parseInt(div.id));
            checkWin(arrX, "X");
        } else {
            let i = document.createElement("i");
            this.append(i);
            i.classList.add("fa-solid", "fa-o");
            arrO.push(parseInt(div.id));
            checkWin(arrO, "O");
        }
        if (count == 9 && !nav.classList.contains("whenWin")) { console.log("draw"); }
    }, { once: true })

}

function checkWin(arr, player) {
    for (let combination of WINNING_COMBINATIONS) {
        let match = 0;
        let sel = [];
        for (let num of arr) {
            if (combination.includes(num)) {
                match++
                sel.push(num)
            }
            if (match == 3) {
                console.log(`${player} wins`);
                for (num of sel) {
                    allDiv[num].classList.add("winner")
                }
                nav.classList.add("whenWin");
                document.body.style.boxShadow = "inset 0px 0 200px rgba(255, 0, 255, 0.579)";
                return;
            }
        }
    }
}























