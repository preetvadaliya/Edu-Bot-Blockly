/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT = {};

Blockly.EDU_BOT.CATEGORY_INFO = {
	MOVEMENTS: {
		COLOR: '#304FFE',
		NAME: 'Movements',
	},
	I_MOVEMENTS: {
		COLOR: '#6200EA',
		NAME: 'Infinite Movements',
	},
	A_MOVEMENTS: {
		COLOR: '#0091EA',
		NAME: 'Angular Movements',
	},
	CONTROLS: {
		COLOR: '#FFD600',
		NAME: 'Controls',
	},
	LIGHTS: {
		COLOR: '#D50000',
		NAME: 'Lights',
	},
	SENSORS: {
		COLOR: '#AA00FF',
		NAME: 'Sensors',
	},
	OPERATORS: {
		COLOR: '#00C853',
		NAME: 'Operators',
	},
	SOUNDS: {
		COLOR: '#C51162',
		NAME: 'Sounds',
	},
	EVENTS: {
		COLOR: '#FFAB00',
		NAME: 'Events',
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.A_MOVEMENT_VERTICAL_DIRECTION_MAP = [
	['forward', 'F'],
	['backward', 'B'],
]

Blockly.EDU_BOT.A_MOVEMENT_HORIZONTAL_DIRECTION_MAP = [
	['right', 'R'],
	['left', 'L'],
]

Blockly.EDU_BOT.A_MOVEMENT_SECOND_MAP =[
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
]

Blockly.EDU_BOT.A_MOVEMENT_SPEED_MAP = [
	['1', '65'],
	['2', '70'],
	['3', '75'],
	['4', '80'],
	['5', '85'],
	['6', '90'],
	['7', '95'],
	['8', '100'],
	['9', '105'],
]

Blockly.Blocks['edu_bot_angular_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_VERTICAL_DIRECTION_MAP), 'OP0')
			.appendField('with')
			.appendField(new Blockly.FieldAngle(60), 'INPUT0')
			.appendField('to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_HORIZONTAL_DIRECTION_MAP), 'OP1')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_SECOND_MAP), 'OP2')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.A_MOVEMENT_SPEED_MAP), 'OP3')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		this.getField('INPUT0').setValidator(this.validate.bind(this));
	},
	validate: function (value) {
		if (value >= 1 && value <= 89) {
			return value;
		} else {
			return null;
		}
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.LOOP_TIME_MAP = [
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
];

Blockly.Blocks['edu_bot_control_loop'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('repeat')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LOOP_TIME_MAP), 'OP')
			.appendField('times');
		this.appendStatementInput('DO').setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.CONTROLS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_controls_wait_until'] = {
	init: function () {
		this.appendValueInput('INPUT0').setCheck('CON').appendField('wait until');
		this.appendStatementInput('INPUT1').setCheck(null).appendField('do');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.CONTROLS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

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

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.I_MOVEMENT_DIRECTION_MAP = [
	['forward', '1'],
	['backward', '2'],
	['forward right', '3'],
	['forward left', '4'],
	['backward right', '5'],
	['backward right', '6'],
	['rotate', '7'],
	['left', '8'],
	['right', '9'],
	['stop', '0'],
];

Blockly.EDU_BOT.I_MOVEMENT_SPEED_MAP = [
	['1', '200'],
	['2', '225'],
	['3', '250'],
	['4', '275'],
	['5', '300'],
	['6', '325'],
	['7', '350'],
	['8', '375'],
	['9', '400'],
	['10', '425'],
	['11', '450'],
	['12', '475'],
];

Blockly.Blocks['edu_bot_infinite_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move', 'F0')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.I_MOVEMENT_DIRECTION_MAP), 'OP0')
			.appendField('with speed', 'F1')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.I_MOVEMENT_SPEED_MAP), 'OP1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.I_MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
		this.getField('OP0').setValidator(this.validate.bind(this));
	},
	validate: function (value) {
		if (value === '0') {
			this.getField('F0').setVisible(false);
			this.getField('F1').setVisible(false);
			this.getField('OP1').setVisible(false);
		} else {
			this.getField('F0').setVisible(true);
			this.getField('F1').setVisible(true);
			this.getField('OP1').setVisible(true);
		}
		if (value === '8' || value === '9') {
			this.setFieldValue('drift', 'F0');
		}
		return value;
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.LED_POSITION_MAP = [
	['front left', '4'],
	['front right', '3'],
	['middle left', '6'],
	['middle right', '5'],
	['back left', '1'],
	['back right', '2'],
	['all', '7'],
];

Blockly.EDU_BOT.LED_COLOR_MAP = [
	['red', '100'],
	['green', '010'],
	['blue', '001'],
	['yellow', '110'],
	['magenta', '101'],
	['cyan', '011'],
	['white', '111'],
	['random', '0'],
];

Blockly.EDU_BOT.LED_SECOND_MAP = [
	['1', '10'],
	['2', '20'],
	['3', '30'],
	['4', '40'],
	['5', '50'],
	['6', '60'],
	['7', '70'],
	['8', '80'],
	['9', '90'],
];

Blockly.Blocks['edu_bot_light'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch on')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_off'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch off')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_with_time'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('switch on')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP2')
			.appendField('second');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_change_with_time'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('change')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('LED from')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('to')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP2')
			.appendField('in')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP3')
			.appendField('second');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_light_blink'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('blink')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_POSITION_MAP), 'OP0')
			.appendField('with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_COLOR_MAP), 'OP1')
			.appendField('color for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.LED_SECOND_MAP), 'OP2')
			.appendField('seconds');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.LIGHTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.DIRECTION_MAP = [
	['left', 'L'],
	['right', 'R'],
	['forward', 'F'],
	['backward', 'B'],
];

Blockly.EDU_BOT.SECOND_MAP = [
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
];

Blockly.EDU_BOT.SPEED_MAP = [
	['1', '65'],
	['2', '70'],
	['3', '75'],
	['4', '80'],
	['5', '85'],
	['6', '90'],
	['7', '95'],
	['8', '100'],
	['9', '105'],
];

Blockly.Blocks['edu_bot_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.DIRECTION_MAP), 'OP0')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SECOND_MAP), 'OP1')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SPEED_MAP), 'OP2')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.OPERATORS_MAP =[
	['<', '1'],
	['>', '2'],
	['=', '3'],
]

Blockly.Blocks['edu_bot_operators'] = {
	init: function () {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.OPERATORS_MAP), 'OP')
			.appendField(new Blockly.FieldNumber(0, 0, 999), 'INPUT0');
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.OPERATORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.SENSOR_COLOR_MAP = [
	['red', '100'],
	['green', '010'],
	['blue', '001'],
];

Blockly.Blocks['edu_bot_color_check'] = {
	init: function () {
		this.functionNumber = '2';
		this.appendDummyInput()
			.appendField('color is')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SENSOR_COLOR_MAP), 'OP0');
		this.setOutput(true, 'CON');
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SENSORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['edu_bot_distance_check'] = {
	init: function () {
		this.functionNumber = '1';
		this.appendDummyInput()
			.appendField('distance to obstacles is')
			.appendField(new Blockly.FieldNumber(25, 0, 999), 'INPUT0');
		this.setOutput(true, 'CON');
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SENSORS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.S_MOVEMENTS_DIRECTION_MAP = [
	['forward left', '4'],
	['forward right', '3'],
	['backward left', '6'],
	['backward right', '5'],
];

Blockly.EDU_BOT.S_MOVEMENTS_SECOND_MAP = [
	['1', '1'],
	['2', '2'],
	['3', '3'],
	['4', '4'],
	['5', '5'],
	['6', '6'],
	['7', '7'],
	['8', '8'],
	['9', '9'],
];

Blockly.EDU_BOT.S_MOVEMENTS_SPEED_MAP = [
	['200', '1'],
	['225', '2'],
	['250', '3'],
	['275', '4'],
	['300', '5'],
	['325', '6'],
	['350', '7'],
	['375', '8'],
	['400', '9'],
	['425', '10'],
	['450', '11'],
	['475', '12'],
];

Blockly.Blocks['edu_bot_spacial_movement'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_DIRECTION_MAP), 'OP0')
			.appendField('for')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_SECOND_MAP), 'OP1')
			.appendField('second with')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.S_MOVEMENTS_SPEED_MAP), 'OP2')
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.MOVEMENTS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

