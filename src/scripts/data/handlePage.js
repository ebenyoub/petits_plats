class Page {
    constructor() {
        this._width = window.innerWidth;
        this._observer;
        this._performance = false;
        this._native = [];
        this._functionnal = [];
        this._filter = false;

        window.addEventListener("resize", () => {
            this._width = window.innerWidth;
        });
    }

    set width(size) {
        this._width = size;
    }

    get width() {
        return this._width;
    }

    set performance(state) {
        this._performance = state;
    }

    get performance() {
        return this._performance;
    }

    set observer(intersection) {
        this._observer = intersection;
    }

    get observer() {
        return this._observer;
    }

    set filter(state) {
        this._filter = state;
    }

    get filter() {
        return this._filter;
    }

    set native(time) {
        this._native.push(time);
    }

    get native() {
        return this._native;
    }

    set functionnal(time) {
        this._functionnal.push(time);
    }

    get functionnal() {
        return this._functionnal;
    }
}

const page = new Page();

export default page;