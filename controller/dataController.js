import DataService from "../modell/dataService.js";
import HibaView from "../view/hibaView.js";
import DataView from "../view/dataView.js";
import UrlapLeiro from "../modell/urlapLeiro.js";

class DataController {
    #adatok={}
    constructor() {
       
       this.#adatok={}
        this.dataService = new DataService()
        this.dataService.getData("../adat.json", this.megjelenit, this.megjelenitHiba);


        $(window).on(`${}torles`,(event)=>{
            console.log(event.detail);
            $(`#${event.detail}_sor`).remove()


        })
        
    }

    megjelenit(lista) {
        const cimkek = [] 
        const urlapadat = new UrlapLeiro();
        console.log(urlapadat)
       // this.#adatok = urlapadat.getAdatLeiras();
        console.log(urlapadat.getAdatLeiras())
        for (const key in urlapadat.getAdatLeiras()) {
            console.log(urlapadat.getAdatLeiras()[key]);
            cimkek.push(urlapadat.getAdatLeiras()[key].megjelenes);
            }
        console.log(cimkek)
        new DataView(lista, $(".lista"), cimkek)
    }

    megjelenitHiba(error) {
        console.log(error)
        new HibaView(error, $(".lista"));
    }


}
export default DataController;