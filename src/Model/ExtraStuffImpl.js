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


    _checkRepresentation() {
        assert(this._addSuger instanceof Boolean);
        assert(this._addDoubleSuger instanceof Boolean);
        assert(this._withoutSuger instanceof Boolean);
        assert(this._addMilk instanceof Boolean);
        assert(this._addDoubleMilk instanceof Boolean);
        assert(this._withoutMilk instanceof Boolean);
    }

    AddUpCost() {
    //TODO Implement method AddUpCost()

    }

    getAddSuger() {
        this._checkRepresentation();
        return this._addSuger;
    }

    getAddDoubleSuger() {
        this._checkRepresentation();
        return this._addDoubleSuger;
    }

    getWithoutSuger() {
        this._checkRepresentation();
        return this._withoutSuger;
    }

    getAddMilk() {
        this._checkRepresentation();
        return this._addMilk;
    }

    getAddDoubleMilk() {
        this._checkRepresentation();
        return this._addDoubleMilk;
    }

    getWithoutMilk() {
        this._checkRepresentation();
        return this._withoutMilk
    }

    static bilder() {
        return new ExtraStuffBuilder();
    }
}