popupInfo("\nFais avancer Robotino jusqu’à la case verte. \n **Attention ! Tu ne peux utiliser qu’un maximum de 4 blocs.**");

page_map = [
    {row: 5, col: 2, data: {style: "deb", type: 1}},
    {row: 5, col: 3, data: {style: "1", type: 1}},
    {row: 5, col: 4, data: {style: "2", type: 3}},
    {row: 4, col: 4, data: {style: "1", type: 0}},
    {row: 3, col: 4, data: {style: "fin", type: 2}}
];

maxBlocks = 4;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}