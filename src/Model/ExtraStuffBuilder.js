class ExtraStuffBuilder {
    constructor() {
        this._addSuger = new Boolean(false);
        this._addDoubleSuger = new Boolean(false);
        this._withoutSuger = new Boolean(true);
        this._addMilk = new Boolean(false);
        this._addDoubleMilk = new Boolean(false);
        this._withoutMilk = new Boolean(true);
    }

    withAddSuger(addSuger) {
        assert(addSuger instanceof Boolean);

        this._addSuger = addSuger;
        return this;
    }



}