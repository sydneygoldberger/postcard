var names = ["", "Sydney Goldberger", "Munus Shih", "Lingyi Zhou", "Carla Sunji", "Zoe Wilks", "Jessie Han", "Nikki Makagiansar", "Lauria Clarke", "Minghui Ju", "Simone Liu", "Bhuvaneesh Srivastava", "Tee Topor", "Nanwei Cai", "Anna Osipov", "Zhicun Wang", "Ying Zhang", "Yingyi Lei", "Shamail Zahir", "Talia Cotton", "Justin Bakse"];
let addressName = document.getElementById("line1");
var index = 0;
var pageCard = document.getElementById("pageCard");
var frontCard = document.getElementById("frontCard");
var backCard = document.getElementById("backCard");
var button = document.getElementById("button");
var bg = backCard.style.backgroundColor;
var test = document.getElementById("test");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var line4 = document.getElementById("line4");
var stampBox = document.getElementById("stampBox");
var circleBox = document.getElementById("circleBox");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

function changePostCard() {
	new p5(sketch_frontCard, frontCard);
	new p5(sketch_backCard, backCard);
}

function sketch_backCard(back) {
	let font;

	back.preload = function () {
		font = loadFont('fonts/BentonSansThin.otf');
		font2 = loadFont('fonts/bentonSansRegular.otf');
	 }

	back.setup = function () {
		back.pixelDensity(5);
		backsave = back.createCanvas(432, 306);
	}

	back.draw = function () {
		addressName.innerHTML = (names[index]);
		var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript	  

		// BACKGROUND: 
		if (lastInitial == 'A' || lastInitial == 'B' || lastInitial == 'C' || lastInitial == 'D' || lastInitial == 'E' || lastInitial == 'F' || lastInitial == 'G') {
			back.background('#417b5a');
		 }

		 if (lastInitial == 'H' || lastInitial == 'I' || lastInitial == 'J' || lastInitial == 'K' || lastInitial == 'L' || lastInitial == 'M') {
			back.background('#44377c');
		 }

		 if (lastInitial == 'N' || lastInitial == 'O' || lastInitial == 'P' || lastInitial == 'Q' || lastInitial == 'R' || lastInitial == 'S') {
			back.background('#335ea3');
		 }

		if (lastInitial == 'T' || lastInitial == 'U' || lastInitial == 'V' || lastInitial == 'W' || lastInitial == 'X' || lastInitial == 'Y' || lastInitial == 'Z') {
			back.background('#212666');
		 }

		 // STARS: 
		for (let x = 0; x < windowWidth; x += 18) {
			for (let y = 0; y < windowHeight; y += 18) {
				var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
				var firstName = firstWord.split(' ').reduce((response, word) => response = word.slice(0, 1)); // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
				var firstInitial = firstName.split("")[0]; // CREDIT: https://www.geeksforgeeks.org/how-to-get-character-array-from-string-in-javascript/
				var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
				back.fill(225);
				back.textSize(5);
				back.textFont(font);
				back.text(firstInitial, random(0, windowWidth), random(0, windowWidth));
				back.text(lastInitial, random(0, windowWidth), random(0, windowWidth));

			}
		}

		
		back.noStroke();

		//GREEN BACKGROUND
		if (lastInitial == 'A' || lastInitial == 'B' || lastInitial == 'C' || lastInitial == 'D' || lastInitial == 'E' || lastInitial == 'F' || lastInitial == 'G') {
			back.fill("#44377c")
			back.m();
			back.fill("#335ea3")
			back.m2();
			back.fill("#DDD4CE");
			back.m3();
		 }

		 //PURPLE BACKGROUND
		 if (lastInitial == 'H' || lastInitial == 'I' || lastInitial == 'J' || lastInitial == 'K' || lastInitial == 'L' || lastInitial == 'M') {
			back.fill("#DDD4CE")
			back.m();
			back.fill("#417B5A")
			back.m2();
			back.fill("#335EA3");
			back.m3();
		 }

		 //BLUE BACKGROUND:
		 if (lastInitial == 'N' || lastInitial == 'O' || lastInitial == 'P' || lastInitial == 'Q' || lastInitial == 'R' || lastInitial == 'S') {
			back.fill("#212666")
			back.m();
			back.fill("#DDD4CE")
			back.m2();
			back.fill("#FF9F1C");
			back.m3();
		 }

		//NAVY BACKGROUND
		if (lastInitial == 'T' || lastInitial == 'U' || lastInitial == 'V' || lastInitial == 'W' || lastInitial == 'X' || lastInitial == 'Y' || lastInitial == 'Z') {
			back.fill("#DDD4CE")
			back.m();
			back.fill("#ff9f1c")
			back.m2();
			back.fill("#D85E0B");
			back.m3();
		 }

		 back.noStroke();
		 back.noLoop();
		 back.textSize(windowWidth / 45);
		 back.textFont(font2);
		 back.fill('#DDD4CE');
		 back.greetings();
	}
	
	back.m = function () {
		var x = 0;
		var y = 0;
  
		//VARIABLE 1: HOW CHOPPY THE MOUNTAINS ARE BASED ON FIRST NAME CHARACTER COUNT:
		var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var firstNameLength = firstWord.length;
		var secondWord = addressName.innerHTML.split(" ")[1]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var secondNameLength = secondWord.length;
		console.log(firstNameLength * secondNameLength);

		back.beginShape();
		for (let i = 0; i < 432; i++) {
	 	 	y = noise(firstNameLength, i / (firstNameLength * secondNameLength)) * 306;
		 	back.vertex(x, y / 1);
	 		x += secondNameLength * 1;
		}
		back.vertex(0, 432);
		back.endShape();
	}

	back.m2 = function () {
		var x = 0;
		var y = 0;

		//VARIABLE 1: HOW CHOPPY THE MOUNTAINS ARE BASED ON FIRST NAME CHARACTER COUNT:
		var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var firstNameLength = firstWord.length;
		var secondWord = addressName.innerHTML.split(" ")[1]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var secondNameLength = secondWord.length;
		console.log(firstNameLength * secondNameLength);

	
		back.beginShape();
		for (let i = 0; i < 432; i++) {
			y = noise(firstNameLength, i / (firstNameLength * secondNameLength)) * 306;
			back.vertex(x, y / .8);
			x += secondNameLength * 2;
		}
		back.vertex(0, 432);
		back.endShape();
  	}

	back.m3 = function (){
		var x = 0;
		var y = 0;

		//VARIABLE 1: HOW CHOPPY THE MOUNTAINS ARE BASED ON FIRST NAME CHARACTER COUNT:
		var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var firstNameLength = firstWord.length;
		var secondWord = addressName.innerHTML.split(" ")[1]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var secondNameLength = secondWord.length;
		console.log(firstNameLength * secondNameLength);

	
		back.beginShape();
		for (let i = 0; i < 432; i++) {
			y = noise(firstNameLength, i / (firstNameLength * secondNameLength)) * 306;
			back.vertex(x, y / .6);
			x += secondNameLength * 3;
		}
		back.vertex(0, 432);
		back.endShape();
  	}

	back.greetings = function(){
		addressName.innerHTML = (names[index]);
		var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
		let greetings = ["Greetings!", "Wishing you well!", "Hope you're well!", "All the best!"];

		if (lastInitial == 'A' || lastInitial == 'B' || lastInitial == 'C' || lastInitial == 'D' || lastInitial == 'E' || lastInitial == 'F' || lastInitial == 'G') {
			back.text(greetings[0], 15, 40);
		}

		if (lastInitial == 'H' || lastInitial == 'I' || lastInitial == 'J' || lastInitial == 'K' || lastInitial == 'L' || lastInitial == 'M') {
			back.text(greetings[1], 15, 40);
		}
	
		if (lastInitial == 'N' || lastInitial == 'O' || lastInitial == 'P' || lastInitial == 'Q' || lastInitial == 'R' || lastInitial == 'S') {
			back.text(greetings[2], 15, 40);
		}
	
		if (lastInitial == 'T' || lastInitial == 'U' || lastInitial == 'V' || lastInitial == 'W' || lastInitial == 'X' || lastInitial == 'Y' || lastInitial == 'Z') {
			back.text(greetings[3], 15, 40);
		}
	}
}

