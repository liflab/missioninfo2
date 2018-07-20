popupInfo("Enfin! Tu peux créer un programme qui va afficher du texte. \n Celui-ci va simplement afficher ce que tu as écrit dans le bloc.\n Pour cela, tu devras connecter le bloc AFFICHER au bloc de texte (vert) \n et écrire du texte dans ce dernier.")

// To check the answer
var stringAnswer;
var blocksOK;

function initAnswer() {
   stringAnswer = "";
   blocksOK = false;
}

function addText(stringToAdd) {
    if (!(stringToAdd === "")) {
        blocksOK = true;
    }
    stringAnswer += stringToAdd + '<br>';
}

function checkAnswer() {
    if (blocksOK) {
        bootbox.alert({
        message: '<div class="text-center"><p>Voici le texte que tu as affiché :</p><h3>'+ stringAnswer +'</h3></div>',
        backdrop: true,
        callback: function(){ enable_next(1); }
    });
    }
    else {
        not_good();
    }
}

//------------------------------------------------//