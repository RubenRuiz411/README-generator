// function to dynamically generate a badge with static green color and license of choice, if none is selected no badge is created
function renderLicenseBadge(license) {
  if (license=== "none" ){
    return ""    
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  }
}
// generates readme using template literal with choice data from inquirer prompt within "index.js" 
function generateMarkdown(data) {
  var readMe = `
# ${data.title} README ${renderLicenseBadge(data.license)}

## Description

- ${data.description}

## Table of Contents:

- ${data.tableofcontents}

## Installation:

- ${data.installation}

## Usage:

- ${data.usage}


${data.license !== "none" ? `## License:

Copyright 2021 Ruben Ruiz 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
`:``}

## Contributing:

- ${data.contributing}

## Tests:

- ${data.tests}

## Questions:

- ${data.questions}
- GitHub: [${data.github}](https://github.com/${data.github}/)
- Please reach out to me at ${data.email} for any questions. 
`

return readMe
}

module.exports = generateMarkdown;
