popupInfo("Maintenant que nous avons classer les corps, les bras et les mains des\n autres objets, nous pouvons rechercher mes bras, mes mains et mon corps.\nJ'ai un corps bleu, des bras oranges et des mains blanches !\n**Utilises les bloc \"ET\"et \"OU\" et un maximum de trois blocs \"si...faire...\" !**",4);

required_box.push({"name":"OU","value":"||"});
required_box.push({"name":"ET","value":"&&"});


bucketsExercise = {
    elems: [
        new TextShape("Bras ou Main", "#ffa500"),
        new TextShape("Corps Bleu",  "#0000ff"),
        new TextShape("Autre Corps", "#c0c0c0"),
    ],
    rules: [
        "return item.shape == \"arm\" || item.shape == \"hand\";",
        "return item.shape == \"body\" && item.color == \"#0000ff\";",
        "return item.shape == \"body\" && item.color != \"#0000ff\";",
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

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/arm.png"             ,"shape":"arm"       ,"color":"#ffa500"});
    items.push({"img_url":"../../assets/img/hand.png"            ,"shape":"hand"      ,"color":"#ffffff"});
    items.push({"img_url":"../../assets/img/body.png"            ,"shape":"body"      ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/body_other.png"      ,"shape":"body"      ,"color":"#c0c0c0"});

}