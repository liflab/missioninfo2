popupInfo("\nFais avancer et tourner Robotino, à l’aide  du bloc “avancer” \n et du bloc “changer la direction”, afin qu’il atteigne sa recharge.");

page_map = [
    {row: 3, col: 2, data: {style: "deb", type: 1}},
    {row: 3, col: 3, data: {style: "1", type: 1}},
    {row: 3, col: 4, data: {style: "1", type: 1}},
    {row: 3, col: 5, data: {style: "2", type: 2}},
    {row: 4, col: 5, data: {style: "1", type: 0}},
    {row: 5, col: 5, data: {style: "2", type: 0}},
    {row: 5, col: 6, data: {style: "1", type: 1}},
    {row: 5, col: 7, data: {style: "fin", type: 3, treasure: true}}
];

infoList = [
    "As-tu pensé à vérifier les consignes ? Pour les consulter, appuie sur le bouton \"info\" !",
    "As-tu pensé à vérifier si ton programme respecte les demandes de Robotino ?",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demander de l'aide à une autre équipe ?",
    "As-tu pensé demander à ton enseignant ?",
];

function allLoaded() { // À modifier en fonction du nombre de progressions dans l'activité (ajouté 2018-07-1)
    createButtons(9);
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
    autoResize();
}

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}