popupInfo("\n Fais avancer et tourner Robotino, jusqu’à la case verte, \n à l’aide du bloc \"avancer\" et du bloc \"changer la direction\" !");

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
    'Bonjour 1',
    'Bonjour 2',
    'Bonjour 3'
]

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}