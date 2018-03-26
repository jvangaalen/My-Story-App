# CodeLou_FrontEnd

## Description
```
My project is a simple game that resembles a mad lib. The user inputs a type of word in a form field. After the forms are complete the user closes out of the form and the words are then inserted into a story on the page. 

```



## Custom CSS Classes
```
The class(es) I created are:

1. class name ( .media, .media img )
.. Adds Padding, border, margin, background color, and shadowing to .media below my nav bar.

2. class name ( #story, #story p )

```Adds padding, border margin, background color, shadowing, text size, font and alignment with in #story.

3. class name ( .navbar, .navbar img  )

```Adds Font family to text, adds fixed height and width properties to the picture in .navbar.

4. class name ( .form-control-label,)

```Adds Padding between text and input box in the form that pops up.

## Custom JavaScript Functions
```
The javascript functions I created are:

1. document.getElementById("word-form").addEventListener("onSubmit", function(event){
    event.preventDefault()
});

.. this function keeps the program from ending untill all form fields are filled in and the submit button is pressed.

2. var writeStory=document.querySelector("#story");
writeStory.innerHTML= "<p>" + shortStory + "</p>";
return false;
}

.. this function takes the variables and insterts them into a class that prints out in the html file. 

```
