import { httpServer } from "./src/http_server/index";
import { RawData, WebSocketServer } from 'ws';
import { mouse, Button, right, down, left, up } from "@nut-tree/nut-js";
import { getValue } from "./src/utils/getValue";
import { getCommand } from "./src/utils/getCommand";
import { navigation } from "./src/navigation/navigation";
import { drawCircle } from "./src/drawing/drawCircle";
import { drawSquare } from "./src/drawing/drawSquare";
import { drawRectangle } from "./src/drawing/drawRectangle";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', async (data: RawData) => {
        const stringData: string = data.toString();
        // console.log(stringData);
        const value = getValue(stringData);
        const command = getCommand(stringData);

        switch (command) {
            case 'mouse_position':
                const coordinates = await mouse.getPosition();
                ws.send(`${command} ${coordinates.x},${coordinates.y}`);
                break;
            case 'draw_circle':
                drawCircle(value);
                ws.send(`${command}_${value}`);
                break;
            case 'draw_rectangle':
                drawRectangle(value);
                ws.send(`${command}_${value}`);
                break;
            case 'draw_square':
                await drawSquare(value);
                ws.send(`${command}_${value}`);
                break;
            default :
                await navigation(command, value);
                ws.send(`${command}_${value}`);
                break;
        }
    });
});

wss.on('close', () => {
    console.log('Service closed');
});

process.on('SIGINT', () => { 
    httpServer.close(() => process.exit());
    wss.close();
    console.log('Service closed');
    process.exit();
 })