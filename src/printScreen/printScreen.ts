import Jimp from 'jimp';
import { mouse, screen, Region, Point, Image } from "@nut-tree/nut-js";

export const printScreen = async (command: string) => {
    try {
        const size: number = 200;
        const coordinates: Point = await mouse.getPosition();
        const region: Region = new Region(coordinates.x, coordinates.y, size, size)
        await screen.highlight(region)
        const img: Image = await screen.grabRegion(region);
        const imgRGB: Image = await img.toRGB();
    
        const jimp = new Jimp({
            data: imgRGB.data,
            width: imgRGB.width,
            height: imgRGB.height,
        });
    
        const base64Image: string = await jimp.getBase64Async(Jimp.MIME_PNG);
        const base64: string = base64Image.split(',')[1];
    
        console.log(`Result: ${command} ${base64.slice(0, 300)}...`)
    
        return base64;
    } catch (err) {
        console.error("\x1b[31m%s\x1b[0m", "Result: Error! Please, don't leave the main screen!");
    }

}