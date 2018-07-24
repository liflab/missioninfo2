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