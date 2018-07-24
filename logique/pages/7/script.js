popupInfo("Celle-ci est censée classer les bras bleus dans le seau “bras bleu”,\n les bras rouges dans le seau “bras rouge” et le reste dans le seau “inutile”.\n À toi de corriger le programme !",3);

bucketsExercise = {
    elems: [
        new TextShape("Bras bleu", "blue"),
        new TextShape("Bras rouge",  "red"),
        new TextShape("Inutile",  "#ffffff"),
    ],
    rules: [
        "return item.shape == \"arm\" && item.color == \"blue\"",
        "return item.shape == \"arm\" && item.color == \"red\"",
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
    items.push({"img_url":"../../assets/img/blue_arm.png"          ,"shape":"arm", "color":"blue"});
    items.push({"img_url":"../../assets/img/green_arm.png"         ,"shape":"eye"});
    items.push({"img_url":"../../assets/img/hat_blue.png"          ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/hat_green.png"         ,"shape":"hat"});
    items.push({"img_url":"../../assets/img/red_arm.png"           ,"shape":"tool", "color":"red"});
}