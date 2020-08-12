// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
---
  ## Description
  > ${data.desc}

---
  ## Getting Started
  - [Installation](##Installation)
  - [Contribute](##Contribute)
  - [Test](##Test)
  - [Usage](##Usage)
  - [Questions](##Questions)
  - [Licenses](##Licenses)

---
  ## Installation
  
  ### Install
  To install, please type following command
  <pre> # Install dependencies
  ${data.install} </pre>

  ### Clone
  > https://github.com/${data.github}/${data.repo}

---
  ## Test
  <pre> # NPM
  ${data.test} </pre>

---
  ## Usage
  ${data.usage}

--- 
  ## Contribute to ${data.title}

  ### How to contribute

  ${data.contribute}

---
  ## Questions

  ### Github Profile
  [Repo](https://github.com/${data.github})

  ### E-mail
  Email at ${data.email}

---
  ## Licenses
  ${data.license}
  * [![License: Apache2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  * [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  * [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`;
}

module.exports = generateMarkdown;
