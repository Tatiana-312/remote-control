import { httpServer } from "./src/http_server/index";
import { RawData, WebSocketServer } from 'ws';
import { mouse, MouseClass, right, left, up, down } from "@nut-tree/nut-js";
import { getValue } from "./src/utils/getValue";
import { getCommand } from "./src/utils/getCommand";
import { navigation } from "./src/navigation/navigation";

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
        console.log(stringData);
        const value = getValue(stringData);
        const command = getCommand(stringData);

        if (command === 'mouse_position') {
            const p = await mouse.getPosition();
            ws.send(`${command} ${p.x},${p.y}`)
        } else {
            await navigation(command, value);
            ws.send(`${command}_${value}`);
        }
    });
});