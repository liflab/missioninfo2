popupInfo("J’aimerais que tu essaies de corriger 2 machines de tri qui ne fonctionnent\n pas. Commence par celle-ci. Elle est censée classer les fusées rouges dans\n le seau “fusée rouge”, les yeux dans le seau “yeux” et le reste dans\n le seau “inutile”. À toi de corriger le programme !");

bucketsExercise = {
    elems: [
        new TextShape("Fusées Rouges", "#ff0000"),
        new TextShape("Yeux",  "#ffffff"),
        new TextShape("Inutiles",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"rocket\" && item.color == \"#ff0000\"",
        "return item.shape == \"eye\"",
        "return item.shape == \"rocket\" || item.shape == \"tool\"",
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
    items.push({"img_url":"../../assets/img/prop.png"          ,"shape":"rocket", "color":"#ff0000"});
    items.push({"img_url":"../../assets/img/eye.png"           ,"shape":"eye"});
    items.push({"img_url":"../../assets/img/bluerocket.png"    ,"shape":"rocket"});
    items.push({"img_url":"../../assets/img/eye_green.png"     ,"shape":"eye"});
    items.push({"img_url":"../../assets/img/screwdriver.png"   ,"shape":"tool"});
    items.push({"img_url":"../../assets/img/wrench.png"        ,"shape":"tool"});
}