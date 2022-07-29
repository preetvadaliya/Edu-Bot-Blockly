/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_spacial_movement'] = function (block) {
	let direction = block.getFieldValue('OP0');
	let time = block.getFieldValue('OP1');
	let speed = block.getFieldValue('OP2');
	let code = `6${direction}`;
	code += `${speed}`;
	code += `51${parseInt(time, 10).toString().padEnd(2, '0')}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
