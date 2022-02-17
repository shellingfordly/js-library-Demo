var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "list",
      message: "what chose one?",
      choices: ["A", "B", "C"],
    },
    {
      type: "confirm",
      name: "test",
      message: "Are you handsome?",
      default: true,
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("结果为:");
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
