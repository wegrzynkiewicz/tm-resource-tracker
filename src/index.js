let selectedItem = null;
let selectedCounterId = null;
let minCounterValue = null;

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
    const stateValue = getCounterValue(`state-${resource}`);
    setCounterValue(`state-${resource}`, stateValue + value);
}

function increaseStateByProduction(resource) {
    const productionValue = getCounterValue(`production-${resource}`);
    addCounterValue(resource, productionValue)
}

function restoreState(resource) {
    setCounterValue(`state-${resource}`, 0);
    setCounterValue(`production-${resource}`, 0);
}

function loadCounter(name) {
    const value = parseInt(localStorage.getItem(name));
    if (!isNaN(value)) {
        setCounterValue(name, value);
    }
}

function refreshModifier(id, condition) {
    if (condition) {
        document.getElementById(id).removeAttribute('disabled');
    } else {
        document.getElementById(id).setAttribute('disabled', 'disabled');
    }
}

function refreshModifiers() {
    if (selectedCounterId === null) {
        return;
    }

    const stateValue = getCounterValue(selectedCounterId);

    refreshModifier('modifier-minus-ten', stateValue >= 10 + minCounterValue);
    refreshModifier('modifier-minus-five', stateValue >= 5 + minCounterValue);
    refreshModifier('modifier-minus-one', stateValue >= 1 + minCounterValue);
}

const resources = {
    points: {
        minStateValue: 0,
        restoreState(resource) {
            setCounterValue(`state-${resource}`, 20);
        },
        increaseStateByProduction() {
        },
    },
    gold: {
        minStateValue: -5,
        restoreState,
        increaseStateByProduction(resource) {
            const productionValue = getCounterValue(`production-${resource}`);
            const pointsValue = getCounterValue(`state-points`);
            addCounterValue(resource, productionValue + pointsValue);
        }
    },
    steel: {
        minStateValue: 0,
        restoreState,
        increaseStateByProduction
    },
    titan: {
        minStateValue: 0,
        restoreState,
        increaseStateByProduction
    },
    plant: {
        minStateValue: 0,
        restoreState,
        increaseStateByProduction
    },
    energy: {
        minStateValue: 0,
        restoreState,
        increaseStateByProduction(resource) {
            const stateValue = getCounterValue(`state-${resource}`);
            setCounterValue(`state-${resource}`, 0);
            increaseStateByProduction(resource)
            addCounterValue('heat', stateValue);
        }
    },
    heat: {
        minStateValue: 0,
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
    selectedCounterId = `${type}-${resource}`;

    switch (type) {
        case 'production':
            minCounterValue = 0;
            break;
        case 'state':
            minCounterValue = resources[resource].minStateValue;
            break;
    }

    refreshModifiers();
}

window.setValue = function (event, value) {
    if (selectedCounterId === null) {
        return;
    }

    const stateValue = getCounterValue(selectedCounterId);
    setCounterValue(selectedCounterId, stateValue + value);

    refreshModifiers();
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
        loadCounter(`state-${name}`);
        loadCounter(`production-${name}`);
    }
});
