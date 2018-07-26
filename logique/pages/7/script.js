popupInfo("Celle-ci est censée classer les bras bleus dans le seau “Bras bleus”,\n les bras rouges dans le seau “Bras rouges” et le reste dans le seau “Inutiles”.\n À toi de corriger le programme !",3);

bucketsExercise = {
    elems: [
        new TextShape("Bras bleus", "blue"),
        new TextShape("Bras rouges",  "red"),
        new TextShape("Inutiles",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"arm\" && item.color == \"#0000ff\"",
        "return item.shape == \"arm\" && item.color == \"#ff0000\"",
        "return item.shape == \"hat\" || item.shape == \"arm\"",
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
    items.push({"img_url":"../../assets/img/arm_blue.png"          ,"shape":"arm", "color":"#0000ff"});
    items.push({"img_url":"../../assets/img/arm_black.png"         ,"shape":"arm"});
    items.push({"img_url":"../../assets/img/hat_blue.png"          ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/hat_green.png"         ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/arm_red.png"           ,"shape":"arm", "color":"#ff0000"});
}