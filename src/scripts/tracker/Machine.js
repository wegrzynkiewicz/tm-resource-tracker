import {Modifier} from "./Modifier";

export class Machine {

    constructor({modifiers, resources}) {
        this.modifiers = modifiers;
        this.resources = resources;
        this.selectedElement = null;
        this.selectedCounter = null;
    }

    clickChange(element) {
        const value = parseInt(element.dataset.change);
        this.selectedCounter.changeValue(value);
        this.refreshModifiers();
    }

    clickProduce() {
        for (const resource of Object.values(this.resources)) {
            resource.increaseStateByProduction();
        }
        this.refreshModifiers();
    }

    clickReset() {
        for (const resource of Object.values(this.resources)) {
            resource.reset();
        }
        this.refreshModifiers();
    }

    clickResource(element) {
        if (this.selectedElement !== null) {
            this.selectedElement.classList.remove('resource--selectable__outline');
        }
        this.selectedElement = element;
        this.selectedElement.classList.add('resource--selectable__outline');

        const {type, resource} = element.dataset;
        this.selectedCounter = this.resources[resource][type];

        this.refreshModifiers();
    }

    refreshModifiers() {
        for (const modifier of this.modifiers) {
            modifier.process(this);
        }
    }

    registerHandler(querySelector, method) {
        document.querySelectorAll(querySelector).forEach((element) => {
            element.addEventListener('click', () => this[method](element));
        });
    }
}
