const prompts = require('prompts');

// May use this later
// const displayQuestions = (input, output, eachInput, eachOutput) => {
//   console.log(`
//     What is the input to the program? ${input}
//     What is the output of the program? ${output}
//     What is the input to each recursive call? ${eachInput}
//     What is the output of each recursive call? ${eachOutput}
//   `);
// };

const questions = [
  {
    type: 'number',
    name: 'drillNum',
    message: `Select a Big 0 algorithm:
-------------------------------

------------------------------------------
  [777] Display all with example arguments
------------------------------------------
  [0] Exit       |
------------------
`
  }
];

const bigOPrompts = async () => {

  const response = await prompts(questions);
  switch ( response.drillNum ) {
    case 1: 
      console.log(`
Counting Sheep
--------------`);
      return (
        await prompts({
          type: 'number',
          name: 'sheepCount',
          message: `How many sheep would you like to count down from?`
        }).then(res => {
          recursivePrompts();
        })
      );
    default: 
      console.log("That isn't a valid selection");
      recursivePrompts();
  };
};

bigOPrompts();
