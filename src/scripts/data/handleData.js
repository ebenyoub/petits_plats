class Data {
    constructor() {
        this.ids = [];
    }

    set cacheData(datas) {
        this.data = datas;
    }

    get allData() {
        return this.data;
    }

    set selectedIds(selected) {
        this.ids = selected;
    }

    get selectedIds() {
        return this.ids;
    }

    get allIds() {
        const ids = this.data.map(item => item.id);
        return ids;
    }
}

const data = new Data();

export default data;

