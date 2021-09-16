import { Board } from '../Board';
import { Cropper } from '../Cropper';
import type { ExportImageConfig } from '../types';
export declare class Export {
    private readonly board;
    private readonly cropper;
    private readonly image;
    private readonly json;
    constructor(board: Board, cropper: Cropper);
    toImage(config?: Partial<ExportImageConfig>): string;
    toJson(): import("../types").JsonData;
}
