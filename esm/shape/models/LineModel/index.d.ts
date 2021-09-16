import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class LineModel extends ShapeModel<Konva.Line, Konva.LineConfig> {
    get type(): keyof Shapes;
}
