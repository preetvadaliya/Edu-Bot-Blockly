/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_operators'] = function (block) {
	let operator = block.getFieldValue('OP');
	let value = block.getFieldValue('INPUT0');
	let code = `3${operator}${value.toString().padStart(3, '0')}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};
