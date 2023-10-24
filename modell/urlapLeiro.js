import { adatLeiras } from "./adat.js";

class UrlapLeiro{
    #adat
    #adatLeiras
   
    constructor() {
        this.#adatLeiras =  adatLeiras;
    }
    get adat() {
        return this.#adat;
    }
    getAdatLeiras() {
        return this.#adatLeiras;
    }

    set adat(adat){
        this.#adat = adat;
    }


}
export default UrlapLeiro;