import {Counter} from "./Counter";

export class Resource {

    constructor({increaseStateByProduction, initialState, minimalProduction, name}) {
        this.name = name;

        this.production = new Counter({
            minimal: minimalProduction,
            name: `production_${name}`,
        });

        this.state = new Counter({
            initial: initialState || 0,
            name: `state_${name}`,
        });

        if (increaseStateByProduction) {
            this.increaseStateByProduction = increaseStateByProduction;
        }
    }

    bind() {
        this.production.bind();
        this.state.bind();
    }

    increaseStateByProduction() {
        this.state.changeValue(this.production.value);
    }

    reset() {
        this.production.reset();
        this.state.reset();
    }
}
