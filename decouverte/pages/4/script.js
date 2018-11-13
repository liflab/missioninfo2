popupInfo("Pour cette progression, nous allons apprendre à utiliser l'aide. \n L'aide sera toujours disponible si jamais tu es bloqué. Si l'aide ne t'aide \n pas à résoudre ton problème, va demander à un coéquipier ou à ton \nenseignant. Utilise le bouton \"Aide\", en haut à gauche, pour afficher l'aide.")
// To check the answer
var stringAnswer;

function initAnswer() {
   stringAnswer = "";
}

function checkAnswer() {
    if(stringAnswer === "CHIEN" && compteura === 1) {
        enable_next();
    }
    else if (compteura === 0) {
        popupNotGood("Il semblerait que tu n'aies pas ouvert l'aide ! Appuie sur le bouton Aide situé en haut à gauche de la page, à droite du bouton Accueil.");
    }
    else {
        not_good();
    }
}

//------------------------------------------------//