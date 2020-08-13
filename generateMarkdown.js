// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  var userLicenses = renderLicense(data.license);
 
  // var userLicenses = renderLicense(licenseMIT, licenseISC, licenseApache);
  console.log('what is this?' + userLicenses);

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
  console.log('this is users input' + licenses);

  /// Looping to get the licenses
  var licenseString = "";
  for (var i = 0; i < licenses.length; i++) {
    licenseString = licenseString + `* [![License: ${licenses[i]}](https://img.shields.io/badge/License-${licenses[i]}-green.svg)](https://opensource.org/licenses/${licenses[i]})` + '\n';
    console.log(licenseString);
  }
  return licenseString;

  // var licenseMIT = '';
  // var licenseISC = '';
  // var licenseApache = '';

  // licenses.forEach(function(data) {
  //   if (data == "MIT") {
  //     console.log("MIT is here");
  //     licenseMIT = licenseMIT + `* [![License: ${data}](https://img.shields.io/badge/License-${data}-green.svg)](https://opensource.org/licenses/${data})` + '\n';  
  //     console.log(data);
  //     console.log('this is mit license link' + licenseMIT);
  //     return licenseMIT;
  //   }
    
  //   else if (data == "ISC") {
  //     console.log("ISC is here");
  //     licenseISC = licenseISC + `* [![License: ${data}](https://img.shields.io/badge/License-${data}-green.svg)](https://opensource.org/licenses/${data})` + '\n';  
  //     return licenseISC;
  //   }

  //   else if (data == "Apache 2.0") {
  //     console.log("Apache 2.0 is here");
  //     licenseApache = licenseApache + `* [![License: ${data}](https://img.shields.io/badge/License-${data}-green.svg)](https://opensource.org/licenses/${data})` + '\n';  
  //     return licenseApache;
  //   }

  //   else {
  //     return;
  //   }

  // });
  
}

module.exports = generateMarkdown;
