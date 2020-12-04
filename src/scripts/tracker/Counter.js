export class Counter {

    constructor({minimal, name, initial}) {
        this.counter = document.getElementById(name);
        this.initial = initial || 0;
        this.minimal = minimal || 0;
        this.name = name;
        this.value = parseInt(localStorage.getItem(this.name)) || this.initial;
        this.bind();
    }

    bind() {
        if (this.counter) {
            this.counter.value = this.value.toString();
        }
    }

    changeValue(value) {
        this.value += value;
        this.save();
        this.bind();
    }

    reset() {
        this.value = this.initial;
        this.save();
        this.bind();
    }

    save() {
        localStorage.setItem(this.name, this.value.toString());
    }
}
