const {idGenerator} = require('incstr');

exports.createShortcut = () => {
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
