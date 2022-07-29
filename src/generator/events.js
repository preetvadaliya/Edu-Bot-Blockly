/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_clap_detection'] = function (block) {
	let code = `8`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
