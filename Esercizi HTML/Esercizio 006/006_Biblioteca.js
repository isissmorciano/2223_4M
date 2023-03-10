	class Utente {
		constructor(cognome, nome, password) {
			this.cognome = cognome;
			this.nome = nome;
			this.password = password;
			this.scaffali = [];
			this.prestiti = [];
		}
		effettuaPrestito(nScaffale, nLibro, dataInizio, dataFine) {
			if (this.scaffali[nScaffale].libri[nLibro].stato == 0) {
				this.prestiti.push(new Prestito(this.scaffali[nScaffale].libri[nLibro], dataInizio, dataFine))
				this.scaffali[nScaffale].libri[nLibro].stato = 1;
			} else {
				alert("Il libro è già in prestito!");
			}
		}
	}
	class Prestito {
		constructor(libro, dataInizio, dataFine) {
			this.libro = libro;
			this.dataInizio = dataInizio;
			this.dataFine = dataFine;
		}
	}
	class Libro {
		constructor(ISBN, titolo, anno, autore, stato) {
			this.ISBN = ISBN;
			this.titolo = titolo;
			this.anno = anno;
			this.autore = autore;
			this.stato = stato;
		}
		//stato = 0 (libro disponibile)
		//stato = 1 (libro già in prestito)
	}
	class Scaffale {
		constructor(nScaffale) {
			this.nScaffale = nScaffale;
			this.libri = [];
		}
		aggiungiLibro(ISBN, titolo, anno, autore, stato) {
			this.libri.push(new Libro(ISBN, titolo, anno, autore, stato));
		}
	}

	//creo utente
	let utente1 = new Utente("Conte", "Filippo", "filippo2005");
	//creo scaffale 0
	utente1.scaffali.push(new Scaffale(0));
	//aggiungo e creo libro e lo metto in scaffale 0
	utente1.scaffali[0].aggiungiLibro("AA-BB-CC-DD", "Una piccola pace", 2022, "Mattia Signorini", 0);
	//effettuo il prestito del libro 0 contenuto in scaffale 0
	utente1.effettuaPrestito(0, 0, "Oggi", "Domani");
	//visualizzo dal prestito 0 in console le caratteristiche del libro
	console.log(utente1.prestiti[0].libro);

	//creo scaffale 1
	utente1.scaffali.push(new Scaffale(1));
	//aggiungo e creo libro in scaffale 1
	utente1.scaffali[1].aggiungiLibro("EE-FF-GG-HH", "Mille luci sulla Senna", 2022, "Nicolas Barreau", 0);
	//effettuo il prestito del libro 0 contenuto in scaffale 1
	utente1.effettuaPrestito(1, 0, "Oggi", "Tra 2 giorni");
	//visualizzo dal prestito 1 in console le caratteristiche del libro
	console.log(utente1.prestiti[1].libro);

	//rieffettuo il prestito del libro 0 in scaffale 0 che però è già in prestito
	utente1.effettuaPrestito(0, 0, "Oggi", "Domani");