import Konva from 'konva';
import type { Events } from '../Events';
import type { HistoryNode, HistoryHooks, HistoryState, Settings } from '../types';
export declare class History {
    private list;
    private step;
    private settings;
    private events;
    constructor(settings: Partial<Settings>, events: Events);
    getStep(): number;
    getList(): {
        container: import("konva/lib/Stage").Stage | import("konva/lib/Layer").Layer;
        states: HistoryState[];
        hooks?: HistoryHooks | undefined;
    }[];
    getState(): {
        container: import("konva/lib/Stage").Stage | import("konva/lib/Layer").Layer;
        states: HistoryState[];
        hooks?: HistoryHooks | undefined;
    };
    create(container: Konva.Stage | Konva.Layer, node: HistoryNode | HistoryNode[], hooks?: HistoryHooks): void;
    undo(): void;
    redo(): void;
    jump(to: number): void;
    private getNodeState;
    private applyAttributes;
    private getNodesTree;
    private getNodeAttributes;
    private getEventData;
    private onKeyDown;
}
