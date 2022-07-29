/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_color_check'] = function (block) {
	let color = block.getFieldValue('OP0');
	let code = `${color.toString().padStart(3, '0')}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['edu_bot_distance_check'] = function (block) {
	let distance = block.getFieldValue('INPUT0');
	let code = `${distance.toString().padStart(3, '0')}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};
