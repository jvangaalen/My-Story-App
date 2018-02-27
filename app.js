
// create a variable that will add id's from the word-form class  into  shortstory after submit button is clicked.
var shortStory;
var test = function validate (event) {
    var noun = document.getElementById("noun").value;
    console.log(noun);
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
// add alert prompt if not all fields are filled in saying, "Oops, please fill in blank entries"
   
// stop js from loading unless all form fields are filled in
    //document.getElementById("word-form").addEventListener("click", function(event){
    //event.preventDefault()
//});
// clear form after entry submission
// add form field entry inputs to story line in .story
 shortStory = "This is the story of " + name  + " the " + animal;
shortStory += ". He likes to " + verb + " on Sundays. ";
 shortStory += " He lives in a  " + noun + " and realy likes to visit " + place + " Where he has a summer house. ";
// load .story to page. 
//document.write("<p>" + shortStory + "</p>");

console.log(shortStory);
return shortStory;
}
var writeStory=document.querySelector("#story");
writeStory.innerHTML= "<p>" + test + "</p>";


console.log(shortStory);



// const noun = prompt ("Please enter a noun");
// const name = prompt ("Please enter a name");
// const place = prompt("Please enter a place");
// const animal = prompt ("Please enter an animal");
// const verb = prompt ("Please enter a verb");

// let shortStory = "This is the story of " + name; + " the " + animal;
// shortStory += ". He likes to " + verb + " on Sundays. ";
// shortStory += " He lives in a  " + noun + " and realy likes to visit " + place + " Where he has a summer house. "

// document.write("<p>" + shortStory + "</p>") in document.createElement(story);
