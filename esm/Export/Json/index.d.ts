import { Board } from '../../Board';
import type { JsonData } from '../../types';
export declare class JsonExport {
    private readonly board;
    constructor(board: Board);
    export(): JsonData;
    private nodeToObject;
}
