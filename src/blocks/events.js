/**
 * @author Preet Vadaliya
 */

Blockly.Blocks['edu_bot_clap_detection'] = {
	init: function () {
		this.appendDummyInput().appendField('when clap detected then initiate');
		this.setInputsInline(true);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.EVENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
