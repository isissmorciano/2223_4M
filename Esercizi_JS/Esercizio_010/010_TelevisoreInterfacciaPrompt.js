"use strict";
       
class Televisore {
    #m_stato;
    #m_canale;
    #m_muto;
    #m_volume;
    constructor(stato,canale,muto,volume){
        this.stato = stato;
        this.canale = canale;
        this.muto = muto;
        this.volume = volume;
    }

    get stato(){
        return this.#m_stato;
    }

    set stato(stato){
        this.#m_stato = stato;
    }

    get canale(){
        return this.#m_canale;
    }

    set canale(canale){
        if(canale == "") throw "empty";
        if(isNaN(canale)) throw "not a number";
        canale = Number(canale);
        if(canale < 1) throw "too low";
        if(canale > 10) throw "too high";
        this.#m_canale = canale;
    }

    get muto(){
        return this.#m_muto;
    }

    set muto(muto){
        this.#m_muto = muto;
    }

    get volume(){
        return this.#m_volume;
    }

    set volume(volume){
        this.#m_volume = volume;
    }

    PulsanteRosso() {
        if (!this.stato) {
            this.stato = true;
        }
        else {
            this.stato = false;
        }
        return this.stato;
    }
    CanaleSuccessivo() {
        if (!this.stato)
            return;
        if(this.canale < 10) {
            this.canale++;
        }
          return this.canale;
    }
    CanalePrecedente() {
        if (!this.stato)
            return;
        if(this.canale > 1) {
            this.canale--;
        }
            return this.canale;
        
    }
    AumentaVolume() {
        if (!this.stato)
            return;
        if (this.muto) {
            this.muto = false;
        }
        if(this.volume < 100) {
            this.volume++;
        }
            return this.volume;
    }
    AbbassaVolume() {
        if (!this.stato)
            return;
        if (this.muto) {
            this.muto = false;
        }
        if(this.volume > 1) {
            this.volume--;
            } return this.volume;
    }
    PulsanteSilenzioso() {
        if (!this.stato)
            return;
        if (!this.muto) {
            this.muto = true;
            return this.muto;
        }else {
            this.muto = false;
            return this.volume;
        }
    }
    ImpostaCanale(){
        if (!this.stato)
            return;
        this.canale = prompt("inserire un canale da 1 a 10: ");
        return this.canale;
    }
    ToString(){
        let stato;
        if (this.stato) {
            stato = "accesa";
        }else{
            stato = "spenta";
        }
        if (this.muto) {
            return `Stato: ${stato}\nCanale: ${this.canale}\nVolume: 0`;
        } else {
            return `Stato: ${stato}\nCanale: ${this.canale}\nVolume: ${this.volume}`;
        }
    }
}

// creazione di un oggetto della classe
let tv = new Televisore(false,1,false,1);

function Programma() {
    while(true){
        try{
            let opzione = prompt("Seleziona opzione menu:\n0) ESC\n1) On\n2) Off\n3) CAN-\n4) CAN+\n5) SET CAN\n6) VOL-\n7) VOL+\n8) MUTO", "");
            opzione = Number(opzione);

            if (opzione== 0) {
                alert("Programma esce");
                break;
            }else{ 
                switch(opzione){
                    case 1: 
                        tv.PulsanteRosso();
                        alert(tv.ToString());
                        break;
                    case 2:
                        tv.PulsanteRosso();
                        alert(tv.ToString());
                        break;
                    case 3:
                        tv.CanalePrecedente();
                        alert(tv.ToString());
                        break;
                    case 4:
                        tv.CanaleSuccessivo();
                        alert(tv.ToString());
                        break;
                    case 5:
                        tv.ImpostaCanale();
                        alert(tv.ToString());
                        break;
                    case 6:
                        tv.AbbassaVolume();
                        alert(tv.ToString());
                        break;
                    case 7:
                        tv.AumentaVolume();
                        alert(tv.ToString());
                        break;
                    case 8:
                        tv.PulsanteSilenzioso();
                        alert(tv.ToString());
                        break;
                    default: 
                        alert("Valore non presente");
                    }
                }
            }catch(err) {
                alert("Input is " + err);
            }
        }
}

Programma();