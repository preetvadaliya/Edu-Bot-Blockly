/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.LED_POSITION_MAP = [
	['front left', '4'],
	['front right', '3'],
	['middle left', '6'],
	['middle right', '5'],
	['back left', '1'],
	['back right', '2'],
	['all', '7'],
];

Blockly.EDU_BOT.LED_COLOR_MAP = [
	['red', '100'],
	['green', '010'],
	['blue', '001'],
	['yellow', '110'],
	['magenta', '101'],
	['cyan', '011'],
	['white', '111'],
	['random', '0'],
];

Blockly.EDU_BOT.LED_SECOND_MAP = [
	['1', '10'],
	['2', '20'],
	['3', '30'],
	['4', '40'],
	['5', '50'],
	['6', '60'],
	['7', '70'],
	['8', '80'],
	['9', '90'],
];

Blockly.Blocks['edu_bot_light'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch on')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_off'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch off')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_with_time'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch on')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP2')
			.appendField('second');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_change_with_time'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('change')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED from')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP2')
			.appendField('in')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP3')
			.appendField('second');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_blink'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('blink')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('color for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP2')
			.appendField('seconds');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
