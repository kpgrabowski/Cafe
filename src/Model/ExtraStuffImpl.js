class ExtraStuffImpl extends ExtraStuff {
    constructor (allStuff) {
        super();
        this._allStuff = allStuff;
    }
    AddUpCost() {
    //TODO Implement method AddUpCost()

    }

    getAddSuger() {

        return this._addSuger;
    }

    getAddDoubleSuger(){

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

class SingleStuff{

    _checkRepresentation() {
        assert(this.flag instanceof Boolean);
        assert(this.cost instanceof Number);
    }

    constructor(flag, cost){
    assert(this.flag instanceof Boolean);
    assert(this.cost instanceof Number);
        this.flag = flag;
        this.cost = cost;
    }
}