// make a form with input fields for Name, noun, verb, adverb etc..
// create a submit button after each form field input is filled out
// add alert prompt if not all fields are filled in saying, "Oops, please fill in blank entries"
// stop js from loading unless all form fields are filled in
// clear form after entry submission
// add form field entry inputs to story line in .story
// load .story to page. 







const noun = prompt ("Please enter a noun");
const name = prompt ("Please enter a name");
const place = prompt("Please enter a place");
const animal = prompt ("Please enter an animal");
const verb = prompt ("Please enter a verb");

let story = "Once upon a time there was a " + animal + " who's name was " + name;
story += ". He " + verb + " on Sundays. ";
story += " He lived in a  " + noun + " and visited " + place + " Where he had a summer house. "

document.write("<p>" + story + "</p>");