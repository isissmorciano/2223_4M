class Utente {
		constructor(cognome, nome, password) {
			this.cognome = cognome;
			this.nome = nome;
			this.password = password;
			this.prestiti = [];
		}
		effettuaPrestito(prestito) {
			this.prestiti.push(prestito);
		}
	}
	class Prestito {
		constructor(utente, libro, dataInizio, dataFine) {
			this.utente = utente;
			this.libro = libro;
			this.dataInizio = dataInizio;
			this.dataFine = dataFine;
		}
	}
	class Libro {
		constructor(ISBN, titolo, anno, autore) {
			this.ISBN = ISBN;
			this.titolo = titolo;
			this.anno = anno;
			this.autore = autore;
			this.stato = true;
			this.prestiti = [];
			this.scaffale = null;
		}
		setScaffale(scaffale) {
			this.scaffale = scaffale;
		}
		setStato(stato) {
			this.stato = stato
		}
		aggiungiPrestito(prestito) {
			this.prestiti.push(prestito);
			this.stato = false;
		}
	}
	class Scaffale {
		constructor(nScaffale) {
			this.nScaffale = nScaffale;
			this.libri = [];
		}
		aggiungiLibro(libro) {
			this.libri.push(libro);
		}
	}
	let libri = [];
	let utenti = [];
	let scaffali = [];

	let utente1 = new Utente("Conte", "Filippo", "filippo2005");
	let scaffale1 = new Scaffale(0);
	let libro1 = new Libro("AA-BB-CC-DD", "Cane", 2012, "Marco Conte");
	let libro2 = new Libro("FF-AA-RR-TT", "Aringhe", 2022, "Lana Rohades");
	let libro3 = new Libro("II-LL-VV-OO", "Arista", 2002, "Drake");
	scaffale1.aggiungiLibro(libro1);
	let prestito1 = new Prestito(utente1, libro1, "Oggi", "Domani");
	//libro1.aggiungiPrestito(prestito1);
utente1.effettuaPrestito(prestito1);

	libri.push(libro1);
	libri.push(libro2);
	libri.push(libro3);
	utenti.push(utente1);
	scaffali.push(scaffale1);

	function ricercaCodice(CercaC) {
		let res;
  for(let i = 0; i < libri.length; i++) {
     if(libri[i].ISBN == CercaC  && libri[i].stato == true){
    res = "Il libro che cerchi: " + libri[i].ISBN + " / " + libri[i].titolo + " / " + libri[i].anno + " / " + libri[i].autore;
     }
    /* else{
     	res = "non trovato";
     }*/
  }
  document.write(res);
	}

	function ricercaTitolo(CercaT) {
		let risult;
		for(let i = 0; i < libri.length; i++) {
if(libri[i].titolo == CercaT && libri[i].stato == true) {
	risult = "Il libro che cerchi: " + libri[i].ISBN + " / " + libri[i].titolo + " / " + libri[i].anno + " / " + libri[i].autore;
} else {
	  	risult = "non trovato";
}
		}
		document.write(risult);
	}

ricercaCodice("AA-BB-CC-DD");