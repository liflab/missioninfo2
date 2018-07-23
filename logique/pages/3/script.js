popupInfo("Commençons par mon début ! Ma tête !\nTrions les quatre têtes que tu as triés tout à l'heure.\nLa mienne est bleue et arrondie !\n**Utilise le bloc \"ET\" et un maximum de 4 blocs \"Si...Faire...\"!**",4);

required_box.push({"name":"ET","value":"&&"});

bucketsExercise = {
    elems: [
        new TextShape("Bleu arrondi", "#2223ff"),
        new TextShape("Bleu oval", "#2223ff"),
        new TextShape("Gris", "#eeeeee"),
        new TextShape("Beige", "#e0ac69"),
    ],
    rules: [
        "return item.shape == \"rounded\" && item.color == \"#2223ff\";",
        "return item.shape == \"oval\" && item.color == \"#2223ff\";",
        "return item.shape == \"rounded\";",
        "return item.color == \"#e0ac69\";"
    ]
};
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
logicExercise = new LogicSystem(bucketsExercise);
maxBlocks = 4;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/head.png"        ,"shape":"rounded"   ,"color":"#2223ff"});
    items.push({"img_url":"../../assets/img/helmet_r2d2.png" ,"shape":"rounded"   ,"color":"#aaaaaa"});
    items.push({"img_url":"../../assets/img/human_head.png"  ,"shape":"oval"      ,"color":"#e0ac69"});
    items.push({"img_url":"../../assets/img/cylon_head.png", "shape":"oval", "color":"#2223ff"});
}