function sketch_frontCard(front) {
	let font;
	var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com code-examples/javascript/javascript+get+first+word+of+string
	var firstName = firstWord.split(' ').reduce((response, word) => response = word.slice(0, 1)); // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
	var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript

	front.preload = function () {
		font = loadFont('fonts/BentonSansThin.otf');
		font2 = loadFont('fonts/bentonSansRegular.otf');
	}
	
	front.setup = function () {
		front.pixelDensity(5);
		savefront = front.createCanvas(432, 306);
		frontCard.style.backgroundColor = "#ddd4ce";	  
	}

	front.draw = function () {
		front.noLoop();
		index++;
		addressName.innerHTML = (names[index]);
	
		var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
		console.log(lastInitial);
	
		var firstWord = addressName.innerHTML.split(" ")[0]; // CREDIT: https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
		var firstName = firstWord.split(' ').reduce((response, word) => response = word.slice(0, 1)); // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
		var firstInitial = firstName.split("")[0]; // CREDIT: https://www.geeksforgeeks.org/how-to-get-character-array-from-string-in-javascript/
		console.log(firstInitial);
	
		if (index == names.length) {
			index = 0;
			addressName.innerHTML = (names[index]);
		}
				
		var lastInitial = addressName.innerHTML.split(' ').reduce((response, word) => response = word.slice(0, 1)) // CREDIT: https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
		new p5.Element(line);

		line1.style.fontFamily = "bentonSansBook";
		line1.style.fontSize = "18px";
		line1.style.zIndex = "3";
		line1.style.position = "relative";

		line2.style.fontFamily = "bentonSansBook";
		line2.style.display = "block";
		line2.style.paddingTop = "30px";
		line2.style.width = "200px";
		line2.style.borderBottom = "1.5px solid black";
		line2.style.position = "relative";
		line2.style.zIndex = "3";

		line3.style.fontFamily = "bentonSansBook";
		line3.style.display = "block";
		line3.style.paddingTop = "30px";
		line3.style.width = "200px";
		line3.style.borderBottom = "1.5px solid black";
		line3.style.position = "relative";
		line3.style.zIndex = "3";

		line4.style.fontFamily = "bentonSansBook";
		line4.style.display = "block";
		line4.style.paddingTop = "30px";
		line4.style.width = "200px";
		line4.style.borderBottom = "1.5px solid black";
		line4.style.position = "relative";
		line4.style.zIndex = "3";

		stampBox.style.width = "81px";
		stampBox.style.height = "91px";
		stampBox.style.border = "black solid 1.5px";
		stampBox.style.float = "right";
		stampBox.style.marginTop = "20px";
		stampBox.style.marginRight = "20px";

		circleBox.style.display = "block";
		circleBox.style.width = "100%";
		circleBox.style.height = "95%";
		circleBox.style.position = "relative";
		circleBox.style.bottom = "100px";

		if (lastInitial == 'A' || lastInitial == 'B' || lastInitial == 'C' || lastInitial == 'D' || lastInitial == 'E' || lastInitial == 'F' || lastInitial == 'G') {
			line1.style.color = '#417b5a';
			line2.style.borderBottom = '1.5px solid #417b5a';
			line3.style.borderBottom = '1.5px solid #417b5a';
			line4.style.borderBottom = '1.5px solid #417b5a';
			stampBox.style.border = '1.5px solid #417b5a';

			circle1.style.width = "100px";
			circle1.style.height = "100px";
			circle1.style.borderRadius = "100px";
			circle1.style.backgroundColor = "#44377c";
			circle1.style.display = "block";
			circle1.style.position = "relative";
			circle1.style.zIndex = "0";
			circle1.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle1.style.top = Math.random() * (120 - 10) + 10 + "px";	

			circle2.style.width = "75px";
			circle2.style.height = "75px";
			circle2.style.borderRadius = "75px";
			circle2.style.backgroundColor = "#335ea3";
			circle2.style.display = "block";
			circle2.style.position = "relative";
			circle2.style.zIndex = "0";
			circle2.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle2.style.top = Math.random() * (100 - 10) + 10 + "px";	

			circle3.style.width = "50px";
			circle3.style.height = "50px";
			circle3.style.borderRadius = "50px";
			circle3.style.backgroundColor = "#417B5A";
			circle3.style.display = "block";
			circle3.style.position = "relative";
			circle3.style.zIndex = "0";
			circle3.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle3.style.top = Math.random() * (30 - 10) + 10 + "px";	
		}

		 if (lastInitial == 'H' || lastInitial == 'I' || lastInitial == 'J' || lastInitial == 'K' || lastInitial == 'L' || lastInitial == 'M') {
			line1.style.color = '#44377c';
			line2.style.borderBottom = '1.5px solid #44377c';
			line3.style.borderBottom = '1.5px solid #44377c';
			line4.style.borderBottom = '1.5px solid #44377c';
			stampBox.style.border = '1.5px solid #44377c';

			circle1.style.width = "100px";
			circle1.style.height = "100px";
			circle1.style.borderRadius = "100px";
			circle1.style.backgroundColor = "#417B5A";
			circle1.style.display = "block";
			circle1.style.position = "relative";
			circle1.style.zIndex = "0";
			circle1.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle1.style.top = Math.random() * (120 - 10) + 10 + "px";	

			circle2.style.width = "75px";
			circle2.style.height = "75px";
			circle2.style.borderRadius = "75px";
			circle2.style.backgroundColor = "#44377c";
			circle2.style.display = "block";
			circle2.style.position = "relative";
			circle2.style.zIndex = "0";
			circle2.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle2.style.top = Math.random() * (100 - 10) + 10 + "px";	

			circle3.style.width = "50px";
			circle3.style.height = "50px";
			circle3.style.borderRadius = "50px";
			circle3.style.backgroundColor = "#335EA3";
			circle3.style.display = "block";
			circle3.style.position = "relative";
			circle3.style.zIndex = "0";
			circle3.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle3.style.top = Math.random() * (30 - 10) + 10 + "px";	
		}

		 if (lastInitial == 'N' || lastInitial == 'O' || lastInitial == 'P' || lastInitial == 'Q' || lastInitial == 'R' || lastInitial == 'S') {
			line1.style.color = '#335ea3';
			line2.style.borderBottom = '1.5px solid #335ea3';
			line3.style.borderBottom = '1.5px solid #335ea3';
			line4.style.borderBottom = '1.5px solid #335ea3';
			stampBox.style.border = '1.5px solid #335ea3';

			circle1.style.width = "100px";
			circle1.style.height = "100px";
			circle1.style.borderRadius = "100px";
			circle1.style.backgroundColor = "#335EA3";
			circle1.style.display = "block";
			circle1.style.position = "relative";
			circle1.style.zIndex = "0";
			circle1.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle1.style.top = Math.random() * (120 - 10) + 10 + "px";	

			circle2.style.width = "75px";
			circle2.style.height = "75px";
			circle2.style.borderRadius = "75px";
			circle2.style.backgroundColor = "#212666";
			circle2.style.display = "block";
			circle2.style.position = "relative";
			circle2.style.zIndex = "0";
			circle2.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle2.style.top = Math.random() * (100 - 10) + 10 + "px";	

			circle3.style.width = "50px";
			circle3.style.height = "50px";
			circle3.style.borderRadius = "50px";
			circle3.style.backgroundColor = "#FF9F1C";
			circle3.style.display = "block";
			circle3.style.position = "relative";
			circle3.style.zIndex = "0";
			circle3.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle3.style.top = Math.random() * (30 - 10) + 10 + "px";	
		 }

		if (lastInitial == 'T' || lastInitial == 'U' || lastInitial == 'V' || lastInitial == 'W' || lastInitial == 'X' || lastInitial == 'Y' || lastInitial == 'Z') {
			line1.style.color = '#212666';
			line2.style.borderBottom = '1.5px solid #212666';
			line3.style.borderBottom = '1.5px solid #212666';
			line4.style.borderBottom = '1.5px solid #212666';
			stampBox.style.border = '1.5px solid #212666';

			circle1.style.width = "100px";
			circle1.style.height = "100px";
			circle1.style.borderRadius = "100px";
			circle1.style.backgroundColor = "#212666";
			circle1.style.display = "block";
			circle1.style.position = "relative";
			circle1.style.zIndex = "0";
			circle1.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle1.style.top = Math.random() * (120 - 10) + 10 + "px";	

			circle2.style.width = "75px";
			circle2.style.height = "75px";
			circle2.style.borderRadius = "75px";
			circle2.style.backgroundColor = "#ff9f1c";
			circle2.style.display = "block";
			circle2.style.position = "relative";
			circle2.style.zIndex = "0";
			circle2.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle2.style.top = Math.random() * (100 - 10) + 10 + "px";	

			circle3.style.width = "50px";
			circle3.style.height = "50px";
			circle3.style.borderRadius = "50px";
			circle3.style.backgroundColor = "#D85E0B";
			circle3.style.display = "block";
			circle3.style.position = "relative";
			circle3.style.zIndex = "0";
			circle3.style.left = Math.random() * (120 - 10) + 10 + "px";	
			circle3.style.top = Math.random() * (30 - 10) + 10 + "px";	

		 }
	}
}

