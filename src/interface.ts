import hotkeys from 'hotkeys-js';

export interface HotKeys {
    keys: string[]
    preventDefault?: boolean
    repeat?: boolean
    handler: (keys: string[]) => any
}

export interface HotkeysEvent {
    key: string;
    method: KeyHandler;
    mods: number[];
    scope: string;
    shortcut: string;
}

export interface KeyHandler {
    (keyboardEvent: KeyboardEvent, hotkeysEvent: HotkeysEvent): void | boolean;
}

export type Options = {
    preventDefault?: boolean; // 阻止默认事件 (Default: true)
    splitKey?: string; // 热键组合中的分割字符 (Default +)
    keyup?: boolean; // 触发 keyup 事件 (Default: undefined)
    keydown?: boolean; // 触发 keydown 事件 (Default: true)
};

export const KeyCodeMap = {
    ctrl: 'Control',
    space: ' ',
    enter: 'Enter',
    tab: 'Tab',
    delete: 'Delete',
    esc: 'Escape',
    alt: 'Alt',
    option: 'Alt',
    shift: 'Shift',
    back: 'Backspace',
    meta: 'Meta',
    command: "Meta",
    up: "ArrowUp",
    left: 'ArrowLeft',
    right: 'ArrowRight',
    bottom: "ArrowDown"
}
