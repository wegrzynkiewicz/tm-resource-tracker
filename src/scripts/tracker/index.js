import {detectWebpSupport} from "./detectWebpSupport";
import {loadModifiers} from "./loadModifiers";
import {loadResources} from "./loadResources";
import {Machine} from "./Machine";

(() => {
    detectWebpSupport().catch(() => {
        document.body.classList.remove('webp');
    });
    document.addEventListener('DOMContentLoaded', () => {
        const modifiers = loadModifiers();
        const resources = loadResources();
        const machine = new Machine({modifiers, resources});
        machine.registerHandler('[data-resource]', 'clickResource');
        machine.registerHandler('[data-produce]', 'clickProduce');
        machine.registerHandler('[data-reset]', 'clickReset');
        machine.registerHandler('[data-change]', 'clickChange');
    });
})();
