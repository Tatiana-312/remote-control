import {mouse, down, left, right, up } from "@nut-tree/nut-js";

export const navigation = async (command: string, value: number[]): Promise<void> => {
    const amountOfPx: number = value[0];
    switch (command) {
        case 'mouse_left':
            await mouse.move(left(amountOfPx));
            break;
        case 'mouse_right':
            await mouse.move(right(amountOfPx));
            break;
        case 'mouse_up':
            await mouse.move(up(amountOfPx));
            break;
        case 'mouse_down':
            await mouse.move(down(amountOfPx));
            break;
    };
};