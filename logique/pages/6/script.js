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