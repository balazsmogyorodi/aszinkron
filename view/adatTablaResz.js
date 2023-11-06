class AdatTablaResz{
    #adatok;
    #id;
    #trElem;
    #urlapAdat
    constructor(id, adatok, szuloElem, urlapAdat){
        this.#urlapAdat = urlapAdat;
        this.#id = id;
        this.#adatok = adatok
        szuloElem.append("<tr>");
        console.log(szuloElem);
        this.#trElem = szuloElem.children("tr:last-child");
        this.#trElem.attr('id', `${this.#id}`);
        this.#trElem.append(this.#kiiras())
        $(`.torles`).on("click",()=>{
            this.#torlestrigger();
        })
        $(`.modosit${this.#id}`).on("click",()=>{
            this.#modositTrigger();
        })


    }

    getTrElem(){
        return this.#trElem;
    }
    getUrlapElem(){
        return this.#urlapAdat;
    }

    getId(){
        return this.#id
    }

    getAdatok(){
        return this.#adatok
    }





    #kiiras(){
        let txt = "";
        for (const key in this.#adatok) {
            txt += `<td>${this.#adatok[key]}</td>`
        }
        txt += `<td><button class="modosit${this.#id}" ">áttírás</button></td><td><button class="torles">törlés</button></td>`
        return txt;
    }
    #torlestrigger(){
        window.dispatchEvent(new CustomEvent("torles", {detail:this}));
    }

    #modositTrigger(){
        window.dispatchEvent(new CustomEvent("modosit", {detail:this}));
    }

}
export default AdatTablaResz;