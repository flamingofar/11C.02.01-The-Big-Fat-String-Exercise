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
	btn.addEventListener("click", computeInput);
}

function computeInput() {
	let selectValue = select.value;
	switch (selectValue) {
		case "0":
			name = input.value.toLowerCase();
			output.value = `${name.substring(0, 1).toUpperCase()}${name.substring(
				1
			)}`;
			break;
		case "1":
			name = input.value.substring(0, input.value.indexOf(" "));
			output.value = name;
			break;
		case "2":
			console.log("2");
			break;
		case "3":
			console.log("3");
			break;
		case "4":
			console.log("4");
			break;
		case "5":
			console.log("5");
			break;
		case "6":
			console.log("6");
			break;
		case "7":
			console.log("7");
			break;
	}
}
