popupInfo("\nFais avancer Robotino jusqu’à la case verte. \n **Attention ! Tu ne peux utiliser qu’un maximum de 4 blocs.**");

page_map = [
    {row: 4, col: 2, data: {style: "deb", type: 1}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "1", type: 1}},
    {row: 4, col: 6, data: {style: "fin", type: 3}}
];

maxBlocks = 2;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}