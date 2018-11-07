popupInfo("Pourrais-tu m’aider à corriger le code de cette dernière machine ?\n Elle est censée classer les têtes rouges et vertes dans le seau “Têtes”, les\n yeux rouges et verts dans le seau “Yeux” et le reste dans le seau “Inutiles”.\n À toi de corriger ma dernière machine dysfonctionnelle !\n",4);

bucketsExercise = {
    elems: [
        new TextShape("Têtes", "#ffffff"),
        new TextShape("Yeux",  "#ffffff"),
        new TextShape("Inutiles",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"head\" && (item.color == \"#ff0000\" || item.color == \"#008000\")",
        "return item.shape == \"eye\" && (item.color == \"#ff0000\" || item.color == \"#008000\")",
        "return item.shape == \"eye\" || item.shape == \"head\"",
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
    "As-tu pensé demander de l'aide à une autre équipe ?",
    "As-tu pensé demander à ton enseignant ?",
];

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/head_green.png"        ,"shape":"head"     , "color":"#008000"});
    items.push({"img_url":"../../assets/img/head_pink.png"         ,"shape":"head"});
    items.push({"img_url":"../../assets/img/eye_purple.png"        ,"shape":"eye"});
    items.push({"img_url":"../../assets/img/eye_grey.png"          ,"shape":"eye"});
    items.push({"img_url":"../../assets/img/eye_green.png"         ,"shape":"eye"      , "color":"#008000"});
    items.push({"img_url":"../../assets/img/eye_red.png"           ,"shape":"eye"      , "color":"#ff0000"});
    items.push({"img_url":"../../assets/img/head_red.png"          ,"shape":"head"     , "color":"#ff0000"});
}