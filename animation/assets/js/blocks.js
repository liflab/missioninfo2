Blockly.Blocks['couleur'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Fixer la couleur à ")
            .appendField(new Blockly.FieldColour("#ff0000"), "fill");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('Change la couleur');
    }
};

Blockly.JavaScript['couleur'] = function (block) {
    var colour_fill = block.getFieldValue('fill');

    var code = "currentColor = '" + colour_fill + "';\n";
    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['coords'] = {
    init: function () {
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("X");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("Y");
        this.setInputsInline(false);
        this.setOutput(true, "coordonnees");
        this.setColour(180);
        this.setTooltip('Position sur le plan');
    }
};

Blockly.JavaScript['coords'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'new Coord(' + value_x + ',' + value_y + ')';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['carre'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Carré");
        this.appendDummyInput();
        this.appendValueInput("coord_center")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position du coin");
        this.appendValueInput("taille")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Taille");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Dessine un carré');
    }
};

Blockly.JavaScript['carre'] = function (block) {
    var value_coord_center = Blockly.JavaScript.valueToCode(block, 'coord_center', Blockly.JavaScript.ORDER_ATOMIC);
    var value_taille = Blockly.JavaScript.valueToCode(block, 'taille', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Square(currentColor,' + value_coord_center + ',' + value_taille + '));';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['rectangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rectangle");
        this.appendDummyInput();
        this.appendValueInput("coord_center")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position du coin");
        this.appendValueInput("hauteur")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Hauteur");
        this.appendValueInput("largeur")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Largeur");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Dessine un rectangle');
    }
};

Blockly.JavaScript['rectangle'] = function (block) {
    var value_coord_center = Blockly.JavaScript.valueToCode(block, 'coord_center', Blockly.JavaScript.ORDER_ATOMIC);
    var value_hauteur = Blockly.JavaScript.valueToCode(block, 'hauteur', Blockly.JavaScript.ORDER_ATOMIC);
    var value_largeur = Blockly.JavaScript.valueToCode(block, 'largeur', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Rectangle(currentColor,' + value_coord_center + ',' + value_hauteur + ',' + value_largeur + '));';


    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['cercle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Cercle");
        this.appendDummyInput();
        this.appendValueInput("coord_center")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position du centre");
        this.appendValueInput("taille")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Taille");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Dessine un cercle');
    }
};

Blockly.JavaScript['cercle'] = function (block) {
    var value_coord_center = Blockly.JavaScript.valueToCode(block, 'coord_center', Blockly.JavaScript.ORDER_ATOMIC);
    var value_taille = Blockly.JavaScript.valueToCode(block, 'taille', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Circle(currentColor,' + value_coord_center + ',' + value_taille + '));';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['ligne'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Ligne");
        this.appendDummyInput();
        this.appendValueInput("coord_deb")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position début");
        this.appendValueInput("coord_fin")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position fin");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Ajoute une ligne');
    }
};

Blockly.JavaScript['ligne'] = function (block) {
    var value_coord_deb = Blockly.JavaScript.valueToCode(block, 'coord_deb', Blockly.JavaScript.ORDER_ATOMIC);
    var value_coord_fin = Blockly.JavaScript.valueToCode(block, 'coord_fin', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Line(currentColor,' + value_coord_deb + ',' + value_coord_fin + '));';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['triangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Triangle");
        this.appendDummyInput();
        this.appendValueInput("coord_1")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Coin 1");
        this.appendValueInput("coord_2")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Coin 2");
        this.appendValueInput("coord_3")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Coin 3");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Ajoute un triangle');
    }
};

Blockly.JavaScript['triangle'] = function (block) {
    var value_coord_1 = Blockly.JavaScript.valueToCode(block, 'coord_1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_coord_2 = Blockly.JavaScript.valueToCode(block, 'coord_2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_coord_3 = Blockly.JavaScript.valueToCode(block, 'coord_3', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Triangle(currentColor,' + value_coord_1 + ',' + value_coord_2 + ',' + value_coord_3 + '));';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['pour_chaque_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Répéter jusqu'à la fin de l'animation");
        this.appendStatementInput("image")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(false, null);
        this.setColour(0);
        this.setTooltip('Execute les blocs pour chaque image');
    }
};

Blockly.JavaScript['pour_chaque_image'] = function (block) {
    var statements_image = Blockly.JavaScript.statementToCode(block, 'image').replace(/(\r\n|\n|\r)/gm, "");

    var code = 'for(let i = 0; i < exBoard.shapes.length; i++) {currentFrame = i;' + statements_image + '};';
    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['num_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Valeur du Temps");
        this.setOutput(true, "Number");
        this.setColour(270);
        this.setTooltip('Renvoie le numéro de l\'image');
    }
};

