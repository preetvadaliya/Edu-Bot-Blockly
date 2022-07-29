/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_sounds'] = function (block) {
	let soundNumber = block.getFieldValue('OP');
	let code = `0${soundNumber}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
