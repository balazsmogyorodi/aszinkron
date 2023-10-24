class AdatTablaResz{
    #adatok;
    #id;
    #trElem;
    constructor(id, adatok, szuloElem){
        this.#id = id;
        this.#adatok = adatok
        console.log(adatok);
        szuloElem.append("<tr>");
        this.#trElem = szuloElem.children("tr:last-child");
        this.#trElem.addClass(`#${this.#id}_sor`)
        this.#trElem.append(this.#kiiras())
        $(`.torles${this.#id}`).on("click",()=>{
            this.#torlestrigger();
        })
    }


    #kiiras(){
        let txt = "";
        for (const key in this.#adatok) {
            txt += `<td>${this.#adatok[key]}</td>`
        }
        txt += `<td><button class="modósit${this.#id}">áttírás</button></td><td><button class="torles${this.#id}">törlés</button></td>`
        return txt;
    }
    #torlestrigger(){
        window.dispatchEvent(new CustomEvent("torles", {detail:this.#id}));
    }

}
export default AdatTablaResz;