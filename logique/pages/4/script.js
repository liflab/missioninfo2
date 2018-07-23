popupInfo("J'ai ma tête, mais je n'ai pas encore de corps ! Le problème, c’est que \n les bras, les mains et les corps sont mélangés avec plein d’objets inutiles.\nCommence par trier les bras, les mains et les corps des autres objets.\n **Utilise le bloc \"OU\" et un maximum de 3 blocs \"Si...Faire...\"!**", 4);

required_box.push({"name":"OU","value":"||"});

bucketsExercise = {
    elems: [
        new TextShape("Bras ou Main", "#ffffff"),
        new TextShape("Corps", "#ffffff"),
        new TextShape("Inutile", "#ffffff"),
    ],
    rules: [
        "return item.shape == \"arm\" || item.shape == \"hand\";",
        "return item.shape == \"body\";",
        "return item.shape == \"tool\" || item.shape == \"cable\";",
    ]
};

logicExercise = new LogicSystem(bucketsExercise);
maxBlocks = 3;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder');
    noLoop();
    initParams();

    logicExercise.draw(-1);
}

function _preload(){
    items.push({"img_url":"../../assets/img/arm.png"             ,"shape":"arm"       ,"color":"#ffa500"});
    items.push({"img_url":"../../assets/img/electric.png"        ,"shape":"cable"   ,"color":"#2223ff"});
    items.push({"img_url":"../../assets/img/hand.png"            ,"shape":"hand"      ,"color":"#ffffff"});
    items.push({"img_url":"../../assets/img/screwdriver.png"     ,"shape":"tool"   ,"color":"#aaaaaa"});
    items.push({"img_url":"../../assets/img/body.png"            ,"shape":"body"      ,"color":"#0000ff"});
    items.push({"img_url":"../../assets/img/cable.png"           ,"shape":"cable"      ,"color":"#e0ac69"});
    items.push({"img_url":"../../assets/img/body_other.png"      ,"shape":"body"      ,"color":"#c0c0c0"});
    items.push({"img_url":"../../assets/img/wrench.png"          ,"shape":"tool"     ,"color":"#2223ff"});
}