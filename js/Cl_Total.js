export default class Cl_Total {
    constructor() {
        this.totalpersonas = 0;
        this.totalhombres = 0;
        this.totalmujeres = 0;
    } 

    procesar(p) {
        this.totalpersonas++;
        if (p.sexo == "M") {
            this.totalhombres++;
        } else {
            this.totalmujeres++;
        }
    }

}