import { mouse } from '@nut-tree/nut-js';
import WebSocket from 'ws';
import { drawCircle } from './src/drawing/drawCircle';
import { drawRectangle } from './src/drawing/drawRectangle';
import { drawSquare } from './src/drawing/drawSquare';
import { navigation } from './src/navigation/navigation';
import { printScreen } from './src/printScreen/printScreen';

export const app = async (ws: WebSocket.WebSocket, command: string, value: number[]): Promise<void> => {
    switch (command) {
        case 'mouse_position':
            const coordinates = await mouse.getPosition();
            const result = `${command} ${coordinates.x},${coordinates.y}`
            console.log(`Result: ${result}`);
            ws.send(result);
            break;
        case 'draw_circle':
            await drawCircle(value);
            ws.send(`${command}_${value}`);
            break;
        case 'draw_rectangle':
            await drawRectangle(value);
            ws.send(`${command}_${value}`);
            break;
        case 'draw_square':
            await drawSquare(value);
            ws.send(`${command}_${value}`);
            break;
        case 'prnt_scrn':
            const base64 = await printScreen(command);
            ws.send(`${command} ${base64}`);
            break;
        default :
            await navigation(command, value);
            ws.send(`${command}_${value}`);
            break;
    }
};