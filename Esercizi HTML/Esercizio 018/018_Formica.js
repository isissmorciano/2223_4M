
class Formica {
    #m_nome;
    #m_energia;
    #m_viva;
    #m_x;
    #m_y;
    constructor(nome) {
        this.#m_nome = nome;
        this.energia = 10;
        this.viva = true;
        this.x = 0;
        this.y = 0;
    }
    get nome() {
        return this.#m_nome;
    }
    get energia() {
        return this.#m_energia;
    }
    set energia(energia) {
        this.#m_energia = energia;
    }
    get viva() {
        return this.#m_viva;
    }
    set viva(viva) {
        this.#m_viva = viva;
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
    movimento() {
        if (this.viva) {
            let passo = 1;
            let direzione = Math.floor(Math.random() * 4);
            switch (direzione) {
                case 0: //NORD
                    this.y += passo;
                    break;
                case 1: //OVEST
                    this.x -= passo;
                    break;
                case 2: //EST
                    this.x += passo;
                    break;
                case 3: //SUD
                    this.y -= passo;
                    break;
            }
            this.energia -= 1;
            if (this.energia == 0) {
                this.viva = !this.viva;
            }
            return true;
        }
        return false;
    }
    mangia() {
        if (this.viva) {
            this.energia += 1;
            return true;
        }
        return false;
    }
}

const formica = new Formica("Mario");

function stato() {
    let stato = "";
    let pos = [formica.x, formica.y]
    stato += `La formica ${formica.nome} `;
    if (formica.viva) {
        stato += "è viva";
    } else {
        stato += "è morta";
    }
    stato += `, ha ${formica.energia} di energia `;
    stato += `ed è in posizione del punto P(${pos}).`;
    return stato;
}

console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.mangia();
console.log(stato());
formica.mangia();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.movimento();
console.log(stato());
formica.mangia();
console.log(stato());