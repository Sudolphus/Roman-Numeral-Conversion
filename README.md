# _Roman Numeral Converter_

#### _Simple program to convert integers to roman numerals, 6/11/2020_

#### By _**Nikolas Kososik, Micheal Hansen, Michael Petersen**_

## Description

_This project focuses on the use of BDD, utilizing HTML, CSS, and JS to create a webpage that will take a user input and run it through a series of behaviors that recognize each possible output of a given integer up to the number 3,999._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program Gathers User Input** | User input: "5345" | Output: "5345" |
| **Program Ignores Non-Integer Input** | User input: "Hello" | Output: null |
| **Program Adds M for each multiple of 1000, then leaves a remainder**| User Input: "3999" | Output: "MMM, 999" |
| **Program Adds CM for each remaining multiple of 900, then leaves a remainder**| Input: "999" | Output: "CM, 99" |
| **Program Adds D for each remaining multiple of 500, then leaves a remainder**| Input: "503" | Output: "D, 3" |
| **Program Adds CD for each remaining multiple of 400, then leaves a remainder**| Input: "437" | Output: "CD, 37" |
| **Program Adds C for each remaining multiple of 100, then leaves a remainder**| Input: "324" | Output: "CCC, 24" |
| **Program Adds XC for each remaining multiple of 90, then leaves a remainder**| Input: "94" | Output: "XC, 4" |
| **Program Adds L for each remaining multiple of 50, then leaves a remainder**| Input: "58" | Output: "L, 50" |
| **Program Adds XL for each remaining multiple of 40, then leaves a remainder**| Input: "43" | Output: "XL, 3" |
| **Program Adds X for each remaining multiple of 10, then leaves a remainder**| Input: "25" | Output: "XX, 5" |
| **Program Adds IX for each remaining multiple of 9, then leaves a remainder**| Input: "9" | Output: "IX" |
| **Program Adds V for each remaining multiple of 5, then leaves a remainder**| Input: "7" | Output: "V, 2" |
| **Program Adds IV for each remaining multiple of 4, then leaves a remainder**| Input: "4" | Output: "IV, 4" |
| **Program Adds I for each remaining**| Input: "3" | Output: "III" |
| **Program outputs the full string**| Input: "XXVVI" | Output: "XXVVI" |

## Setup/Installation Requirements

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/nkososik/Roman-Numeral-Conversion`
2. Navigate into the `Roman-Numeral-Conversion` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`



## Known Bugs

_No known bugs at this time._

## Support and contact details

* _Nikolas Kososik <nikolas.kososik@gmail.com>_
* _Micheal Hansen <micheal.hansen@gmail.com>_
* _Michael Petersen <michael_petersen_email@yahoo.com>_

## Technologies Used

* HTML
* CSS
* Git
* javascript
* jquery
* bootstrap

### License

MIT - License

Copyright (c) 2020 **_Nikolas Kososik, Micheal Hansen, & Michael Petersen_**