import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class RectModel extends ShapeModel<Konva.Rect, Konva.RectConfig> {
    get type(): keyof Shapes;
}
