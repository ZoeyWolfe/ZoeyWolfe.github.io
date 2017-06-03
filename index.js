var speed = 10;
var consistency, density, xCoefficient, yCoefficient, direction;
var columns, rows, columnWidth, rowHeight, characterArray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
	background('#000000');

	textFont('Menlo');
	textAlign(LEFT, TOP);

	columnWidth = Math.round(textWidth(' '));
	rowHeight = 11;

	columns = Math.floor(width / columnWidth);
	rows = Math.floor(height / rowHeight);

	consistency  = 0.05767618011917477;
	density      = 0.42077357890366296;
	xCoefficient = 1.117423818646185;
	yCoefficient = 1.027894609197064;
	direction    = false;

	currentCharacter = randomCharacter(density);

	for (var i = 0; i < columns * rows; i++) {
		characterArray.push(currentCharacter);
		if (random() < consistency) {
			currentCharacter = randomCharacter(density);
		}
	}
}

function draw() {
	background('#000000');

	fill('#00f72c');
	textSize(12);
	textStyle(NORMAL);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < columns; i++) {
			text(characterArray[Math.round(i ** xCoefficient + j ** yCoefficient) % characterArray.length], i * columnWidth, j * rowHeight);
		}
	}

	characterArray = rotateArray(characterArray, speed, direction);

	fill(0);
	textSize(50);
	textStyle(BOLD);
	text('no matter where you go', 100, 100);
	text('everyone\'s connected', 200, 200);
}

function randomCharacter(p) {
	if (random() < p) {
		return String.fromCharCode(random(32, 127));
	} else {
		return ' ';
	}
}