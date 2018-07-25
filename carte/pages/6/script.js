bootbox.alert({
    message: '<div class="text-center">' + displayInfo("Maintenant, je vais t’apprendre à repérer qu’est-ce \n qui doit être placé dans une boucle. Commence \n par faire cette activité en utilisant seulement \n les blocs \"Avancer\" et \"Changer la direction\".", true) + '</div>',
    size: "xlarge",
    backdrop: true,
    callback: function(){popupInfo("\nFais ce niveau en utilisant seulement les blocs \n de déplacement \"Avancer\" et \"Changer la direction\".",-1,1);}
});

page_map = [
    {row: 8, col: 8, data: {style: "deb", type: 3}},
    {row: 8, col: 7, data: {style: "2", type: 0}},
    {row: 7, col: 7, data: {style: "2", type: 2}},
    {row: 7, col: 6, data: {style: "2", type: 0}},
    {row: 6, col: 6, data: {style: "2", type: 2}},
    {row: 6, col: 5, data: {style: "2", type: 0}},
    {row: 5, col: 5, data: {style: "2", type: 2}},
    {row: 5, col: 4, data: {style: "2", type: 0}},
    {row: 4, col: 4, data: {style: "2", type: 2}},
    {row: 4, col: 3, data: {style: "2", type: 0}},
    {row: 3, col: 3, data: {style: "2", type: 2}},
    {row: 3, col: 2, data: {style: "2", type: 0}},
    {row: 2, col: 2, data: {style: "fin", type: 2}}
];

infoList = [
    "As-tu pensé vérifier si tes commandes étaient bien imbriquer les unes dans les autres, de haut en bas ?",
    "As-tu pensé regarder s’il y à un bloc flottant dans l’interface qui ne fait pas partie de ton code ?",
    "As-tu pensé regarder l’endroit ou Robotino arrête et l’endroit où il regarde lorsque le programme bogue ? Cela t’aidera à trouver où se situe le bogue dans ton code. Exemple : Si Robotino regarde à l’est lorsque le bogue s’est produit, alors le problème devrait se situer dans ton programme où tu indique à Robotino de regarder vers l’est.",
    "As-tu bien respecté toutes les consignes que Robotino t’a donné ? Si tu ne te souviens plus des consignes, appuie sur info ",
    "As-tu pensé consulter l’aide ?",
    "Es-tu certain de bien comprendre le fonctionnement d’une boucle ? Va voir la progression 1 si tu n’es pas certain ! "
];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}