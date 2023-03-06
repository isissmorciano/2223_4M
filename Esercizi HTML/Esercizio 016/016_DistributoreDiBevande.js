<script>

class Distributore {
    constructor(bevanda) { 
      this.moneta = null;
         this.bevande = bevanda;
    }
inserisciMoneta(valMoneta) {
   try {
    if(valMoneta <= 0)  throw "valore non accettabile";
    if(isNaN(valMoneta))  throw "valore non accettabile";
} catch(err) {
    document.write(err);
}
this.moneta += valMoneta;
console.log(this.moneta);
}

prendiBevanda(Name) {

if (Name == this.bevande[0].nome && this.moneta >= this.bevande[0].prezzo && this.bevande[0].quantita > 0) {
   alert("hai preso: " + this.bevande[0].nome);
this.moneta -= this.bevande[0].prezzo;
this.bevande[0].quantita--;
}
if (Name == this.bevande[1].nome && this.moneta >= this.bevande[1].prezzo && this.bevande[1].quantita > 1) {
   alert("hai preso: " + this.bevande[1].nome);
this.moneta -= this.bevande[1].prezzo;
this.bevande[1].quantita--;
}
console.log(this.moneta);
}
}

class Bevanda {
 constructor(nome, prezzo, quantita) {
   this.nome = nome
   this.prezzo = prezzo;
   this.quantita = quantita;
 }
}


let Bev1 = new Bevanda("acqua", 1.20, 14);
let Bev2 = new Bevanda("sprite", 1.50, 11);
let Bevande = [Bev1, Bev2];
let distributore = new Distributore(Bevande);

distributore.inserisciMoneta(2);
distributore.prendiBevanda("sprite");

/*@startuml


class Distributore {
moneta : float
bevande[] : Bevanda
inserisciMoneta(Moneta)
prendiBevanda(bevanda)
}

class Bevanda {
nome : string
prezzo : float
quantita : int
}

Distributore "1..1" -- "0..2" Bevanda : contiene 

@enduml*/
</script>