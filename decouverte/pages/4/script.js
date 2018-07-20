popupInfo("Pour cette progression, nous allons apprendre à utiliser l'aide. \n L'aide sera toujours disponible si jamais tu es bloqué. Si l'aide ne t'aide \n pas à résoudre ton problème, va demander à un coéquipier ou à ton \nenseignant. Utilise le bouton \"Aide\", en haut à gauche, pour afficher l'aide.")

// To check the answer
var stringAnswer;

function initAnswer() {
   stringAnswer = "";
}

function checkAnswer() {
    if(stringAnswer === "CHIEN") {
        enable_next();
    }
    else {
        not_good();
    }
}

//------------------------------------------------//