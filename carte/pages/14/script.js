popupInfo("Aide Robotino à se rendre jusqu’à l’arrivée ! \n Attention !!! Tu n’as le droit qu’à 9 blocs");

page_map = [
    {row: 7, col: 1, data: {style: "deb", type: 1}},
    {row: 7, col: 2, data: {style: "1", type: 1}},
    {row: 7, col: 3, data: {style: "2", type: 3}},
    {row: 6, col: 3, data: {style: "1", type: 0}},
    {row: 5, col: 3, data: {style: "2", type: 1}},
    {row: 5, col: 4, data: {style: "1", type: 1}},
    {row: 5, col: 5, data: {style: "2", type: 3}},
    {row: 4, col: 5, data: {style: "1", type: 0}},
    {row: 3, col: 5, data: {style: "4"}},
    {row: 3, col: 4, data: {style: "1", type: 1}},
    {row: 3, col: 3, data: {style: "roche", type: 0}},
    {row: 2, col: 5, data: {style: "1", type: 0}},
    {row: 1, col: 5, data: {style: "roche", type: 1}},
    {row: 3, col: 6, data: {style: "1", type: 1}},
    {row: 3, col: 7, data: {style: "1", type: 1}},
    {row: 3, col: 8, data: {style: "1", type: 1}},
    {row: 3, col: 9, data: {style: "fin", type: 3}},


];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}