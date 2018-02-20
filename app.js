
// create a variable that will add id's from the word-form class  into  shortstory after submit button is clicked.
validate = function() {
    var noun = document.getElementById("noun").value;
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
// add alert prompt if not all fields are filled in saying, "Oops, please fill in blank entries"
//    function user-word(evt:any) { 
   // evt.preventDefault(); 
// stop js from loading unless all form fields are filled in
// clear form after entry submission
// add form field entry inputs to story line in .story
let shortStory = "This is the story of " + name  + " the " + animal;
shortStory += ". He likes to " + verb + " on Sundays. ";
 shortStory += " He lives in a  " + noun + " and realy likes to visit " + place + " Where he has a summer house. ";
// load .story to page. 
document.write("<p>" + shortStory + "</p>");
};






// const noun = prompt ("Please enter a noun");
// const name = prompt ("Please enter a name");
// const place = prompt("Please enter a place");
// const animal = prompt ("Please enter an animal");
// const verb = prompt ("Please enter a verb");

// let shortStory = "This is the story of " + name; + " the " + animal;
// shortStory += ". He likes to " + verb + " on Sundays. ";
// shortStory += " He lives in a  " + noun + " and realy likes to visit " + place + " Where he has a summer house. "

// document.write("<p>" + shortStory + "</p>") in document.createElement(story);
