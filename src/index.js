let selectedItem = null;
let selectedCounterId = null;

function getCounterValue(name) {
    const counter = document.getElementById(name);
    return parseInt(counter.value.toString());
}

function setCounterValue(name, value) {
    const element = document.getElementById(name);
    if (element) {
        element.value = value;
        localStorage.setItem(name, value);
    }
}

function addCounterValue(resource, value) {
    const stateValue = getCounterValue(`state_${resource}`);
    setCounterValue(`state_${resource}`, stateValue + value);
}

function increaseStateByProduction(resource) {
    const productionValue = getCounterValue(`production_${resource}`);
    addCounterValue(resource, productionValue)
}

function restoreState(resource) {
    setCounterValue(`state_${resource}`, 0);
    setCounterValue(`production_${resource}`, 0);
}

function loadCounter(name) {
    const value = parseInt(localStorage.getItem(name));
    if (!isNaN(value)) {
        setCounterValue(name, value);
    }
}

const resources = {
    points: {
        restoreState(resource) {
            setCounterValue(`state_${resource}`, 20);
        },
        increaseStateByProduction() {
        },
    },
    gold: {
        restoreState,
        increaseStateByProduction(resource) {
            const productionValue = getCounterValue(`production_${resource}`);
            const pointsValue = getCounterValue(`state_points`);
            addCounterValue(resource, productionValue + pointsValue);
        }
    },
    steel: {
        restoreState,
        increaseStateByProduction
    },
    titan: {
        restoreState,
        increaseStateByProduction
    },
    plant: {
        restoreState,
        increaseStateByProduction
    },
    energy: {
        restoreState,
        increaseStateByProduction(resource) {
            const stateValue = getCounterValue(`state_${resource}`);
            setCounterValue(`state_${resource}`, 0);
            increaseStateByProduction(resource)
            addCounterValue('heat', stateValue);
        }
    },
    heat: {
        restoreState,
        increaseStateByProduction
    },
}

window.setSelected = function setSelected(event, type, resource) {
    if (selectedItem !== null) {
        selectedItem.classList.remove('resource--item__outline');
    }
    selectedItem = this;
    selectedItem.classList.add('resource--item__outline');
    selectedCounterId = `${type}_${resource}`;
}

window.setValue = function (event, value) {
    if (selectedCounterId === null) {
        return;
    }

    const stateValue = getCounterValue(selectedCounterId);
    setCounterValue(selectedCounterId, stateValue + value);
}

window.produce = function (event) {
    for (const [name, resource] of Object.entries(resources)) {
        resource.increaseStateByProduction(name);
    }
}

window.resetStates = function (event) {
    for (const [name, resource] of Object.entries(resources)) {
        resource.restoreState(name);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for (const [name] of Object.entries(resources)) {
        loadCounter(`state_${name}`);
        loadCounter(`production_${name}`);
    }
});
