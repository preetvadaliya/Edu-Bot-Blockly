Blockly.JavaScript['edu_bot_movement'] = function (block) {
	let direction = block.getFieldValue('OP0');
	let time = block.getFieldValue('OP1');
	let speed = block.getFieldValue('OP2');
	let directionMap = {
		L: {
			X: '-',
			Y: '+',
			getXCoordinate: function () {
				return (parseInt(speed) * parseInt(time)).toString().padStart(3, '0');
			},
			getYCoordinate: function () {
				return (0).toString().padStart(3, '0');
			},
		},
		R: {
			X: '+',
			Y: '+',
			getXCoordinate: function () {
				return (parseInt(speed) * parseInt(time)).toString().padStart(3, '0');
			},
			getYCoordinate: function () {
				return (0).toString().padStart(3, '0');
			},
		},
		F: {
			X: '+',
			Y: '+',
			getXCoordinate: function () {
				return (0).toString().padStart(3, '0');
			},
			getYCoordinate: function () {
				return (parseInt(speed) * parseInt(time)).toString().padStart(3, '0');
			},
		},
		B: {
			X: '+',
			Y: '-',
			getXCoordinate: function () {
				return (0).toString().padStart(3, '0');
			},
			getYCoordinate: function () {
				return (parseInt(speed) * parseInt(time)).toString().padStart(3, '0');
			},
		},
	};
	let code = '11';
	code += `${directionMap[direction]['X']}`;
	code += `${directionMap[direction].getXCoordinate()}`;
	code += `${directionMap[direction]['Y']}`;
	code += `${directionMap[direction].getYCoordinate()}`;
	code += `${speed.toString().padStart(3, '0')}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
