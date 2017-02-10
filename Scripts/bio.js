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
var P2Content = "I am an advid gamer, I've been playing games since I was very little, "
                + "every game I've played has given me plenty of inspiration for writing my story. "
                + "I enjoy technology, and I enjoyed learnering how to develop and design.";

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.textContent = P2Content;
   ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}