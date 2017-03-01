
class ExtraStuff {
    constructor() {
        if (new.target === ExtraStuff) {
            throw new TypeError("Cannot construct Vehicle instances directly");
        }
    }
    getAddSuger() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }

    getAddDoubleSuger() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }

    getWithoutSuger() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }

    getAddMilk() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }

    getAddDoubleMilk() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }

    getWithoutMilk() {
        throw new TypeError("Cannot construct Vehicle instances directly");
    }
}