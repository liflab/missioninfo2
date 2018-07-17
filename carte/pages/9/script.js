popupInfo("Aide Robotino à se rendre jusqu’à la case verte. \n Utilise la boucle afin de simplifier ton programme ! \n **Attention ! Tu n’as le droit qu’à 9 blocs !**");

page_map = [
    {row: 5, col: 1, data: {style: "deb", type: 1}},
    {row: 5, col: 2, data: {style: "2", type: 3}},
    {row: 4, col: 2, data: {style: "2", type: 1}},
    {row: 4, col: 3, data: {style: "2", type: 2}},
    {row: 5, col: 3, data: {style: "2", type: 0}},
    {row: 5, col: 4, data: {style: "2", type: 3}},
    {row: 4, col: 4, data: {style: "2", type: 1}},
    {row: 4, col: 5, data: {style: "2", type: 2}},
    {row: 5, col: 5, data: {style: "fin", type: 0}},
];

maxBlocks = 9;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}