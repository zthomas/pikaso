import { Board } from '../Board';
import { ShapeModel } from '../shape/ShapeModel';
import type { Filters } from '../types';
export declare class Filter {
    private board;
    constructor(board: Board);
    apply(shapes: ShapeModel[], filter: Filters): void;
    remove(shapes: ShapeModel[], name: Filters['name']): void;
    private addCache;
    private clearCache;
}
