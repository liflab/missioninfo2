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