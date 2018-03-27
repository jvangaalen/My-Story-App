
// create  variables that will add id's from the word-form class  into  shortstory after submit button is clicked.
function validate (event) {
    var noun = document.getElementById("noun").value;
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
    
// add alert prompt if not all fields are filled in saying, "Oops, please fill in blank entries"
   
// stop js from finishing unless all form fields are filled in
    document.getElementById("word-form").addEventListener("onSubmit", function(event){
    event.preventDefault()
});

// add form field entry inputs to story line in .story
var shortStory = "This is the story of " + name  + " the " + animal;
shortStory += ". "  + name + " likes to " + verb + " on Sundays. ";
shortStory +=  name + " lives in a  " + noun + " and really likes to visit " + place + " where " + name + " has a summer house. ";

// load #story to page. 

var writeStory=document.querySelector("#story");
writeStory.innerHTML= "<p>" + shortStory + "</p>";
return false;
}



