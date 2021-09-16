import Konva from 'konva';
import type { LineDrawer } from '../shape/drawers/LineDrawer';
import type { RectDrawer } from '../shape/drawers/RectDrawer';
import type { ArrowDrawer } from '../shape/drawers/ArrowDrawer';
import type { LabelDrawer } from '../shape/drawers/LabelDrawer';
import type { ImageDrawer } from '../shape/drawers/ImageDrawer';
import type { CircleDrawer } from '../shape/drawers/CircleDrawer';
import type { EllipseDrawer } from '../shape/drawers/EllipseDrawer';
import type { PolygonDrawer } from '../shape/drawers/PolygonDrawer';
import type { TriangleDrawer } from '../shape/drawers/TriangleDrawer';
import type { PencilDrawer } from '../shape/drawers/PencilDrawer';
export declare interface Shapes {
    line: LineDrawer;
    rect: RectDrawer;
    arrow: ArrowDrawer;
    label: LabelDrawer;
    image: ImageDrawer;
    circle: CircleDrawer;
    ellipse: EllipseDrawer;
    triangle: TriangleDrawer;
    polygon: PolygonDrawer;
    pencil: PencilDrawer;
}
export declare interface IShape {
    insert: (config: Konva.ShapeConfig) => void;
}
export declare interface ShapeConfig {
    transformer?: Konva.TransformerConfig;
    selectable?: boolean;
}
