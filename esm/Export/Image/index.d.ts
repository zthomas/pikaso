import { Board } from '../../Board';
import type { ExportImageConfig } from '../../types';
export declare class ImageExport {
    private readonly board;
    constructor(board: Board);
    export(config?: Partial<ExportImageConfig>): string;
}
