function renderLicenseBadge(license) {
  if (license=== "none" ){
    return ""    
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  }
}

function generateMarkdown(data) {
  var readMe = `
# README ${renderLicenseBadge(data.license)}

## Description

${data.description}

- What was your motivation?

${data.motivation}

- Why did you build this project? 

${data.project}

- What problem does it solve?

${data.solve}

- What did you learn?

${data.learn}

## Installation

N/A

## Usage

${data.usage}

## Credits

${data.credits}

${data.license !== "none" ? `## License

Copyright 2021 Ruben Ruiz 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
`:``}
`

return readMe
}

module.exports = generateMarkdown;
