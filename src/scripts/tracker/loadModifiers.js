import {Modifier} from "./Modifier";

export function loadModifiers() {
    return [
        new Modifier({name: 'modifier-plus-ten'}),
        new Modifier({name: 'modifier-plus-five'}),
        new Modifier({name: 'modifier-plus-one'}),
        new Modifier({name: 'modifier-minus-ten', check: ({minimal, value}) => value >= 10 + minimal}),
        new Modifier({name: 'modifier-minus-five', check: ({minimal, value}) => value >= 5 + minimal}),
        new Modifier({name: 'modifier-minus-one', check: ({minimal, value}) => value >= 1 + minimal}),
    ];
}
