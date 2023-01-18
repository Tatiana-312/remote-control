import { httpServer } from "./src/http_server/index";
import { RawData, WebSocketServer } from 'ws';
import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
});

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (data: RawData) => {
      console.log('received: %s', data);

      ws.send(data.toString());
    });
});