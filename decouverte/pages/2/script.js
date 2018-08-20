popupInfo("Ici, nous allons apprendre à assembler des blocs afin de créer un\n programme. Pour ce faire, utilise les deux blocs disponibles.\n Fais attention ! Les blocs doivent être placés dans un certain ordre.");

// To check the answer
var stringAnswer;

function initAnswer() {
   stringAnswer = "";
}

function checkAnswer() {
    // Trick to verify if blocks are attach together
    if (stringAnswer === "OK" && Blockly.getMainWorkspace().getAllBlocks()[0].childBlocks_[0] !== undefined) {
        enable_next();
    }
    else {
        not_good();
    }
}

//------------------------------------------------//