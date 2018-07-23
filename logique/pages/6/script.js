popupInfo("Je suis quasiment entier, il ne me manque plus que de quoi me déplacer !\nTrouve ma fusée et ma roue ! De plus, j'ai commencé une collection\nde chapeaux. J'ai déjà un bleu, peux-tu me prendre les autres ?\n**Utilise obligatoirement les blocs \"PAS\", \"OU\" et \"ET\"**",4);

required_box.push({"name":"PAS","value":"!("});
required_box.push({"name":"OU","value":"||"});


bucketsExercise = {
    elems: [
        new TextShape("Roue ou Fusée", "#c0c0c0"),
        new TextShape("Collection",  "#ffffff"),
        new TextShape("Inutile", "#ffffff"),
    ],
    rules: [
        "return item.shape == \"wheel\" || item.shape == \"prop\";",
        "return item.shape == \"hat\" && item.color != \"#0000ff\";",
        "return item.shape == \"hat\" && item.color == \"#0000ff\";",
    ]
};

infoList =[

    "As-tu pensé regarder si tu respecte les conditions que Robotino t’as donné ? Des fois, il te donne un maximum de bloc si...faire… et des opérateurs que tu dois obligatoirement utiliser dans ton programme ! Regarde l’info si tu ne te rappelle plus des conditions !", // progression 4 et plus
    "As-tu bien pris connaissance de toutes les conditions disponibles?(exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert)",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "Regarde bien chacun de tes bloc si...faire... et regarde, pour chaque objet, dans quelle bloc si...faire… ils seront classés. Cela t’aidera à trouver où se situe le bogue dans ton programme.",
    "As-tu pensé regarder si chacun des objets disponibles respectent au moins une condition des blocs si...faire… qui sont dans ton programme ?",
    "As-tu pensé créer les conditions pour classer les objets de Robotino dans le(s) premier(s) bloc(s) si...faire de ton programme ? Cela t’aidera à bien structurer ton programme !",
    "Si ton objet qui à causé le bogue est classé dans le mauvais seau, va voir dans le bloc si...faire… qui contient ce seau afin de trouver ton bogue !",

];

logicExercise = new LogicSystem(bucketsExercise);

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/wheel.png"             ,"shape":"wheel"       ,"color":"#c0c0c0"});
    items.push({"img_url":"../../assets/img/prop.png"              ,"shape":"prop"        ,"color":"#c0c0c0"});
    items.push({"img_url":"../../assets/img/hat_blue.svg"          ,"shape":"hat"         ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/hat_red.png"           ,"shape":"hat"         ,"color":"#ff0000"});
    items.push({"img_url":"../../assets/img/hat_graduation.png"    ,"shape":"hat"         ,"color":"#000000"});
    items.push({"img_url":"../../assets/img/hat_green.png"         ,"shape":"hat"         ,"color":"#00ff00"});
    items.push({"img_url":"../../assets/img/hat_orange.png"        ,"shape":"hat"         ,"color":"#ffa500"});

}