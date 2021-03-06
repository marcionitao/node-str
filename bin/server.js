'use strict';
// importar as dependencies
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const hostname = '0.0.0.0'; // openshift serve
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

// add hostname to Runing in Openshift serve
server.listen(port, hostname, () => {
  console.log(`serve runnig at http://${hostname}:${port}/`);
});

server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando no port: ' + port);

// função para resolver a situação do porto, nem sempre é possivel ser o 3000
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;

}

// Para tratar erros do servidor
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'require elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + 'is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// funçao para debug
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
}