Blockly.JavaScript['num_image'] = function (block) {
    var code = 'currentFrame';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['init_curseur'] = {
    init: function () {
        this.appendValueInput("pos")
            .setCheck("coordonnees")
            .appendField("Initialiser Point de référence");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('Initialise le point de référence');
    }
};

Blockly.JavaScript['init_curseur'] = function (block) {
    var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[0] = ' + value_pos + ';\n';
    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['recup_curseur'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Position Point de référence");
        this.setOutput(true, "coordonnees");
        this.setColour(270);
        this.setTooltip('Récupère la position du point de référence');
    }
};

Blockly.JavaScript['recup_curseur'] = function (block) {
    var code = 'cursors[0]';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['recup_curseur_offset'] = {
    init: function () {
        this.appendValueInput("relative_pos")
            .setCheck("coordonnees")
            .appendField("Position Point de référence + Décalage");
        this.setOutput(true, "coordonnees");
        this.setColour(270);
        this.setTooltip('Récupère la position du point de référence et ajoute un décalage');
    }
};

Blockly.JavaScript['recup_curseur_offset'] = function (block) {
    var value_relative_pos = Blockly.JavaScript.valueToCode(block, 'relative_pos', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[0].add(' + value_relative_pos + ')';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['deplace_curseur'] = {
    init: function () {
        this.appendValueInput("mouvement")
            .setCheck("coordonnees")
            .appendField("Déplacer le point de référence de");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('Déplace le curseur');
    }
};

Blockly.JavaScript['deplace_curseur'] = function (block) {
    var value_mouvement = Blockly.JavaScript.valueToCode(block, 'mouvement', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[0] = cursors[0].add(' + value_mouvement + ')';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['init_curseur_tab'] = {
    init: function () {
        this.appendValueInput("pos")
            .setCheck("coordonnees")
            .appendField("Initialiser Point de référence n°")
            .appendField(new Blockly.FieldNumber(1, 1, 10), "idx");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('Initialise le point de référence');
    }
};

Blockly.JavaScript['init_curseur_tab'] = function (block) {
    var number_idx = block.getFieldValue('idx');
    var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[' + (number_idx - 1) + '] = ' + value_pos + ';';
    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['recup_curseur_tab'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Position Point de référence n°")
            .appendField(new Blockly.FieldNumber(1, 1, 10), "idx");
        this.setOutput(true, "coordonnees");
        this.setColour(270);
        this.setTooltip('Récupère la position du point de référence');
    }
};

Blockly.JavaScript['recup_curseur_tab'] = function (block) {
    var number_idx = block.getFieldValue('idx');
    var code = 'cursors[' + (number_idx - 1) + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['recup_curseur_offset_tab'] = {
    init: function () {
        this.appendValueInput("relative_pos")
            .setCheck("coordonnees")
            .appendField("Position Point de référence n°")
            .appendField(new Blockly.FieldNumber(1, 1, 10), "idx")
            .appendField(" + Décalage");
        this.setOutput(true, "coordonnees");
        this.setColour(270);
        this.setTooltip('Récupère la position du point de référence et ajoute un décalage');
    }
};

Blockly.JavaScript['recup_curseur_offset_tab'] = function (block) {
    var number_idx = block.getFieldValue('idx');
    var value_relative_pos = Blockly.JavaScript.valueToCode(block, 'relative_pos', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[' + (number_idx - 1) + '].add(' + value_relative_pos + ')';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['deplace_curseur_tab'] = {
    init: function () {
        this.appendValueInput("mouvement")
            .setCheck("coordonnees")
            .appendField("Déplacer le point de référence n°")
            .appendField(new Blockly.FieldNumber(1, 1, 10), "idx")
            .appendField(" de");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('Déplace le point de référence');
    }
};

Blockly.JavaScript['deplace_curseur_tab'] = function (block) {
    var number_idx = block.getFieldValue('idx');
    var value_mouvement = Blockly.JavaScript.valueToCode(block, 'mouvement', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'cursors[' + (number_idx - 1) + '] = cursors[' + (number_idx - 1) + '].add(' + value_mouvement + ');';

    return code;
};

///////////////////////////////////////////////////////////////////

Blockly.Blocks['bonhomme'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Bonhomme");
        this.appendDummyInput();
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Couleur du T-shirt")
            .appendField(new Blockly.FieldColour("#202020"), "shirt");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Couleur du Pantalon")
            .appendField(new Blockly.FieldColour("#909090"), "pants");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Bras levé")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "hands_up");
        this.appendValueInput("coord_center")
            .setCheck("coordonnees")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Position");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip('Dessine un bonhomme');
    }
};

Blockly.JavaScript['bonhomme'] = function (block) {
    var colour_shirt = block.getFieldValue('shirt');
    var colour_pants = block.getFieldValue('pants');
    var checkbox_hands_up = block.getFieldValue('hands_up') === 'TRUE';
    var value_coord_center = Blockly.JavaScript.valueToCode(block, 'coord_center', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'exBoard.answer[currentFrame].push(new Man(' + value_coord_center + ', "' + colour_shirt + '", "' + colour_pants + '", ' + checkbox_hands_up + '));';

    return code;
};