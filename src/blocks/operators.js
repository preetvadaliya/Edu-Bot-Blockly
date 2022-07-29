/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.OPERATORS_MAP =[
	['<', '1'],
	['>', '2'],
	['=', '3'],
]

Blockly.Blocks['edu_bot_operators'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.OPERATORS_MAP), 'OP')
			.appendField(new Blockly.FieldNumber(0, 0, 999), 'INPUT0');
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.OPERATORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
