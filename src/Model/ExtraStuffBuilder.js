
class ExtraStuffBuilder {
    constructor() {
        this._allStuff = [];
    }

    withAddSuger(flag) {
        assert(addDoubleSuger instanceof Boolean);
        this._allStuff += new SigleStuff(flag, new Number(1));
        return this;
    }

    withAddDoubleSuger(flag) {
        assert(addDoubleSuger instanceof Boolean);

        this._allStuff += new SigleStuff(flag, new Number(2));
        return this;
    }

    withWithoutSuger(flag) {
        assert(withoutSuger instanceof Boolean);

        this._allStuff += new SigleStuff(flag, new Number(0));
        return this;
    }

    withAddMilk(flag) {
        assert(addMilk instanceof Boolean);

        this._allStuff += new SigleStuff(flag, new Number(2));
        return this;
    }

    withAddDoubleMilk(flag) {
        assert(addDoubleMilk instanceof Boolean);

        this._allStuff += new SigleStuff(flag, new Number(4));
        return this;
    }

    withWithoutMilk(flag) {
        assert(withoutMilk instanceof Boolean);

        this._allStuff += new SigleStuff(flag, new Number(0));
        return this;
    }

    build() {
        return new ExtraStuffImpl(this._allStuff);
    }

}