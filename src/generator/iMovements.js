/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_infinite_movement'] = function (block) {
	let motionType = block.getFieldValue('OP0');
	let speed = motionType === '0' ? '000' : block.getFieldValue('OP1');
	let code = `6${motionType}${speed}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

