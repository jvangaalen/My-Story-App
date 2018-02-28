
// create a variable that will add id's from the word-form class  into  shortstory after submit button is clicked.
function validate (event) {
    var noun = document.getElementById("noun").value;
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
    
// add alert prompt if not all fields are filled in saying, "Oops, please fill in blank entries"
   
// stop js from loading unless all form fields are filled in
    document.getElementById("word-form").addEventListener("click", function(event){
    event.preventDefault()
});
// clear form after entry submission
// add form field entry inputs to story line in .story
var shortStory = "This is the story of " + name  + " the " + animal;
shortStory += ". He likes to " + verb + " on Sundays. ";
shortStory+= " He lives in a  " + noun + " and realy likes to visit " + place + " Where he has a summer house. ";
// load .story to page. 
//document.write("<p>" + shortStory + "</p>");
//console.log(shortStory);
var writeStory=document.querySelector("#story");
writeStory.innerHTML= "<p>" + shortStory + "</p>";
return false;
}

/* Becky's comments:
So close! Here's what I realized we hadn't done quite yet, and this is how I fixed it:
- in index.html line 24, change onsubmit="validate()" to onsubmit="return validate();". This tells the DOM that we want to grab the output of the function validate() and keep it in the DOM.
- in app.js, I: 
    - removed the var shortStory; declaration on line 3, and added it to the beginning of line 18. I also just removed all the shortStory += lines, but you don't have to if you don't want to!
    - I moved lines 28 & 29 (writeStory declaration and innerHTML setting) and moved them inside of the function again.
    - removed the console.log(shortStory) on line 32 since it's out of scope.
*/


