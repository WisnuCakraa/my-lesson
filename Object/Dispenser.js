
class Galon {
    constructor(liter) {
        this.air = liter || 1000
    }
    sedot() {
        if (this.air > 0) {
            this.air -= 100
        }
    }
}

class Keran {
    constructor(onTekan, onLepas) {
        this.onTekan = onTekan;
        this.onLepas = onLepas;
    }
    tekan() {
        console.log('keran ditekan');
        this.onTekan();
    }
    lepas() {
        console.log('keran dilepas');
        this.onLepas();
    }
}

class Dispenser {
    constructor() {
        this.galon = null;
        this.keran = null;
    }
    gantiGalon(galon){
        this.galon = galon;
    }
    pasangKeran(keran){
        this.keran = keran
    }
}

let MyDispenser = new Dispenser();
MyDispenser.gantiGalon(new Galon());
MyDispenser.pasangKeran(
    new Keran(()=> {
            MyDispenser.galon.sedot();
            console.log(`galon sisa ${MyDispenser.galon.air} liter`);
    }, 
    () => {

    }
    ));

MyDispenser.keran.tekan()
MyDispenser.keran.lepas()

MyDispenser.keran.tekan()
MyDispenser.keran.lepas()

MyDispenser.keran.tekan()
MyDispenser.keran.lepas()

MyDispenser.keran.tekan()
MyDispenser.keran.lepas()
