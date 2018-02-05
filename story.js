const welcome = alert ("Welcome to your story. Please follow the prompts");
const noun = prompt ("Please enter a noun");
const name = prompt ("Please enter a name");
const place = prompt("Please enter a place");
const animal = prompt ("Please enter an animal");
const verb = prompt ("Please enter a verb");

let story = "Once upon a time there was a " + animal + " who's name was " + name;
story += ". He " + verb + " on Sundays. ";
story += " He lived in a  " + noun + " and visited " + place + " Where he had a summer house. "

document.write("<p>" + story + "</p>");