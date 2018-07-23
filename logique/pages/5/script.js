popupInfo("Maintenant que nous avons classer les corps, les bras et les mains des\n autres objets, nous pouvons rechercher mes bras, mes mains et mon corps.\nJ'ai un corps bleu, des bras oranges et des mains blanches !\n**Utilises les bloc \"ET\"et \"OU\" et un maximum de trois blocs \"si...faire...\" !**",4);

required_box.push({"name":"OU","value":"||"});
required_box.push({"name":"ET","value":"&&"});


bucketsExercise = {
    elems: [
        new TextShape("Bras ou Main", "#ffa500"),
        new TextShape("Corps Bleu",  "#0000ff"),
        new TextShape("Autre Corps", "#c0c0c0"),
    ],
    rules: [
        "return item.shape == \"arm\" || item.shape == \"hand\";",
        "return item.shape == \"body\" && item.color == \"#0000ff\";",
        "return item.shape == \"body\" && item.color != \"#0000ff\";",
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
    items.push({"img_url":"../../assets/img/arm.png"             ,"shape":"arm"       ,"color":"#ffa500"});
    items.push({"img_url":"../../assets/img/hand.png"            ,"shape":"hand"      ,"color":"#ffffff"});
    items.push({"img_url":"../../assets/img/body.png"            ,"shape":"body"      ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/body_other.png"      ,"shape":"body"      ,"color":"#c0c0c0"});

}