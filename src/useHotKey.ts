import { onUnmounted } from 'vue'
import hotkeys, { HotkeysEvent, KeyHandler } from 'hotkeys-js';
import manager from './hotkeyManager'
import { HotKeys, Options } from "./interface"

export default (hotKeys: HotKeys[]): () => void => {
    hotKeys.forEach((hotkey) => manager.registerHotKey(hotkey))
    onUnmounted(() => {
        hotKeys.forEach((hk) => manager.removeHotKey(hk))
    })
    return () => {
        hotKeys.map((hk: HotKeys) => () => {
            manager.removeHotKey(hk)
        })
    }
}

//, options: Options = {}
export const useHotkeys = (keys: string, callback: (event: KeyboardEvent, handler: HotkeysEvent) => void) => {
    // todo 代码写在这
}
