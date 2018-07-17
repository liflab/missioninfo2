popupInfo("Parfois, il ne faut pas tout mettre dans le bloc vert !!! \n Aide robotino à se rendre jusqu’à la case verte. \n **Attention ! Tu n’as le droit qu’à 5 blocs.**");

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

maxBlocks = 6;
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}