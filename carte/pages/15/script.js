popupInfo("Le but est de récupérer tous les trésors. \n Tu as le droit à autant de blocs que tu veux mais tu dois en utiliser \n le moins possible! Pour cela, tu as de nouveaux blocs! \n A toi de les découvrir.");

page_map = [
    {row: 2, col: 0, data: {style: "deb", type: 1}},
    {row: 2, col: 1, data: {style: "1", type: 1}},
    {row: 2, col: 2, data: {style: "2", type: 2}},
    {row: 3, col: 2, data: {style: "1", type: 0}},
    {row: 4, col: 2, data: {style: "2", type: 0}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "2", type: 2}},
    {row: 5, col: 4, data: {style: "1", type: 0}},
    {row: 6, col: 4, data: {style: "4", type: 0}},
    {row: 6, col: 5, data: {style: "2", type: 3}},
    {row: 5, col: 5, data: {style: "1", type: 0}},
    {row: 4, col: 5, data: {style: "2", type: 1}},
    {row: 4, col: 6, data: {style: "1", type: 1}},
    {row: 4, col: 7, data: {style: "2", type: 2}},
    {row: 5, col: 7, data: {style: "1", type: 0}},
    {row: 6, col: 7, data: {style: "2", type: 0}},
    {row: 6, col: 8, data: {style: "1", type: 1}},
    {row: 6, col: 9, data: {style: "2", type: 2}},
    {row: 7, col: 9, data: {style: "1", type: 0}},
    {row: 8, col: 9, data: {style: "fin", type: 0}},

    {row: 7, col: 4, data: {style: "1", type: 0}},
    {row: 8, col: 4, data: {style: "roche", type: 3}},
    {row: 6, col: 3, data: {style: "1", type: 1}},
    {row: 6, col: 2, data: {style: "roche", type: 0}},

    // {row: 2, col: 6, data: {style: "3", type: 2, treasure: true}},


];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}