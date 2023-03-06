class Gioco {
    // #m_difficolta;
    // #m_tempoDiGioco;
    // #m_presenzaCacciatoreAutomatico;
    #m_campoGioco;
    constructor(/*difficolta, tempoDiGioco , presenzaCacciatoreAutomatico */) {
        // this.difficolta = difficolta;
        // this.tempoDiGioco = tempoDiGioco;
        // this.presenzaCacciatoreAutomatico = presenzaCacciatoreAutomatico;
        this.campoGioco = new CampoGioco();
        this.preda = null;
        this.CA = null;
    }
    /* get difficolta() {
        return this.#m_difficolta;
    }

    set difficolta(difficolta) {
        this.#m_difficolta = difficolta;
    }

    get tempoDiGioco() {
        return this.#m_tempoDiGioco;
    }
    set tempoDiGioco(tempoDiGioco) {
        this.#m_tempoDiGioco = tempoDiGioco;
    }
     get presenzaCacciatoreAutomatico() {
        return this.#m_presenzaCacciatoreAutomatico;
    }
    set presenzaCacciatoreAutomatico(presenzaCacciatoreAutomatico) {
        this.#m_presenzaCacciatoreAutomatico = presenzaCacciatoreAutomatico;
    } */

    get campoGioco() {
        return this.#m_campoGioco;
    }
    set campoGioco(campoGioco) {
        this.#m_campoGioco = campoGioco;
    }

    inializzaGioco() {
        let xPreda = Math.floor(Math.random() * 8);
        let yPreda = Math.floor(Math.random() * 8);

        let casella = this.campoGioco.scacchiera[xPreda][yPreda];
        let preda = new Preda(casella);
        this.campoGioco.posizionaPreda(preda, xPreda, yPreda);

        let x = Math.floor(Math.random() * 8);
        let y = Math.floor(Math.random() * 8);

        while (x == xPreda || y == yPreda) {
            x = Math.floor(Math.random() * 8);
            y = Math.floor(Math.random() * 8);
        }

        casella = this.campoGioco.scacchiera[x][y];
        let CA = new CacciatoreAutomatico(casella);
        this.campoGioco.posizionaCacciatoreAutomatico(CA, x, y);
        this.campoGioco.visualizzaScacchiera();
        this.CA = CA;
        this.preda = preda;
        document.getElementsByTagName("button")[0].toggleAttribute("disabled");
        document.getElementsByTagName("button")[1].toggleAttribute("disabled");
        // this.gioca(CA, preda);
    }

    gioca() {
        // console.log(casella);
        this.CA.calcolaProssimaMossa(this.preda);
        this.CA = this.muovi(this.CA);
        // console.log(casella);
        this.campoGioco.visualizzaScacchiera();
        if (this.CA.casella.x == this.preda.casella.x && this.CA.casella.y == this.preda.casella.y) {
            document.getElementsByTagName("button")[2].toggleAttribute("disabled");
            document.getElementsByTagName("button")[1].toggleAttribute("disabled");
        }
    }
    muovi(CA) {

        // this.casella.x += this.prossimaMossa.x;
        // this.casella.y += this.prossimaMossa.y;
        // console.log(CA.casella.x + " " +CA.casella.y);
        // console.log(this.campoGioco.scacchiera[CA.casella.x + CA.prossimaMossa.x, CA.casella.y + CA.prossimaMossa.y]);
        console.log("CacciatoreAutomatico era in: " + CA.casella.x + ", " + CA.casella.y);
        this.campoGioco.scacchiera[CA.casella.x][CA.casella.y].rimuoviPedina();
        let nuovaCasella = this.campoGioco.scacchiera[CA.casella.x + CA.prossimaMossa.x][CA.casella.y + CA.prossimaMossa.y];
        let x = CA.casella.x;
        let y = CA.casella.y;
        let prossimaMossaX = CA.prossimaMossa.x;
        let prossimaMossaY = CA.prossimaMossa.y;
        CA.casella = nuovaCasella;
        this.campoGioco.posizionaCacciatoreAutomatico(CA, x + prossimaMossaX, y + prossimaMossaY);
        // this.campoGioco.scacchiera[].posizionaPedina(CA);
        console.log("CacciatoreAutomatico si è mosso in: " + CA.casella.x + ", " + CA.casella.y);
        return CA;
    }

}

