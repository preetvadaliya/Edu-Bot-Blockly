/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_angular_movement'] = function (block) {
	let primaryDirection = block.getFieldValue('OP0');
	let angleValue = parseInt(block.getFieldValue('INPUT0'), 10) * (Math.PI / 180);
	let secondaryDirection = block.getFieldValue('OP1');
	let time = parseInt(block.getFieldValue('OP2'), 10);
	let speed = parseInt(block.getFieldValue('OP3'), 10);
	let height = speed * time;
	let xCoordinate = height * Math.sin(angleValue);
	let yCoordinate = height * Math.cos(angleValue);
	let directionMap = {
		FL: {
			X: '-',
			Y: '+',
		},
		FR: {
			X: '+',
			Y: '+',
		},
		BL: {
			X: '-',
			Y: '-',
		},
		BR: {
			X: '+',
			Y: '-',
		},
	};
	let code = '11';
	code += `${directionMap[primaryDirection + secondaryDirection]['X']}`;
	code += `${Math.round(xCoordinate).toString().padStart(3, '0')}`;
	code += `${directionMap[primaryDirection + secondaryDirection]['Y']}`;
	code += `${Math.round(yCoordinate).toString().padStart(3, '0')}`;
	code += `${speed.toString().padStart(3, '0')}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
