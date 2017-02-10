/* JavaScript File */
"use strict";

(function () { // Start of IIFE

  console.log("App Started..."); // JS test
  
  switch (document.title) {
    case "Bio":

      var ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);

// Objects created from html ids
var SecondParagraph = document.getElementById("SecondParagraph");

// Content injection strings
var P2Content = `I am an advid gamer, I've been playing games since I was very little, 
                every game I've played has given me plenty of inspiration for writing my story. 
                I enjoy technology, and I enjoyed learnering how to develop and design.`;

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.textContent = P2Content;
   ClickButton = document.getElementById("ClickButton").style.display = "none";
}
      

      break;

    case "Projects":

      var ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);

// Objects created from html ids
var SecondParagraph = document.getElementById("SecondParagraph");

// Content injection strings
var P2Content = `<img src='../images/Treesharks1.svg' height='240px' width='200px'>
                <p>This is a logo I created with Adobe Illustrator for my YouTube channel.</p>
                <img src='../images/TSWeb.svg' height='240px' width='200px'>
                <p>This is a website design I created around the theme of the logo.</p>
                <img src='../images/Icon.svg' height='200px' width='200px'>
                <p>This is a basic envelope icon I created from scratch using Adobe Illustrator.</p>`;

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.innerHTML = P2Content;
   ClickButton = document.getElementById("ClickButton").style.display = "none";
}

      break;

    case "Contact":
      let FullName = document.getElementById("FullName");
      let PhoneNumber = document.getElementById("PhoneNumber");
      let Email = document.getElementById("Email");
      let Message = document.getElementById("Message");
      let SendButton = document.getElementById("SendButton");

      SendButton.addEventListener("click", function(event){
        event.preventDefault();

        // console.log(`Name: ${FullName.value}`);
        // console.log(`Phone Number: ${PhoneNumber.value}`);
        // console.log(`Email: ${Email.value}`);
        // console.log(`Message: ${Message.value}`);

      });

      break;
  }

})(); // end of IIFE

