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

infoList = [
    "As-tu pensé vérifier si tes commandes étaient bien imbriquer les unes dans les autres, de haut en bas ?",
    "As-tu pensé regarder s’il y a un bloc flottant dans l’interface qui ne fait pas partie de ton code ?",
    "As-tu pensé regarder l’endroit ou Robotino arrête et l’endroit où il regarde lorsque le programme bogue ? Cela t’aidera à trouver où se situe le bogue dans ton code. Exemple : Si Robotino regarde à l’est lorsque le bogue s’est produit, alors le problème devrait se situer dans ton programme où tu indique à Robotino de regarder vers l’est.",
    "As-tu bien respecté toutes les consignes que Robotino t’a donné ? Si tu ne te souviens plus des consignes, appuie sur info ",
    "As-tu pensé consulter l’aide ?",
    "Es-tu certain de bien savoir repérer les parties de code qui se répètent afin de créer te boucles ? Si tu n’es pas certain, retourne faire la progression 5 et 6. Cela t’aidera grandement !",
    "As-tu pensé faire, en premier, un programme sans utiliser de boucle afin de voir les parties de ton programme qui se répète ? Cela t’aidera à trouver les commandes qui doivent faire partie de ta boucle !",
    "Es-tu certain de bien comprendre le fonctionnement d’une boucle ? Va voir la progression 1 si tu n’es pas certain ! "
];
function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();

    createMap();
}