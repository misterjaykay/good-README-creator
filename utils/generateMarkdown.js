// function to generate markdown for README
function generateMarkdown(data) {

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
  ## Contribute to "${data.title}"

  ### How to contribute

  ${data.contribute}

---
  ## Questions

  ### Github Profile
  [Visit My Repo](https://github.com/${data.github})

  ### E-mail
  Please Email at ${data.email}

---
  ## Licenses
  ${data.license}
  ${userLicenses}
`;
}


function renderLicense(licenses) {

  ///// Looping to get the licenses (Option 1)
  // var licenseString = "";
  // for (var i = 0; i < licenses.length; i++) {
  //   licenseString = licenseString + `* [![License: ${licenses[i]}](https://img.shields.io/badge/License-${licenses[i]}-green.svg)](https://opensource.org/licenses/${licenses[i]})` + '\n';
  //   console.log(licenseString);
  // }
  // return licenseString;

  ///// Option 2
  var licenseString = '';

  licenses.forEach(function(data) {
    if (data == "MIT") {     
      licenseString = licenseString + `* [![License: ${data}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${data})` + '\n';  
    }
    
    else if (data == "ISC") {
      licenseString = licenseString + `* [![License: ${data}](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/${data})` + '\n';      
    }

    else if (data == "Apache 2.0") {
      licenseString = licenseString + `* [![License: ${data}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` + '\n';     
    }

    else {
      return;
    }

  });
  return licenseString;
}

module.exports = generateMarkdown;
