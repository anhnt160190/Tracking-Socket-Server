import express from 'express';
import socketIO from 'socket.io';
import { Events } from './event';
import cors from 'cors';
import { PeerServer } from 'peer';

const app = express();
app.use(cors());
// template engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// public
app.use(express.static('public'));

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server is running on ${port}`)
);
const io = socketIO(server);
const peerServer = PeerServer({ port: 9000, path: '/myapp' });

// Execute socket events
Events(io);

// Router
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/camera', function (req, res) {
  res.render('camera');
});

app.get('/peer_demo', function (req, res) {
  res.render('peer_demo');
});

app.get('/chart', function (req, res) {
  res.render('chart');
});
