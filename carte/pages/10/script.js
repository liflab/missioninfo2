popupInfo("Parfois, il ne faut pas tout mettre dans la boucle. \n Parfois, il faut placer des blocs à l'extérieure de la boucle.\n Aide robotino à se rendre jusqu’à la case verte. \n **Attention ! Tu n’as le droit qu’à 6 blocs.**");

page_map = [
    {row: 5, col: 1, data: {style: "deb", type: 1}},
    {row: 5, col: 2, data: {style: "2", type: 2}},
    {row: 6, col: 2, data: {style: "2", type: 0}},
    {row: 6, col: 3, data: {style: "1", type: 1}},
    {row: 6, col: 4, data: {style: "1", type: 1}},
    {row: 6, col: 5, data: {style: "1", type: 1}},
    {row: 6, col: 6, data: {style: "1", type: 1}},
    {row: 6, col: 7, data: {style: "fin", type: 3}},
];

MaxBlocks = 6;

infoList = [
    "As-tu pensé à vérifier les consignes ? Pour les consulter, appuie sur le bouton \"info\" !",
    "As-tu pensé à vérifier si ton programme respecte les demandes de Robotino ?",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demandé de l'aide à une autre équipe ?",
    "As-tu pensé demandé à ton enseignant ?",
];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}