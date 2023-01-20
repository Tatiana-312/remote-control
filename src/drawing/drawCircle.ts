import { mouse, Button, Point } from "@nut-tree/nut-js";

export const drawCircle = async (value: number[]): Promise<void> => {
    const radius: number = value[0];
    const point: Point = await mouse.getPosition();
    const x0: number = point.x;
    const y0: number = point.y;
    mouse.setPosition({x: x0 + radius, y: y0});
    await mouse.pressButton(Button.LEFT);

        for (let angle = 0; angle < 360; angle++) {
            const x = x0 + radius * Math.cos(angle * Math.PI / 180);
            const y = y0 + radius * Math.sin(angle * Math.PI / 180);

            mouse.config.mouseSpeed = 800;
            await mouse.move([{x, y}]);
        }

    await mouse.releaseButton(Button.LEFT);
};