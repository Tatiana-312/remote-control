import {mouse, down, left, right, up } from "@nut-tree/nut-js";

export const moveCursor = async (command: string, value: number) => {
    switch (command) {
        case 'left':
            await mouse.move(left(value));
            break;
        case 'right':
            await mouse.move(right(value));
            break;
        case 'up':
            await mouse.move(up(value));
            break;
        case 'down':
            await mouse.move(down(value));
            break;
    }
}