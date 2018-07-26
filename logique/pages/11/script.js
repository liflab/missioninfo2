popupInfo("Pourrais-tu m’aider à corriger le code de cette dernière machine ?\n Celle-ci est censée classer les têtes rouges et vertes dans le seau “Têtes”,\n les yeux rouges et verts dans le seau “Yeux” et le reste dans le seau “Inutiles”.\n À toi de corriger ma dernière machine dysfonctionnelle !\n",4);

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