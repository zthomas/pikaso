import Konva from 'konva';
import { History } from '../History';
import { Events } from '../Events';
import { Selection } from '../Selection';
import { Background } from '../Background';
import { ShapeModel } from '../shape/ShapeModel';
import type { Settings, DrawType } from '../types';
export declare class Board {
    readonly stage: Konva.Stage;
    readonly layer: Konva.Layer;
    readonly container: HTMLDivElement;
    readonly settings: Settings;
    readonly background: Background;
    readonly selection: Selection;
    activeDrawing: DrawType | null;
    readonly events: Events;
    readonly history: History;
    private shapesList;
    constructor(settings: Settings, events: Events, history: History);
    getDimensions(): {
        width: number;
        height: number;
    };
    getNodes(): (import("konva/lib/Group").Group | import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig>)[];
    get shapes(): ShapeModel<import("konva/lib/Group").Group | import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig>, import("konva/lib/Shape").ShapeConfig>[];
    addShape(shape: ShapeModel): void;
    setShapes(shapes: ShapeModel[]): void;
    rescale(): void;
    setActiveDrawing(mode: DrawType | null): void;
    getContainerTransform(): string;
    draw(): void;
}
