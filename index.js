let score1 = 0;
let score2 = 0;
let team1Sc = document.getElementById("team1Sc")
let team2Sc = document.getElementById("team2Sc")
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")

function checkwin() {
    if (score1 > score2) {
        c1.classList.remove("lose")
        c1.classList.add("win")
        c2.classList.remove("win")
        c2.classList.add("lose")
    }
    else if (score2 > score1) {
        c2.classList.remove("lose")
        c2.classList.add("win")
        c1.classList.remove("win")
        c1.classList.add("lose")
    }
    else if (score1 == score2 == 0) {
        c1.classList.remove("lose")
        c2.classList.remove("lose")
        c1.classList.add("win")
        c2.classList.add("win")
    }
    else {
        c1.classList.remove("lose")
        c2.classList.remove("lose")
        c1.classList.add("win")
        c2.classList.add("win")
    }
}

function incOneT1() {
    score1++
    team1Sc.textContent = score1;
    checkwin()
}

function incTwoT1() {
    score1+=2
    team1Sc.textContent = score1;
    checkwin()
}

function incThreeT1() {
    score1+=3
    team1Sc.textContent = score1;
    checkwin()
}

function incOneT2() {
    score2++
    team2Sc.textContent = score2;
    checkwin()
}

function incTwoT2() {
    score2+=2
    team2Sc.textContent = score2;
    checkwin()
}

function incThreeT2() {
    score2+=3
    team2Sc.textContent = score2;
    checkwin()
}

function reset() {
    score1 = 0
    score2 = 0
    team1Sc.textContent = score1;
    team2Sc.textContent = score2;
    checkwin()
}