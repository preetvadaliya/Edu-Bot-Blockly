/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_control_loop'] = function (block) {
	let repeatCount = block.getFieldValue('OP');
	let loopBody = Blockly.JavaScript.statementToCode(block, 'DO');
	loopBody = loopBody.trim();
	let code = `4${repeatCount}${loopBody.toString().length}${loopBody}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_controls_wait_until'] = function (block) {
	let condition = Blockly.JavaScript.valueToCode(block, 'INPUT0', Blockly.JavaScript.ORDER_ATOMIC);
	let body = Blockly.JavaScript.statementToCode(block, 'INPUT1');
	let targetConnection = block.getInput('INPUT0').connection.targetConnection;
	let functionNumber = targetConnection != null ? targetConnection.getSourceBlock().functionNumber : '';
	let code = `3${functionNumber}${condition.toString().replace('(', '').replace(')', '').trim().padStart(3, 0)}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
