/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.I_MOVEMENT_DIRECTION_MAP = [
	['forward', '1'],
	['backward', '2'],
	['forward right', '3'],
	['forward left', '4'],
	['backward right', '5'],
	['backward right', '6'],
	['rotate', '7'],
	['left', '8'],
	['right', '9'],
	['stop', '0'],
];

Blockly.EDU_BOT.I_MOVEMENT_SPEED_MAP = [
	['1', '200'],
	['2', '225'],
	['3', '250'],
	['4', '275'],
	['5', '300'],
	['6', '325'],
	['7', '350'],
	['8', '375'],
	['9', '400'],
	['10', '425'],
	['11', '450'],
	['12', '475'],
];

Blockly.Blocks['edu_bot_infinite_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move', 'F0')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.I_MOVEMENT_DIRECTION_MAP), 'OP0')
			.appendField('with speed', 'F1')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.I_MOVEMENT_SPEED_MAP), 'OP1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.I_MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
		this.getField('OP0').setValidator(this.validate.bind(this));
	},
	validate: function (value) {
		if (value === '0') {
			this.getField('F0').setVisible(false);
			this.getField('F1').setVisible(false);
			this.getField('OP1').setVisible(false);
		} else {
			this.getField('F0').setVisible(true);
			this.getField('F1').setVisible(true);
			this.getField('OP1').setVisible(true);
		}
		if (value === '8' || value === '9') {
			this.setFieldValue('drift', 'F0');
		}
		return value;
	},
};
