/** @format */
"use strict;";
console.log("Hi");

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const select = document.querySelector("select");
const btn = document.querySelector("button");

let name;
window.addEventListener("DOMContentLoaded", start);

function start() {
	input.value = "";
	output.value = "";
	btn.addEventListener("click", computeInput);
}

function computeInput() {
	let selectValue = select.value;
	switch (selectValue) {
		case "0":
			name = input.value.toLowerCase();
			output.value = `${name[0].toUpperCase()}${name.substring(1)}`;
			break;
		case "1":
			name = input.value.substring(0, input.value.indexOf(" "));
			output.value = name;
			break;
		case "2":
			name = input.value.substring(0, input.value.indexOf(" ")).length;
			output.value = name;
			break;
		case "3":
			let startPos, endPos, outputStr;
			name = input.value
				.substring(input.value.indexOf(" "), input.value.lastIndexOf(" "))
				.trim();
			startPos = input.value.indexOf(name);
			endPos = input.value.substring(0, input.value.lastIndexOf(" ")).length;
			outputStr = `${name}. Start position is ${startPos}. End position is ${endPos}`;
			output.value = outputStr;
			break;
		case "4":
			name = input.value.substring(input.value.indexOf("."));
			if (name === ".jpg" || name === ".png") {
				output.value = `${input.value} is an image file`;
			} else {
				output.value = `${input.value} is not an image file`;
			}
			break;
		case "5":
			let password = input.value.length;
			let star = "*";
			output.value = star.repeat(password);
			break;
		case "6":
			let thirdLetter = input.value.substring(2, 3).toUpperCase();
			output.value = `${input.value
				.substring(0, 2)
				.toLowerCase()}${thirdLetter}${input.value.substring(3).toLowerCase()}`;
			break;
		case "7":
			const arrSpaces = input.value.split(" ");
			let newArr = [],
				convArr = [],
				converted;

			for (let i = 0; i < arrSpaces.length; i++) {
				newArr.push(
					`${arrSpaces[i].substring(0, 1).toUpperCase()}${arrSpaces[
						i
					].substring(1)}`
				);
				let indexOfDash,
					el = newArr[i];
				if (el.includes("-")) {
					indexOfDash = el.indexOf("-");

					let firstPart = el.substring(0, indexOfDash + 1);
					let upperCase = el
						.substring(indexOfDash + 1, indexOfDash + 2)
						.toUpperCase();
					let lastPart = el.substring(indexOfDash + 2);
					el = `${firstPart}${upperCase}${lastPart}`;
				}
				convArr.push(el);
			}

			converted = convArr.join(" ");
			output.value = converted;
			break;
	}
}
