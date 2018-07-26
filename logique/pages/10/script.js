popupInfo("Je suis quasiment entier, il ne me manque plus que de quoi me déplacer !\nTrouve ma fusée et ma roue ! De plus, j'ai commencé une collection\nde chapeaux. J'ai déjà un bleu, peux-tu me prendre les autres ?\n**Utilise les blocs \"PAS\", \"OU\" et \"ET\" et maximum trois blocs \"si...faire...\"**",4);

required_box.push({"name":"PAS","value":"!("});
required_box.push({"name":"OU","value":"||"});
required_box.push({"name":"ET","value":"&&"});


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

logicExercise = new LogicSystem(bucketsExercise);

infoList =[

    "As-tu pensé regarder si tu respectes les consignes que Robotino t’as donné ? Si tu ne t’en souviens plus, va voir dans info !",
    "As-tu bien pris connaissance de toutes les conditions disponibles (exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demandé de l'aide à une autre équipe ?",
    "As-tu pensé demandé à ton enseignant ?",
];

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