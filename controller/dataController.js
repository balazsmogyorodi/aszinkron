import DataService from "../modell/dataService.js";
import HibaView from "../view/hibaView.js";
import DataView from "../view/dataView.js";
import UrlapLeiro from "../modell/urlapLeiro.js";
import adatTablaModositas from "../view/adatTablaModoosit.js";

class DataController {
  #adatok = [];
  #urlapAdat;
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData(
      "../adat.json",
      this.megjelenit,
      this.megjelenitHiba
    );

    $(window).on(`torles`, (event) => {
      const obj = event.detail;
      const urlapElem = obj.getUrlapElem();
      urlapElem.adatTroles(obj.getId());
      console.log(urlapElem.getAdatok())
      $("table").remove();
      this.megjelenit(urlapElem.getAdatok())
    


     
    });
    $(window).on('modosit',(event)=>{
      const obj = event.detail;
      const urlapElem = obj.getUrlapElem();
      const tableElem = obj.getTrElem();
      console.log(tableElem)
      tableElem.empty();
      new adatTablaModositas(obj.getAdatok(), tableElem, urlapElem.getAdatLeiras());



    })

  }

  megjelenit(lista) {
    console.log(lista);
    const cimkek = [];
    const urlapadat = new UrlapLeiro();
    urlapadat.setAdatok(lista);
    // this.#adatok = urlapadat.getAdatLeiras();
    console.log(urlapadat.getAdatLeiras());
    for (const key in urlapadat.getAdatLeiras()) {
      console.log(urlapadat.getAdatLeiras()[key].megjelenes);
      cimkek.push(urlapadat.getAdatLeiras()[key].megjelenes);
    }
    console.log(cimkek);
    new DataView(lista, $(".lista"), cimkek, urlapadat);
  }



  megjelenitHiba(error) {
    console.log(error);
    new HibaView(error, $(".lista"));
  }
}
export default DataController;
