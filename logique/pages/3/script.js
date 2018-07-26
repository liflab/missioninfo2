popupInfo("J’aimerais que tu essaies de corriger cette machine ! Le code\n est déjà écrit à l’écran, mais il ne fonctionne pas. Il est censé\n classer les roues dans le seau “roues” et les corps dans le seau “corps”.\n Corrige-le s’il-te-plaît !",4);

bucketsExercise = {
    elems: [
        new TextShape("Roue", "#ffffff"),
        new TextShape("Corps",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"wheel\"",
        "return item.shape == \"body\"",
    ]
};

logicExercise = new LogicSystem(bucketsExercise);

infoList =[

    "As-tu pensé regarder si tu respecte la limite de bloc si...faire… que Robotino t’as donné ? Si tu ne t’en souviens plus, va voir dans info !",
    "As-tu bien pris connaissance de toutes les conditions disponibles \n(exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "Regarde bien chacun de tes bloc si...faire... et regarde, pour chaque objet, dans quelle bloc si...faire… ils seront classés. Cela t’aidera à trouver où se situe le bogue dans ton programme.",
    "As-tu pensé regarder si chacun des objets disponibles respectent au moins une condition des blocs si...faire… qui sont dans ton programme ?",
    "As-tu pensé créer les conditions pour classer les objets de Robotino dans le(s) premier(s) bloc(s) si...faire de ton programme ? Cela t’aidera à bien structurer ton programme !",
    "Si ton objet qui à causé le bogue est classé dans le mauvais seau, va voir dans le bloc si...faire… qui contient ce seau afin de trouver ton bogue !",

];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/body1.png"          ,"shape":"body"});
    items.push({"img_url":"../../assets/img/wheel1.png"         ,"shape":"wheel"});
    items.push({"img_url":"../../assets/img/body2.png"          ,"shape":"body"});
    items.push({"img_url":"../../assets/img/wheel2.png"         ,"shape":"wheel"});
}