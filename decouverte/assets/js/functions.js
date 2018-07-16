// Function execute when all things are loaded
function allLoaded() {
    createButtons(7);
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    autoResize();
}

// Functions for blocks coding
function run_code() {
    initAnswer();
    try {
        code = window.Blockly.JavaScript.workspaceToCode(window.Blockly.getMainWorkspace());
        eval(code);
        checkAnswer();
        save_code();
    }
    catch (err) {
        popupNotGood();
        console.log(err);
    }
}

function save_code() {
    try {
        window.Blockly.Storage.backupBlocks(window.Blockly.getMainWorkspace());
    }
    catch (err) {
        console.log("Local Storage not available")
    }
}

function enable_next(info_callback) {
    if(info_callback === 1){
        popupGood(1,"Oh non ! Ma batterie est presque vide ! \n Il faut que je me rende jusqu’à ma recharge. \n Par contre, tu devras me guider en créant un \n programme composé de commandes de déplacement.");
    }
    else if(info_callback == null){
        popupGood();
    }
    document.getElementById("btn_run_prog").style.display = "none";
    document.getElementById("btn_next_exercise").style.display = "block";
    document.getElementById("progress_" + currentPageNumber.toString()).className = "btn btn-success";
}