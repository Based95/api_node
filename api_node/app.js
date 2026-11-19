const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido, Roberto\n');
  } else if (req.url === '/estado') {
    const estado = {
      servicio: 'api_node',
      hostname: os.hostname(),
      uptime_segundos: process.uptime(),
      fecha: new Date().toISOString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(estado, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada\n');
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor Node.js escuchando en el puerto 3000');
});