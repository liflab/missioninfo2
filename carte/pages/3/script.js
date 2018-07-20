popupInfo("Fais avancer Robotino jusqu’à la case verte \n en utilisant le nouveau bloc : la boucle. \n **Attention, tu n’as le droit d’utiliser que deux blocs.**");

page_map = [
    {row: 4, col: 2, data: {style: "deb", type: 1}},
    {row: 4, col: 3, data: {style: "1", type: 1}},
    {row: 4, col: 4, data: {style: "1", type: 1}},
    {row: 4, col: 5, data: {style: "1", type: 1}},
    {row: 4, col: 6, data: {style: "fin", type: 3}}
];

infoList = [
    "As-tu pensé vérifier si tes commandes étaient bien imbriquer les unes dans les autres, de haut en bas ?",
    "As-tu pensé regarder s’il y a un bloc flottant dans l’interface qui ne fait pas partie de ton code ?",
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