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

    "As-tu pensé regarder si tu respectes les consignes que Robotino t’as donné ? Si tu ne t’en souviens plus, va voir dans info !",
    "As-tu bien pris connaissance de toutes les conditions disponibles (exemple : forme = bras, roue, jambe; Couleur = rouge, bleu, vert) ? ",
    "As-tu bien pris connaissance des objets disponibles et des seaux dans lesquelles les objets doivent être classées ? Appuie sur info si tu ne t’en souviens plus !",
    "As-tu pensé à consulter l'aide ? Pour consulter l'aide, appuie sur le bouton \"aide\" !",
    "As-tu pensé regarder si l’objet qui cause le bogue n’est pas classé du tout où s’il est classé dans le mauvais seau ? Cela t’aidera à trouver la solution au bogue.",
    "As-tu vérifier chacun de tes blocs pour être certain qu'ils respectent un ordre logique ?",
    "As-tu pensé vérifier si ton programme permet de résoudre le problème ?",
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