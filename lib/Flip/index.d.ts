import { Board } from '../Board';
import { ShapeModel } from '../shape/ShapeModel';
export declare class Flip {
    private readonly board;
    constructor(board: Board);
    horizontal(shapes?: ShapeModel[]): void;
    vertical(shapes?: ShapeModel[]): void;
}
