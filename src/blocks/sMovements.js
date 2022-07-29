/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.S_MOVEMENTS_DIRECTION_MAP = [
	['forward left', '4'],
	['forward right', '3'],
	['backward left', '6'],
	['backward right', '5'],
];

Blockly.EDU_BOT.S_MOVEMENTS_SECOND_MAP = [
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
];

Blockly.EDU_BOT.S_MOVEMENTS_SPEED_MAP = [
	['200', '1'],
	['225', '2'],
	['250', '3'],
	['275', '4'],
	['300', '5'],
	['325', '6'],
	['350', '7'],
	['375', '8'],
	['400', '9'],
	['425', '10'],
	['450', '11'],
	['475', '12'],
];

Blockly.Blocks['edu_bot_spacial_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_DIRECTION_MAP), 'OP0')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_SECOND_MAP), 'OP1')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_SPEED_MAP), 'OP2')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
