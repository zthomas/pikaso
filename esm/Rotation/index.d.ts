import { Board } from '../Board';
export declare class Rotation {
    private readonly board;
    constructor(board: Board);
    transform(theta: number): void;
    straighten(theta: number): void;
}
