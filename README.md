# Mr Robogers Neighborhood
 #### By Estevan Lopez

#### an application that will take a numerical input and display a "bedazzled" count to the user. 

## Technologies Used

* HTML/CSS
* Markdown
* Github
* JavaScript
* Bootstrap
*


## Description

This program was created with TDD development to display a modified count to the user that follows the rules below:

For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"


## Setup/Installation Requirements

* requires internet connection to load
* simply click the link to view live installment on GH pages 
* Or clone the repository to edit  
* Navigate to top level of directory
* open index.html in compatible web browser
* below is the link for cloning the repo
* repo: https://github.com/Estelope/Mr-Robogers-Neighborhood.git


## Known Bugs

* If it crashes clone the repository and start again
* email the host if there are re-occuring issues or any questions

## licensing info 
*Copyright (c) 6/29/2023 Estevan Lopez
*MIT license below
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


# TDD

 Describe(bedazzleNumberInput)
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: bedazzleNumberInput(0);
Expected Output: [0]

Test "It should only take a number as an input no other characters"
code: bedazzleNumberInput(0);
Expected Output: [ Please enter a number!]

Test: "It should replace numbers that contain a "1" with "Beep" and display an array from 0 to that number
Code: bedazzleNumberInput(1);
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop" and display an array from 0 to that number
Code: bedazzleNumberInput(2);
Expected Output: [0, "Beep", "Boop"]

Test "It should replace numbers that contain a "3" with "Won't you be my neighbor?" and display an array from 0 to that number
Code: bedazzleNumberInput(3);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

 Test: "If the input includes 1,2,3 it should return a hierarchy of substitutions following the rule 3>2>1. 
Code: bedazzleNumberInput(13);
Expected Output:[ 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, "Won't you be my neighbor?"]

Test: "It should replace the result with a new result if the submit button is pressed multiple times."
Code: bedazzleNumberInput(1);
Code: bedazzleNumberInput(4);
Expected Output:[ 0, Beep!, Boop!, Won't you be my neighbor?, 4,]

