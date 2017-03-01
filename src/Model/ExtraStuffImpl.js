class ExtraStuffImpl extends ExtraStuff {
    constructor (addSuger, addDoubleSuger, withoutSuger, addMilk, addDoubleMilk, withoutMilk){
        assert(addSuger instanceof Boolean);
        assert(addDoubleSuger instanceof Boolean);
        assert(withoutSuger instanceof Boolean);
        assert(addMilk instanceof Boolean);
        assert(addDoubleMilk instanceof Boolean);
        assert(withoutMilk instanceof Boolean);

        super();

        this._addSuger = addSuger;
        this._addDoubleSuger = addSuger;
        this._withoutSuger = addSuger;
        this._addMilk = addSuger;
        this._addDoubleMilk = addSuger;
        this._withoutMilk = addSuger;
}


    AddUpCost() {
    //TODO Implement method AddUpCost()

    }

    getAddSuger() {
        return this._addSuger;
    }

    getAddDoubleSuger() {
        return this._addDoubleSuger;
    }

    getWithoutSuger() {
        return this._withoutSuger;
    }

    getAddMilk() {
        return this._addMilk;
    }

    getAddDoubleMilk() {
        return this._addDoubleMilk;
    }

    getWithoutMilk() {
        return this._withoutMilk
    }

    static bilder() {
        return new ExtraStuffBuilder();
    }
}