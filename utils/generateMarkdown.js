const api = require("./api")

async function generateMarkdown(data) {
  //call function to get API response with user email and image from Git Hub
  const APIdata = await api(data.username);
  //return markdown with data provided by user
  return `
# ${data.title}

![Generic badge](https://img.shields.io/badge/CREATED%20WITH-${data.languages}-<COLOR>.svg)

## Table of Contents:

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests) 
* [Contributing](#contributing)  
* [Questions](#questions)
* [License](#license)

## Description:

${data.description}

## Installation:

${data.installation}

## Usage:

${data.usage}

## Tests:

${data.tests}

## Contributing:

${data.contributing}

## Questions:

If you have any questions about this project, please contact ${data.username} via email: ${APIdata.email}

![User-Image](${APIdata.image})

## License:

${data.license}

`;
}

//export markdown to index.js
module.exports = generateMarkdown;