/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.DIRECTION_MAP = [
	['left', 'L'],
	['right', 'R'],
	['forward', 'F'],
	['backward', 'B'],
];

Blockly.EDU_BOT.SECOND_MAP = [
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

Blockly.EDU_BOT.SPEED_MAP = [
	['1', '65'],
	['2', '70'],
	['3', '75'],
	['4', '80'],
	['5', '85'],
	['6', '90'],
	['7', '95'],
	['8', '100'],
	['9', '105'],
];

Blockly.Blocks['edu_bot_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.DIRECTION_MAP), 'OP0')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SECOND_MAP), 'OP1')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SPEED_MAP), 'OP2')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
