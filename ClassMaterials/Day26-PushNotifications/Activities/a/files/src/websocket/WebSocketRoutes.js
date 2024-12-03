const express = require('express');
const websocketRouter = express.Router();

websocketRouter.use(express.json());


/***********\
* WEBSOCKET *
\***********/

//Store chat messages in memory
const messages = [];
//Keep track of connected clients
const clients = new Set();

function sendPacket(ws, label, data) {
  let packet = {
    label: label,
    data: data
  }
  ws.send(JSON.stringify(packet));
}

websocketRouter.ws('/ws', (ws, req) => {
  clients.add(ws);
  console.log('New client');
  sendPacket(ws, 'init', messages);

  ws.on('close', e => {
    clients.delete(ws);
    console.log('client closed');
  });
  
  ws.on('message', (msg) => {
    const packet = JSON.parse(msg);
    switch(packet.label) {
      case 'chat':
        messages.push(packet.data);
        clients.forEach(client => {
          if(client !== ws) {
            client.send(msg);
          }
        });
        break;
    }
  });
});



/********************\
* PUSH NOTIFICATIONS *
\********************/

// ADD YOUR CODE HERE




module.exports = websocketRouter;
