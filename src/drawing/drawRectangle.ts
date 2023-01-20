import { mouse, Button, down, left, right, up } from "@nut-tree/nut-js";

export const drawRectangle = async (value: number[]): Promise<void> => {
    const width: number = value[0];
    const height: number = value[1];

    await mouse.pressButton(Button.LEFT);

    mouse.config.mouseSpeed = 800;
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height))

    await mouse.releaseButton(Button.LEFT);
};