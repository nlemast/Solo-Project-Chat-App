const express = require('express');
app = express();
const http = require('http');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const path = require('path');
const Message = require('./message/messageModel.js');

// Connect to Mongo database
mongo.connect(
  'mongodb+srv://nlemast@cluster0-ciwcz.mongodb.net/test?retryWrites=true',
  (err, db) => {
    if (err) {
      throw err;
    }
    console.log('MongoDB connected...');
  }
);

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});

app.post('/', (req, res) => {});

// app.post('/', (req, res) => {
//   let message = new Message(req.body);
//   message.save(err => {
//     if (err) res.status(500);
//     // io.emi('message', req.body);
//     res.status(200);
//     console.log(req.body);
//     res.end();
//   });
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`You're listening on ${PORT}...`));

module.exports = app;

// mongo.connect(
//   'mongodb+srv://nlemast@cluster0-ciwcz.mongodb.net/test?retryWrites=true',
//   { userNewUrlParser: true },
//   (err, db) => {
//     if (err) {
//       throw err;
//     }
//     console.log('MongoDB connected...');

//     // Connect to socket.io with node listener
//     client.on('connection', socket => {
//       let chat = db.collection('chats');

//       // Create function to send status
//       sendStatus = s => {
//         // everytime you pass something from server to client, emit
//         socket.emit('status', s);
//       };

//       // Get chats from Mongo collection
//       chat
//         .find()
//         .limit(100)
//         .sort({ _id: 1 })
//         .toArray((err, result) => {
//           if (err) {
//             throw err;
//           }

//           // Emit the messages
//           socket.emit('output', result);
//         });

//       // Handle input events
//       socket.on('input', data => {
//         let username = data.username;
//         let message = data.message;

//         if (name == '' || message == '') {
//           sendStatus('Please enter a name and message');
//         } else {
//           chat.insert({ name: name, message: message }, () => {
//             client.emit('output', [data]);

//             // send status object
//             sendStatus({
//               message: 'Message sent'
//             });
//           });
//         }
//       });
//     });
//   }
// );
