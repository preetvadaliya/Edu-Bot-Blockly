/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.SOUNDS_MAP = [
	['Hello !', '1'],
	['Thank You !', '2'],
	['How are you doing ?', '3'],
];

Blockly.Blocks['edu_bot_sounds'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('play sound')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SOUNDS_MAP), 'OP');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SOUNDS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
