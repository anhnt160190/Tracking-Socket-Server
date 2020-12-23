import express from 'express';
import socketIO from 'socket.io';
import { Events } from './event';
import cors from 'cors';

const app = express();
app.use(cors());
// template engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// public
app.use(express.static('public'))

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server is running on ${port}`)
);
const io = socketIO(server);

// Execute socket events
Events(io);

// Router
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/camera', function (req, res) {
  res.render('camera');
});
