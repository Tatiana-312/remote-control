import { httpServer } from "./src/http_server/index";
import { RawData, WebSocketServer } from 'ws';
import WebSocket from 'ws';
import { getValue } from "./src/utils/getValue";
import { getCommand } from "./src/utils/getCommand";
import { app } from "./app";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });
console.log(`Start WebSocket server on the 8080 port!`);

wss.on('connection', (ws: WebSocket.WebSocket): void => {
    ws.on('message', async (data: RawData): Promise<void> => {
        const stringData: string = data.toString();
        const value: number[] = getValue(stringData);
        const command: string = getCommand(stringData);

        console.log(`Command: ${stringData}`);
        await app(ws, command, value);
    });
});

wss.on('close', () => {
    console.log('Websocket server closed!')
  });

process.on('SIGINT', () => {
    console.log('Websocket server closed!');
    wss.close();
    httpServer.close();
    process.exit(0);
});