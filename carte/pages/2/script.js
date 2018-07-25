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
    "Malheureusement, il y a une erreur ! As-tu pensé à vérifier les consignes ?",
    "As-tu pensé vérifier si tes commandes étaient bien imbriquer les unes dans les autres, de haut en bas ?",
    "As-tu pensé regarder s’il y a un bloc flottant dans l’interface qui ne fait pas partie de ton code ?",
    "As-tu pensé regarder l’endroit ou Robotino arrête et l’endroit où il regarde lorsque le programme bogue ? Cela t’aidera à trouver où se situe le bogue dans ton code. Exemple : Si Robotino regarde à l’est lorsque le bogue s’est produit, alors le problème devrait se situer dans ton programme où tu indique à Robotino de regarder vers l’est.",
    "As-tu bien respecté toutes les consignes que Robotino t’a donné ? Si tu ne te souviens plus des consignes, appuie sur info ",
    "As-tu pensé consulter l’aide ?",
];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}