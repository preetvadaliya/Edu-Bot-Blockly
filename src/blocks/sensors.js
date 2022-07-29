/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.SENSOR_COLOR_MAP = [
	['red', '100'],
	['green', '010'],
	['blue', '001'],
];

Blockly.Blocks['edu_bot_color_check'] = {
	init: function () {
		this.functionNumber = '2';
		this.appendDummyInput()
			.appendField('color is')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SENSOR_COLOR_MAP), 'OP0');
		this.setOutput(true, 'CON');
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SENSORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_distance_check'] = {
	init: function () {
		this.functionNumber = '1';
		this.appendDummyInput()
			.appendField('distance to obstacles is')
			.appendField(new Blockly.FieldNumber(25, 0, 999), 'INPUT0');
		this.setOutput(true, 'CON');
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SENSORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
