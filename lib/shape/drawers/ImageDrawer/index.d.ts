import Konva from 'konva';
import { Board } from '../../../Board';
import { ImageModel } from '../../models/ImageModel';
export declare class ImageDrawer {
    private board;
    constructor(board: Board);
    insert(file: File | string, config?: Partial<Konva.ImageConfig>): Promise<ImageModel>;
}
