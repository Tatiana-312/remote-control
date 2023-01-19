import { mouse, Button, down, left } from "@nut-tree/nut-js";

export const drawCircle = async (value: number[]) => {
    const radius = value[0];
    await mouse.pressButton(Button.LEFT);

        for (let n = 0; n <= 2 * Math.PI; n += 0.01 * Math.PI) {
            // let p = await mouse.getPosition();
            let x1 = radius * Math.cos(n);
            let y1 = radius * Math.sin(n);
            await mouse.move(down(y1));
            await mouse.move(left(x1));
            
            // await mouse.setPosition({x: x1, y: y1});
        }

    await mouse.releaseButton(Button.LEFT);
}