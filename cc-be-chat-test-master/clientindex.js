const inquirer = require('inquirer');
const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {
    ws.send('client request connect');
});

ws.on('message', function incoming(data) {
    console.log('聊天记录：',data);
    if ( data == 'connect server successful!!') {
      run();
    }
});

const run = async () => {
  //const { name } = await askName();
  while (true) {
    const answers = await askChat();
    const { message } = answers;
    //console.log(`${name}: `, message);
    //var msg = `${name}: ` + message;  
    ws.send(message);
  }
};

const askChat = () => {
  const questions = [
    {
      name: "message",
      type: "input",
      message: "Enter chat message:"
    }
  ];
  return inquirer.prompt(questions);
};

const askName = () => {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Enter your name:"
    }
  ];
  return inquirer.prompt(questions);
};


