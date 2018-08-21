popupInfo("Fais avancer Robotino jusqu’à la case verte \n en utilisant le nouveau bloc : la boucle. \n **Attention, tu n’as le droit d’utiliser que deux blocs.**");

page_map = [
    {row: 4, col: 2, data: {style: "deb", type: 1}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "1", type: 1}},
    {row: 4, col: 6, data: {style: "fin", type: 3}}
];
Maxblock =2;
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