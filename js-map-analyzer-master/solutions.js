// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById('currentTile').innerHTML = 'Sand'; // Set output text
        
	} else {
        document.getElementById('currentTile').innerHTML = 'Water'; // Set output text
	}
	
	
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text
	} else if (column <= 7) {
        document.getElementById("currentTile").innerHTML = "Sand"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text
	}
	
}	


function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 3 && column <= 7) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	}
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text
	} else if (row <= 5) {
        document.getElementById("currentTile").innerHTML = "Sand"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 2 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text
		

	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (row == 4 && column == 7) {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (column == 2 || row == 5) {
		document.getElementById("currentTile").innerHTML = "Tree"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 5 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	}
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 7 && column <= 1) {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text

	} else if (row <= 7 && column <= 3) {
		document.getElementById("currentTile").innerHTML = "Tree"; // Set output text 

	} else if (row <= 7 && column <= 7) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	}
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 3 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	} else if (row >= 4 && column <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	} else if (row <= 3 && column >= 6) {
		document.getElementById("currentTile").innerHTML = "Hills"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Tree"; // Set output text

	}

}
        
function level12Solution() {
	// USE BINARY IF STATEMENT
	if ((row >= 5 && column <= 5) || (row <= 4 && column >= 6)) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	}

	
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if ((row <=5 && column <= 9) && (row >=2 && column >=4)) {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Tree"; // Set output text
		
	}
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if ((row >=1 && column <=4) && (row <=5 && column >=2)) {
		document.getElementById("currentTile").innerHTML = "Tree"; // Set output text

	} else if ((row <=5 && column <=10) && (row >=3 && column >=7)) {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text

	} else {
		document.getElementById("currentTile").innerHTML = "Sand"; // Set output text
		
	}

	
}
