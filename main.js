/* 
Query Selector All

- Instead of copy and pasting the below for each different button 7 times:
    -- let button1 = document.querySelector(".button-1");

- We can use querySelectorAll to grab every element with a <button> tag (children) inside of our #ssection-1-buttons div (parent)
    -- let buttons = document.querySelectorAll("#section-1-buttons button");
*/ 

let buttons = document.querySelectorAll("#section-1-buttons button");

// Buttons is now an array of button elements
console.log("buttons");
console.log(buttons);

for (let i = 0; i < buttons.length; i++){
    console.log(buttons[i]);


    buttons[i].addEventListener('click', function(){
        console.log(buttons[i].innerText);
        // if (buttons[i].style.backgroundColor === ''){
        //     buttons[i].style.backgroundColor = 'blue';
        // } else if (buttons[i].style.backgroundColor === 'blue'){
        //     buttons[i].style.backgroundColor = 'brown';
        // } else if (buttons[i].style.backgroundColor === 'brown'){
        //     buttons[i].style.backgroundColor = 'blue';
        // }

        // This is the "better" way to do it where you don't need to change it it in the first if from a blank str. It says on first click, if it's anything other than blue, change it to blue. Then it goes back and forth.
        if (buttons[i].style.backgroundColor === 'blue'){
            buttons[i].style.backgroundColor = 'brown';
        } else {
            buttons[i].style.backgroundColor = 'blue';
        }
    })

    // or 
    // let button = buttons[i];
    // button.addEventListener('click', function(){
    //     console.log(buttons[i].innerText);
    // })
}

/*
Bubbling

- Adding an event listener to the parent allows us to access each child element using the "bubbling" method.

- Bubbling causes our event to happen on the most specictc element that we are targetting by clicking.

- Example below:
    -- clicking a button will print out the specific button that we are targetting the event on ( and also change the color if you added the if statement)

- Clicking  outside of the button but still inside the parent div will also change the entire section amd modify whatever the the section to whatever is specified.

- event.target - pass the parameter(event) inside yu callback function and than use event.target to select the specific elements inside your parent div.
*/

let buttonsParentDiv = document.querySelector("#section-2-buttons");

console.log("Bubbling");
console.log("Parent Div");
console.log(buttonsParentDiv);

buttonsParentDiv.addEventListener('click', function(event){
    console.log("parent clicked");

    // Below gets the element that the user clicked inside the div
    console.log(event.target);
    let button = event.target;
    console.log(button.innerText);

    if (button.style.backgroundColor === 'blue'){
        button.style.backgroundColor = 'brown';
    } else {
        button.style.backgroundColor = 'blue';
    }

})