import { Board } from '../Board';
import type { JsonData, Shapes } from '../types';
export declare class Import {
    private readonly board;
    private readonly shapes;
    constructor(board: Board, shapes: Shapes);
    json({ stage, layer, background, shapes }: JsonData): Promise<void>;
}
