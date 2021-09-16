import type { EventListenerCallbackEvent, EventListenerNames, ListenerCallback } from '../types';
export declare class Events {
    private listeners;
    on(eventName: EventListenerNames | EventListenerNames[], callback: ListenerCallback): void;
    off(eventName: EventListenerNames | EventListenerNames[], callback: ListenerCallback): void;
    emit(eventName: EventListenerNames, data?: EventListenerCallbackEvent): void;
}
