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

    set(value) {
        this.value = value;
        this.save();
        this.bind();
    }

    changeValue(value) {
        this.set(this.value + value);
    }

    reset() {
        this.set(this.initial);
    }

    save() {
        localStorage.setItem(this.name, this.value.toString());
    }
}
