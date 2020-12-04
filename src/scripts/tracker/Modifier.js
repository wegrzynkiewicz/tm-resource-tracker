export class Modifier {

    constructor({name, check}) {
        this.name = name;
        this.actived = false;
        this.element = document.getElementById(this.name);
        if (check) {
            this.check = check;
        }
    }

    change(value) {
        if (value === true && this.actived === false) {
            this.actived = true;
            this.element.removeAttribute('disabled');
        } else if (value === false && this.actived === true) {
            this.actived = false;
            this.element.setAttribute('disabled', 'disabled');
        }
    }

    check(selectedCounter) {
        return true;
    }

    process(machine) {
        const {selectedCounter} = machine;
        this.change(selectedCounter === null ? false : this.check(selectedCounter));
    }
}