button2.onclick = function(){
	save(sketch_frontCard, 'FrontPostCard.png')
};


function saveBack(){
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
	backCard.mousePressed(save(backsave, 'BackPostCard.png'));
}
	


// ACKNOWLEDGEMENTS:
// // https://stackoverflow.com/questions/8279859/get-first-letter-of-each-word-in-a-string-in-javascript
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// //  https://editor.p5js.org/haschdl/sketches/C3dv36hJx
// // https://www.codegrepper.com/code-examples/javascript/javascript+get+first+word+of+string
// // https://www.geeksforgeeks.org/how-to-get-character-array-from-string-in-javascript/


// ARCHIVE:
// // var colors = ["#4b3f72", "#2c6885", "#e71d36", "ff9f1c"];
// // var randomColor = random(colors);

// // TEXT: 
	// textSize(windowWidth / 15);
	// textFont(font);
	// fill('white');
	// text('FROM, SYDNEY', 30, windowHeight - 30);

// // WIDTH OF THE STRIPES:
	// var postcardvariable2 = 2;

// // STRIPES:
	// for (let i = 0; i < windowWidth; i += random(1, 5)) {
	//   stripeColor = "#e71d36";
	//   fill(stripeColor);
	//   rect(0, i, windowWidth, postcardvariable2);
	// }