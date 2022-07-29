/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.A_MOVEMENT_VERTICAL_DIRECTION_MAP = [
	['forward', 'F'],
	['backward', 'B'],
]

Blockly.EDU_BOT.A_MOVEMENT_HORIZONTAL_DIRECTION_MAP = [
	['right', 'R'],
	['left', 'L'],
]

Blockly.EDU_BOT.A_MOVEMENT_SECOND_MAP =[
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
]

Blockly.EDU_BOT.A_MOVEMENT_SPEED_MAP = [
	['1', '65'],
	['2', '70'],
	['3', '75'],
	['4', '80'],
	['5', '85'],
	['6', '90'],
	['7', '95'],
	['8', '100'],
	['9', '105'],
]

Blockly.Blocks['edu_bot_angular_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_VERTICAL_DIRECTION_MAP), 'OP0')
			.appendField('with')
			.appendField(new Blockly.FieldAngle(60), 'INPUT0')
			.appendField('to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_HORIZONTAL_DIRECTION_MAP), 'OP1')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_SECOND_MAP), 'OP2')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_SPEED_MAP), 'OP3')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		this.getField('INPUT0').setValidator(this.validate.bind(this));
	},
	validate: function (value) {
		if (value >= 1 && value <= 89) {
			return value;
		} else {
			return null;
		}
	},
};
