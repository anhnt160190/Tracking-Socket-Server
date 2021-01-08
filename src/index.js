import express from 'express';
import socketIO from 'socket.io';
import { Events } from './event';
import cors from 'cors';
import { PeerServer } from 'peer';
import { logger } from './config';
import * as ChartService from './services/chart.service';

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

// middleware
io.use((socket, next) => {
  let token = socket.handshake.auth.token;
  if (!token || token !== 'MY_TOKEN') {
    logger.error(`FAKE DEVICE with token ${token}`);
    return next(new Error('authentication error'));
  }
  return next();
});

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

app.get('/map', function (req, res) {
  res.render('map');
});

app.get('/map_detail', function (req, res) {
  res.render('map_detail');
});

app.get('/api/chart/car_percent', ChartService.GetCarPercent);
app.get('/api/chart/car_color', ChartService.GetCarColor);
app.get('/api/chart/car_destiny', ChartService.GetCarDestiny);
app.get('/api/chart/accident', ChartService.GetCarAccident);
