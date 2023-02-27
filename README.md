# **ReadME Generator Project**

  ## **Description**

 I was tasked by the client to create a README generator to save time when doing project work. This will enable me to speedily develop a README and put more time into the development lifecycle. 

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

The README generator taking in user input from an NPM called Inquirier. It will ask the user for the following:

- The Project Name
- The Project Description

1. Installation
2. Usage
3. Contributions
4. Tests Run
5. Questions
6. License Details

After the information has been collected, it is parsed into a data object which is then used to populate the values within the markdown text. 

## Challenges Faced

### Dealing with Markdown rather than HTML

At first I found it quite confusing working with Markdown syntax, rather than HTML. Although Markdown seems easier, it was strange using backticks with Markdown rather than HTML.

### Pulling the GitHub Bages

I had trouble thinking of how to pull down the badge license info. Do I populate an array and add some logic to determine whichever is picked, display the correct badge? I eventually found a website called [ShieldsIO] (https://shields.io/category/license) which helped.


## Installation

Run the website by following the GitGub Pages link: 
https://josephnamihas.github.io/Password-Generator/

Follow the prompts to generate a password.
If a new password is required, press it again.


## Useage

![Inquirer](/assets/Inquirer.PNG)

Video Here


## Credits

https://www.w3schools.com/

https://developer.mozilla.org/en-US/ 

https://shields.io/category/license

MIT License

Copyright (c) [2023] [Joseph Namihas]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.