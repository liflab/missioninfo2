popupInfo("J'ai ma tête, mais je n'ai pas encore de corps ! Le problème, c’est que \n les bras, les mains et les corps sont mélangés avec plein d’objets inutiles.\nCommence par trier les bras, les mains et les corps des autres objets.\n **Utilise le bloc \"OU\" et un maximum de 3 blocs \"Si...Faire...\"!**", 4);

required_box.push({"name":"OU","value":"||"});

bucketsExercise = {
    elems: [
        new TextShape("Bras ou Main", "#ffffff"),
        new TextShape("Corps", "#ffffff"),
        new TextShape("Inutile", "#ffffff"),
    ],
    rules: [
        "return item.shape == \"arm\" || item.shape == \"hand\";",
        "return item.shape == \"body\";",
        "return item.shape == \"tool\" || item.shape == \"cable\";",
    ]
};

infoList =[

    "As-tu pensé regarder si tu respecte les conditions que Robotino t’as donné ? Des fois, il te donne un maximum de bloc si...faire… et des opérateurs que tu dois obligatoirement utiliser dans ton programme ! Regarde l’info si tu ne te rappelle plus des conditions !", // progression 4 et plus
    "As-tu bien pris connaissance de toutes les conditions disponibles \n(exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "Regarde bien chacun de tes bloc si...faire... et regarde, pour chaque objet, dans quelle bloc si...faire… ils seront classés. Cela t’aidera à trouver où se situe le bogue dans ton programme.",
    "As-tu pensé regarder si chacun des objets disponibles respectent au moins une condition des blocs si...faire… qui sont dans ton programme ?",
    "As-tu pensé créer les conditions pour classer les objets de Robotino dans le(s) premier(s) bloc(s) si...faire de ton programme ? Cela t’aidera à bien structurer ton programme !",
    "Si ton objet qui à causé le bogue est classé dans le mauvais seau, va voir dans le bloc si...faire… qui contient ce seau afin de trouver ton bogue !",

];
logicExercise = new LogicSystem(bucketsExercise);
maxBlocks = 3;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/arm.png"             ,"shape":"arm"       ,"color":"#ffa500"});
    items.push({"img_url":"../../assets/img/electric.png"        ,"shape":"cable"   ,"color":"#2223ff"});
    items.push({"img_url":"../../assets/img/hand.png"            ,"shape":"hand"      ,"color":"#ffffff"});
    items.push({"img_url":"../../assets/img/screwdriver.png"     ,"shape":"tool"   ,"color":"#aaaaaa"});
    items.push({"img_url":"../../assets/img/body.png"            ,"shape":"body"      ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/cable.png"           ,"shape":"cable"      ,"color":"#e0ac69"});
    items.push({"img_url":"../../assets/img/body_other.png"      ,"shape":"body"      ,"color":"#c0c0c0"});
    items.push({"img_url":"../../assets/img/wrench.png"          ,"shape":"tool"     ,"color":"#2223ff"});
}