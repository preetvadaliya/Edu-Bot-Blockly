/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.LOOP_TIME_MAP = [
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

Blockly.Blocks['edu_bot_control_loop'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('repeat')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LOOP_TIME_MAP), 'OP')
			.appendField('times');
		this.appendStatementInput('DO').setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.CONTROLS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_controls_wait_until'] = {
	init: function () {
		this.appendValueInput('INPUT0').setCheck('CON').appendField('wait until');
		this.appendStatementInput('INPUT1').setCheck(null).appendField('do');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.CONTROLS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
