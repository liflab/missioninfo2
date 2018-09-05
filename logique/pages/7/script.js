popupInfo("Celle-ci est censée classer le bras bleu dans le seau “Bras bleu”,\n le bras rouge dans le seau “Bras rouge” et le reste dans le seau “Inutiles”.\n À toi de corriger le programme !",3);

bucketsExercise = {
    elems: [
        new TextShape("Bras bleu", "blue"),
        new TextShape("Bras rouge",  "red"),
        new TextShape("Inutiles",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"arm\" && item.color == \"#0000ff\"",
        "return item.shape == \"arm\" && item.color == \"#ff0000\"",
        "return item.shape == \"hat\" || item.shape == \"arm\"",
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
    items.push({"img_url":"../../assets/img/arm_blue.png"          ,"shape":"arm", "color":"#0000ff"});
    items.push({"img_url":"../../assets/img/arm_black.png"         ,"shape":"arm"});
    items.push({"img_url":"../../assets/img/hat_blue.png"          ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/hat_green.png"         ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/arm_red.png"           ,"shape":"arm", "color":"#ff0000"});
}