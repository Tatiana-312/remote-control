import {mouse, down, left, right, up } from "@nut-tree/nut-js";

export const navigation = async (command: string, value: number) => {
    switch (command) {
        case 'mouse_left':
            await mouse.move(left(value));
            break;
        case 'mouse_right':
            await mouse.move(right(value));
            break;
        case 'mouse_up':
            await mouse.move(up(value));
            break;
        case 'mouse_down':
            await mouse.move(down(value));
            break;
    }
}