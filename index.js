const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ name, Desc,init, cre,id  }) =>
  `
    ## ${name}  
  ## Description
   <br> 
  ${Desc} <br>

##  installation 
  <br>
  ${init} <br>

## credit 
   <br>
   ${cre} <br>
   
## License 
   <br>
   ${id} <br>

`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project Title',
    },
    {
      type: 'input',
      name: 'Desc',
      message: 'Description',
    },
    {
      type: 'input',
      name: 'init',
      message: 'installation',
    },
    {
      type: 'input',
      name: 'cre',
      message: 'credit',
    },
    {
      type: 'input',
      name: 'id',
      message: 'License',
    },
    
  ])
  .then((answers) => {
    const htmlPageContent = generateReadme(answers);

    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md')
    );
  });
