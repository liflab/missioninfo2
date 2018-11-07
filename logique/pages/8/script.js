popupInfo("Maintenant que nous avons classé les corps, les bras et les mains des\n autres objets, nous pouvons rechercher mes bras, mes mains et mon corps.\nJ'ai un corps bleu, des bras oranges et des mains blanches !\n**Utilises les bloc \"ET\"et \"OU\" et un maximum de trois blocs \"si...faire...\" !**",4);

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

    "As-tu pensé regarder si tu respectes les consignes que Robotino t’as donné ? Si tu ne t’en souviens plus, va voir dans info !",
    "As-tu bien pris connaissance de toutes les conditions disponibles (exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
    "As-tu pensé demander de l'aide à une autre équipe ?",
    "As-tu pensé demander à ton enseignant ?",
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