
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

    withAddDoubleSuger(addDoubleSuger) {
        assert(addDoubleSuger instanceof Boolean);

        this._addDoubleSuger = addDoubleSuger;
        return this;
    }

    withWithoutSuger(withoutSuger) {
        assert(withoutSuger instanceof Boolean);

        this._withoutSuger = withoutSuger;
        return this;
    }

    withAddMilk(addMilk) {
        assert(addMilk instanceof Boolean);

        this._addMilk = addMilk;
        return this;
    }

    withAddDoubleMilk(addDoubleMilk) {
        assert(addDoubleMilk instanceof Boolean);

        this._addDoubleMilk = addDoubleMilk;
        return this;
    }

    withWithoutMilk(withoutMilk) {
        assert(withoutMilk instanceof Boolean);

        this._withoutMilk = withoutMilk;
        return this;
    }

    build() {
        return new ExtraStuffImpl(this._addSuger, this._addDoubleSuger, this._withoutSuger, this._addMilk, this._addDoubleMilk, this._withoutMilk);
    }

}