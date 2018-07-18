popupInfo("Ici, tu dois utiliser les deux boucles afin \n d’aider Robotino à se rendre jusqu’à l’arrivée ! \n Attention !!! Tu n’as le droit qu’à 7 blocs ! ");

page_map = [
    {row: 4, col: 1, data: {style: "deb", type: 1}},
    {row: 4, col: 2, data: {style: "1", type: 1}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "1", type: 1}},
    {row: 4, col: 6, data: {style: "4"}},
    {row: 3, col: 6, data: {style: "1", type: 0}},
    {row: 2, col: 6, data: {style: "1", type: 0}},
    {row: 1, col: 6, data: {style: "roche", type: 1}},
    {row: 5, col: 6, data: {style: "1", type: 0}},
    {row: 6, col: 6, data: {style: "1", type: 0}},
    {row: 7, col: 6, data: {style: "roche", type: 3}},
    {row: 4, col: 7, data: {style: "2", type: 2}},
    {row: 5, col: 7, data: {style: "2", type: 0}},
    {row: 5, col: 8, data: {style: "2", type: 2}},
    {row: 6, col: 8, data: {style: "2", type: 0}},
    {row: 6, col: 9, data: {style: "2", type: 2}},
    {row: 7, col: 9, data: {style: "fin", type: 0}},
];

maxBlocks = 7;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}