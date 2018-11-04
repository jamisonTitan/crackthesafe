# Crack the Safe Project

## Overview: 
In this unit, coders will create a game to simulate guessing a safe's code. The game will generate a safe code consisting of 4 digits. The user will then enter 4 digits to try and guess the code. The game will then tell the user how many numbers entered are the right number in the correct place and how many numbers were a number that is in the code, but not in the correct place. The user will then try different combinations until they are alerted that they won. To create this project, coders will use jQuery to take user input and display data, the Math Library to generate a random choice, and conditionals to determine the winner.

## Day 1

#### Planning
- [ ] Complete the project planning document.
#### Set-Up
- [x] Go to the repository at https://github.com/juliapohlmann/crackthesafe
- [ ] Fork this repository to your github account and clone to a new workspace
- [ ] Add, commit, and push your changes
- [ ] Make your site live on gh-pages

### HTML
- [ ] Add any more HTML elements you will need to the page

### JavaScript
- [ ] Add a click handler that displays the value of each number input within the div with the id `#userChoice`

#### Wrap
- [ ] Push your changes!
- [ ] Save and submit your website using the link on the Daily Session Document.

## Day 2

### Javascript 

- [ ] Outside of your click handler, declare 4 variables (randomNumber1, randomNumber2, randomNumber3, randomNumber4) and generate a random number for each variable. Be sure to save these as strings though! 
- [ ] Outside of your click handler, declare 4 variables (numberGuess1, numberGuess2, numberGuess3, numberGuess4) and assign them values of empty strings
- [ ] Outside of your click handler, declare 2 variables (numbersCorrect, numbersInPlace) and assign them values of 0
- [ ] In your click handler, store each input value in the corresponding numberGuess variable
- [ ] In your click handler, display each input value in userChoice
#### Wrap
- [ ] Push your changes!

## Day 3

## JavaScript
- [ ] Write a conditional statement that compares each number to see if the number is correct for that position and to see if the number is correct for any other position
- [ ] Display the amount of correct numbers, and how many numbers were in the correct place
- [ ] If the correct code was entered, display a message to the user letting them know they won


#### Wrap
- [ ] Push your changes!

## Projects Extensions:
- [ ] Style the page to fit your personality
- [ ] Validates input so that it will return “Not valid input” if the user types in a wrong choice. 
- [ ] Keeps track of number of guesses
- [ ] Tell the user whether each number entered is lower or higher than the correct number

## References/Tools
* [Advanced Reference Table]()
* [Script Tag](http://javascript.crockford.com/script.html)
* [How Jquery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
* [JQuery Events](http://api.jquery.com/category/events/)
* [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
