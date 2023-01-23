import { mouse, Button, down, left, right, up } from "@nut-tree/nut-js";

export const drawSquare = async (value: number[]): Promise<void> => {
    try {
        const sideLength: number = value[0];
    
        await mouse.pressButton(Button.LEFT);
    
        mouse.config.mouseSpeed = 800;
        await mouse.move(right(sideLength));
        await mouse.move(down(sideLength));
        await mouse.move(left(sideLength));
        await mouse.move(up(sideLength))
    
        await mouse.releaseButton(Button.LEFT);
    } catch (err) {
        console.error("\x1b[31m%s\x1b[0m", "Result: Error! Please, don't leave the main screen!");
    }
};