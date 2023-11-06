class adatTablaModositasIras{
    #txt;
    #urlapLeiro;
    #adat;
    #inputElem;
    #value
    constructor(urlapLeiro, adat){
        
        this.#urlapLeiro = urlapLeiro
        this.#adat = adat
        this.#txt =  this.#inputElemFelepitese()
        this.#inputElem.on("keyup", () => {
            this.#value = this.#inputElem.val();
            console.log(value);
          });
    }


    #inputElemFelepitese(){
        let txt = `<td>  <input type="${this.#urlapLeiro.tipus}" placeholder="${this.#urlapLeiro.megjelenes}" value="${this.#adat}" class="${this.#urlapLeiro.class}"></td>`;
        this.#inputElem = $(`.${this.#urlapLeiro.class}`)

        return txt
    }


    getTxt(){
        return this.#txt
    }

    getValue(){
        return this.#value;
    }



}
export default adatTablaModositasIras