import { mouse, Button, down, left, right, up } from "@nut-tree/nut-js";

export const drawSquare = async (value: number) => {
    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(value));
    await mouse.move(down(value));
    await mouse.move(left(value));
    await mouse.move(up(value))

    await mouse.releaseButton(Button.LEFT);
};