const firstName = 'John';  
const age = 35;
const hobbie = 'Coding';

const logTwice = (parameter) => { //defined parameter
  console.log(parameter)
  console.log(parameter)
}

function hobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbie}!`) //made variables equal
}

hobby()