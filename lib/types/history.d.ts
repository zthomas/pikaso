import Konva from 'konva';
import { UnknownObject } from './common';
export declare type HistoryNode = Konva.Stage | Konva.Layer | Konva.Shape | Konva.Group;
export declare type HistoryNodeWithChildren = Konva.Stage | Konva.Layer | Konva.Group;
export declare type HistoryHookFunction = (states: HistoryState[]) => void;
export interface HistoryState {
    nodes: HistoryNode[];
    snapshots: UnknownObject[];
}
export interface HistoryHooks {
    undo?: HistoryHookFunction;
    redo?: HistoryHookFunction;
    execute?: HistoryHookFunction;
}