/**
 * @author Preet Vadaliya
 */

Blockly.EDU_BOT.SOUNDS_MAP = [
	['Hello !', '1'],
	['Thank You !', '2'],
	['How are you doing ?', '3'],
];

Blockly.Blocks['edu_bot_sounds'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('play sound')
			.appendField(new Blockly.FieldDropdown(Blockly.EDU_BOT.SOUNDS_MAP), 'OP');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.EDU_BOT.CATEGORY_INFO.SOUNDS.COLOR);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

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

/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_clap_detection'] = function (block) {
	let code = `8`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_infinite_movement'] = function (block) {
	let motionType = block.getFieldValue('OP0');
	let speed = motionType === '0' ? '000' : block.getFieldValue('OP1');
	let code = `6${motionType}${speed}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};


/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_light'] = function (block) {
	let position = block.getFieldValue('OP0');
	let color = block.getFieldValue('OP1');
	color =
		color === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: color;
	let code = `2${position}${color}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_off'] = function (block) {
	let position = block.getFieldValue('OP0');
	let code = `2${position}000`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_with_time'] = function (block) {
	let position = block.getFieldValue('OP0');
	let color = block.getFieldValue('OP1');
	color =
		color === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: color;
	let time = block.getFieldValue('OP2');
	let code = `2${position}${color}51${time}2${position}000`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_change_with_time'] = function (block) {
	let position = block.getFieldValue('OP0');
	let fromColor = block.getFieldValue('OP1');
	fromColor =
		fromColor === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: fromColor;
	let toColor = block.getFieldValue('OP2');
	toColor =
		toColor === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: toColor;
	let time = block.getFieldValue('OP3');
	let code = `2${position}${fromColor}51${time}2${position}${toColor}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['edu_bot_light_blink'] = function (block) {
	let position = block.getFieldValue('OP0');
	let color = block.getFieldValue('OP1');
	let seconds = block.getFieldValue('OP1');
	color =
		color === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: color;
	let code = ``;
	for (let i = 0; i < parseInt(seconds, 10) * 2; i++) {
		if (i % 2 == 0) {
			code += `2${position}${color}`;
		} else {
			code += `2${position}000`;
		}
		code += `5105`;
	}
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

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

/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_operators'] = function (block) {
	let operator = block.getFieldValue('OP');
	let value = block.getFieldValue('INPUT0');
	let code = `3${operator}${value.toString().padStart(3, '0')}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

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

/**
 * @author Preet Vadaliya
 */

Blockly.JavaScript['edu_bot_sounds'] = function (block) {
	let soundNumber = block.getFieldValue('OP');
	let code = `0${soundNumber}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};
