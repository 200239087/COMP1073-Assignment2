// JavaScript
// Ryan Quigley
// 200239087
// Georgian College
// COMP1073-W2017

var ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);

// Objects created from html ids
var SecondParagraph = document.getElementById("SecondParagraph");

// Content injection strings
var P2Content = "<img src='../images/Treesharks1.svg' height='240px' width='200px'>"
                + "<p>This is a logo I created with Adobe Illustrator for my YouTube channel.</p>"
                + "<img src='../images/TSWeb.svg' height='240px' width='200px'>"
                + "<p>This is a website design I created around the theme of the logo.</p>"
                + "<img src='../images/Icon.svg' height='200px' width='200px'>";
                + "<p>This is a basic envelope icon I created from scratch using Adobe Illustrator.</p>"

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.innerHTML = P2Content;
   ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}