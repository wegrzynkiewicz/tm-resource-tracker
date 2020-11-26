import {idGenerator} from "incstr";

export function createShortcut() {
    const shortcuts = new Map();
    const generator = idGenerator();
    return (name) => {
        if (!shortcuts.has(name)) {
            const value = generator();
            shortcuts.set(name, value);
        }
        return shortcuts.get(name);
    };
}
