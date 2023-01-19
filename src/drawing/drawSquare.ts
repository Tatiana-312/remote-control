import { mouse, Button, down, left, right, up } from "@nut-tree/nut-js";

export const drawSquare = async (value: number[]) => {
    const sideLength = value[0];
    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(sideLength));
    await mouse.move(down(sideLength));
    await mouse.move(left(sideLength));
    await mouse.move(up(sideLength))

    await mouse.releaseButton(Button.LEFT);
};