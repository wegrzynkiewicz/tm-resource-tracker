import {Resource} from "./Resource";

export function loadResources() {

    const points = new Resource({
        name: 'points',
        initialState: 20,
        increaseStateByProduction: () => 0,
    });

    const gold = new Resource({
        name: 'gold',
        minimalProduction: -5,
        increaseStateByProduction() {
            this.state.changeValue(this.production.value + points.state.value);
        },
    });

    const steel = new Resource({
        name: 'steel',
    });

    const titan = new Resource({
        name: 'titan',
    });

    const plant = new Resource({
        name: 'plant',
    });

    const heat = new Resource({
        name: 'heat',
    });

    const energy = new Resource({
        name: 'energy',
        increaseStateByProduction() {
            heat.state.changeValue(this.state.value);
            this.state.value = this.production.value;
            this.state.bind();
        },
    });

    return {
        points,
        gold,
        steel,
        titan,
        plant,
        energy,
        heat,
    }
}
