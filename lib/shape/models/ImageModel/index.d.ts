import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class ImageModel extends ShapeModel<Konva.Image, Konva.ImageConfig> {
    get type(): keyof Shapes;
}
