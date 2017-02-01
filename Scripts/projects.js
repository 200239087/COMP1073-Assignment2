// JavaScript
// Ryan Quigley
// 200239087
// Georgian College
// COMP1073-W2017

var ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);

// Objects created from html ids
var FirstHeading = document.getElementById("FirstHeading"); 
var FirstParagraph = document.getElementById("FirstParagraph");
var SecondParagraph = document.getElementById("SecondParagraph");

// Content injection strings
var H1Content = "I am Ryan Quigley.";
var P1Content = "I am a developer, designer, writer, and gamer.";
var P2Content = "<img src='../images/Treesharks1.svg' height='240px' width='200px'>"
                + "<img src='../images/TSWeb.svg' height='240px' width='200px'>"
                + "<img src='../images/Icon.svg' height='200px' width='200px'>";

FirstHeading.textContent = H1Content;
FirstParagraph.textContent = P1Content;

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.innerHTML = P2Content;
   ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}