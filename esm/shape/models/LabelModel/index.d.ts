import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeModel } from '../../ShapeModel';
import { ShapeConfig, Shapes } from '../../../types';
export declare class LabelModel extends ShapeModel<Konva.Label, Konva.LabelConfig> {
    private isEditingEnabled;
    constructor(board: Board, node: Konva.Label, config?: ShapeConfig);
    get type(): keyof Shapes;
    get isEditing(): boolean;
    get textNode(): import("konva/lib/shapes/Text").Text;
    get tagNode(): import("konva/lib/shapes/Label").Tag;
    updateTag(attributes: Partial<Konva.TagConfig>): void;
    updateText(attributes: Partial<Konva.TextConfig>): void;
    private transform;
    private inlineEdit;
    private changeText;
    private setInputFocus;
}
