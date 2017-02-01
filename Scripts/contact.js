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
// HTML injection string
var P2Content = "<form action='action_page.php'>"
                + "<fieldset>"
                + "<legend>Personal information:</legend>"
                + "First name:<br><input type='text' name='firstname'><br>"
                + "Last name:<br><input type='text' name='lastname'><br>"
                + "Address:<br><input type='text' name='address'><br>"
                + "Email:<br><input type='url' name='email'><br>"
                + "Phone Number:<br><input type='text' name='phone'><br><br>"
                + "<button type='submit' class='btn btn-primary'>Submit</button>"
                + "</fieldset>"
                + "</form>";

FirstHeading.textContent = H1Content;
FirstParagraph.textContent = P1Content;

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.innerHTML = P2Content;
      ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}