class CampoGioco {
    #m_scacchiera;
    constructor() {
        this.scacchiera = new Array(8).fill().map((_, x) => new Array(8).fill().map((_, y) => new Casella(x, y)));
    }
    get scacchiera() {
        return this.#m_scacchiera;
    }
    set scacchiera(scacchiera) {
        this.#m_scacchiera = scacchiera;
    }
    posizionaPreda(preda, x, y) {
        this.scacchiera[x][y].posizionaPedina(preda);
    }
    posizionaCacciatoreAutomatico(cacciatoreAutomatico, x, y) {
        this.scacchiera[x][y].posizionaPedina(cacciatoreAutomatico);
    }
    visualizzaScacchiera() {
        let gioco = document.getElementById("gioco");
        let tabella = document.createElement("table");
        tabella.setAttribute("border", "1");
        tabella.setAttribute("align", "center");
        let riga = document.createElement("tr");
        let cella = document.createElement("td");
        cella.setAttribute("width", "50");
        cella.setAttribute("height", "50");
        cella.innerHTML = "";
        riga.appendChild(cella);
        for (let i = 0; i < 8; i++) {
            cella = document.createElement("td");
            cella.innerHTML = i;
            cella.setAttribute("width", "50");
            cella.setAttribute("height", "50");
            riga.appendChild(cella);
        }
        tabella.appendChild(riga);
        for (let i = 0; i < 8; i++) {
            riga = document.createElement("tr");
            cella = document.createElement("td");
            cella.setAttribute("width", "50");
            cella.setAttribute("height", "50");
            cella.innerHTML = i;
            riga.appendChild(cella);
            for (let j = 0; j < 8; j++) {
                cella = document.createElement("td");
                cella.setAttribute("width", "50");
                cella.setAttribute("height", "50");
                if (this.scacchiera[i][j].pedina === null) {
                    cella.innerHTML = " ";
                } else if (this.scacchiera[i][j].pedina instanceof Preda) {
                    cella.innerHTML = "P";
                } else if (this.scacchiera[i][j].pedina instanceof CacciatoreAutomatico) {
                    cella.innerHTML = "CA";
                }
                riga.appendChild(cella);
            }
            tabella.appendChild(riga);
        }
        // console.log(gioco.firstChild);
        if (gioco.firstChild == null) {
            gioco.appendChild(tabella);
        } else {
            gioco.removeChild(gioco.firstChild);
            gioco.appendChild(tabella);
        }
    }
}

class Casella {
    #m_pedina;
    #m_x;
    #m_y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.#m_pedina = null;
    }

    posizionaPedina(pedina) {
        this.#m_pedina = pedina;
    }

    rimuoviPedina() {
        this.#m_pedina = null;
    }
    get pedina() {
        return this.#m_pedina;
    }
    get x() {
        return this.#m_x;
    }
    set x(x) {
        this.#m_x = x;
    }
    get y() {
        return this.#m_y;
    }
    set y(y) {
        this.#m_y = y;
    }
}

class pedina {
    constructor(casella) {
        this.casella = casella;
    }
}

class Preda extends pedina {
    constructor(casella) {
        super(casella);
    }
}

class CacciatoreAutomatico extends pedina {
    constructor(casella) {
        super(casella);
        this.prossimaMossa = { x: 0, y: 0 };
    }

    calcolaProssimaMossa(preda) {
        let distanzaX = Math.abs(this.casella.x - preda.casella.x);
        let distanzaY = Math.abs(this.casella.y - preda.casella.y);
        this.prossimaMossa.x = 0;
        this.prossimaMossa.y = 0;
        if (distanzaX > 0) {
            this.prossimaMossa.x = (this.casella.x > preda.casella.x) ? -1 : 1;
        }
        if (distanzaY > 0) {
            this.prossimaMossa.y = (this.casella.y > preda.casella.y) ? -1 : 1;
        }
    }
}

let gioco = new Gioco();