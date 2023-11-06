import adatTablaModositasIras from "./adatTablaModositIras.js";

class adatTablaModositas {
  #adatok;
  #szuloElem;
  #urlapLeiro;
  #value;
  #inputElem;
  constructor(adatok, szuloElem, urlapLeiro) {
    this.#adatok = adatok;
    this.#szuloElem = szuloElem;
    this.#urlapLeiro = urlapLeiro;
    this.#szuloElem.append(this.#modositoPanel());
    this.#inputElem = $(".vnev");
    this.#inputElem.on("keyup", () => {
      this.#value = this.#inputElem.val();
      console.log(this.#value);
    });
  }

  #modositoPanel() {
    let txt = "";
    for (const key in this.#urlapLeiro) {
      switch (this.#urlapLeiro[key].tipus) {
        case "text":
          const adatModosito = new adatTablaModositasIras(this.#urlapLeiro[key], this.#adatok[key]);
          txt += adatModosito.getTxt()
          console.log(txt);
          break;

        case "number":
          txt += `<td>  <input type="${
            this.#urlapLeiro[key].tipus
          }" placeholder="${this.#urlapLeiro[key].megjelenes}" value="${
            this.#adatok[key]
          }" class="${this.#urlapLeiro[key].class}"></td>`;
          break;
        default:
          break;
      }
    }
    txt += `<td><button class="megerosit">Megerősités</button></td>
            <td><button class="megse">Mégse</button></td>`;
    return txt;
  }
}
export default adatTablaModositas;
