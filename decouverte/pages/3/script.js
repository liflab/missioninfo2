popupInfo("Pour cette étape, nous allons apprendre à supprimer des blocs.\n Tu en auras très probablement besoin si tu te trompes de bloc en créant\ntes programmes. Cherche la poubelle et dépose le bloc dedans!")

// To check the answer
var stringAnswer;

function initAnswer() {
   stringAnswer = "OK";
}

function checkAnswer() {
    if(stringAnswer === "OK") {
        enable_next();
    }
    else {
        not_good();
    }
}

//------------------------------------------------//