/* 
Query Selector All

instead of copy and pasting this for each different button 7 times:
    -- let button1 = document.querySelector(".button-1");

We can use querySelectorAll to grab every element with a <button> tag (children) inside of our #ssection-1-buttons div (parent)
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
    })

    // or 
    // let button = buttons[i];
    // button.addEventListener('click', function(){
    //     console.log(buttons[i].innerText);
    // })
}