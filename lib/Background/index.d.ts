import { Board } from '../Board';
import { ImageModel } from '../shape/models/ImageModel';
import { RectModel } from '../shape/models/RectModel';
export declare class Background {
    image: ImageModel;
    overlay: RectModel;
    private board;
    constructor(board: Board);
    get nodes(): (import("konva/lib/shapes/Rect").Rect | import("konva/lib/shapes/Image").Image)[];
    getPosition(): {
        x: number;
        y: number;
    };
    setImageFromFile(file: File): Promise<void>;
    setImageFromUrl(url: string): Promise<void>;
    fill(color: string): void;
}
