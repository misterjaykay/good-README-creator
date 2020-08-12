// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  var userLicenses = renderLicense(data.license);

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
  ${userLicenses}
`;
}


function renderLicense(licenses) {
  console.log(licenses);
  var licenseString = "";
  for (var i = 0; i < licenses.length; i++) {
    licenseString = licenseString + `* [![License: ${licenses[i]}](https://img.shields.io/badge/License-${licenses[i]}-green.svg)](https://opensource.org/licenses/${licenses[i]})` + '\n';
    console.log(licenseString);
  }
  return licenseString;
}

module.exports = generateMarkdown;
