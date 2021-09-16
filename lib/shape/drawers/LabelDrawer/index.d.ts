import Konva from 'konva';
import { Board } from '../../../Board';
import { LabelModel } from '../../models/LabelModel';
export declare class LabelDrawer {
    private readonly board;
    constructor(board: Board);
    insert(config: {
        container: Konva.LabelConfig;
        text: Konva.TextConfig;
        tag?: Konva.TagConfig;
    }): LabelModel;
}
