import Jimp from 'jimp';
import { mouse, screen, Region } from "@nut-tree/nut-js";

export const printScreen = async () => {
    const size = 200;
    const coordinates = await mouse.getPosition();
    const img = await screen.grabRegion(new Region(coordinates.x, coordinates.y, size, size));
    const imgRGB = await img.toRGB();

    const jimp = new Jimp({
        data: imgRGB.data,
        width: imgRGB.width,
        height: imgRGB.height,
    });

    const base64Image = await jimp.getBase64Async(Jimp.MIME_PNG);
    const base64 = base64Image.split(',')[1];

    return base64;
}