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