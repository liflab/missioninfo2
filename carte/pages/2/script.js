popupInfo("\n Fais avancer et tourner Robotino jusqu’à la case verte \n à l’aide du bloc \"avancer\" et du bloc \"changer la direction\" !");

page_map = [
    {row: 6, col: 3, data: {style: "deb", type: 0}},
    {row: 5, col: 3, data: {style: "1", type: 0}},
    {row: 4, col: 3, data: {style: "2", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "2", type: 3}},
    {row: 3, col: 5, data: {style: "1", type: 0}},
    {row: 2, col: 5, data: {style: "fin", type: 2}}
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

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}