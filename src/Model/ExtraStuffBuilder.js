
class ExtraStuffBuilder {
    constructor() {
        this._allStuff = [];
    }

    withAddSuger(flag) {
        assert(addDoubleSuger instanceof Boolean);
        this._allStuff += new SigleStuff(flag, new Number(1));
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
        return new ExtraStuffImpl(this._allStuff);
    }

}