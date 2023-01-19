import { httpServer } from "./src/http_server/index";
import { RawData, WebSocketServer } from 'ws';
import { mouse, MouseClass, right, left, up, down } from "@nut-tree/nut-js";
import { getValue } from "./src/utils/getValue";
import { getCommand } from "./src/utils/getCommand";
import { moveCursor } from "./src/navigation/moveCursor";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
});

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', async (data: RawData) => {
        const stringData: string = data.toString();
        const value = getValue(stringData);
        const command = getCommand(stringData);

        moveCursor(command, value);

        ws.send(stringData);
    });
});