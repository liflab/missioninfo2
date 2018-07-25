popupInfo("Pourrais-tu m’aider à corriger le code de cette dernière machine ?\n Celle-ci est censée classer les têtes rouges et vertes dans le seau “têtes”,\n les yeux rouges et verts dans le seau “yeux” et le reste dans le seau “inutile”.\n À toi de corriger ma dernière machine dysfonctionnelle !\n",4);

bucketsExercise = {
    elems: [
        new TextShape("Têtes", "#ffffff"),
        new TextShape("Yeux",  "#ffffff"),
        new TextShape("Inutile",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"head\" && (item.color == \"red\" || item.color == \"green\")",
        "return item.shape == \"eye\" && (item.color == \"red\" || item.color == \"green\")",
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
    items.push({"img_url":"../../assets/img/body1.png"          ,"shape":"body"});
    items.push({"img_url":"../../assets/img/wheel1.png"         ,"shape":"wheel"});
    items.push({"img_url":"../../assets/img/body2.png"          ,"shape":"body"});
    items.push({"img_url":"../../assets/img/wheel2.png"         ,"shape":"wheel"});
}