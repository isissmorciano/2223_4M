"use strict;"
		class Studente {
			constructor(nome, cognome) {
				this.nome = nome;
				this.cognome = cognome;
			}
		}

		class ClasseScolastica {
			constructor(anno, sezione) {
				this.anno = anno;
				this.sezione = sezione;
				this.alunni = [];
				this.contenutoTabella = "<table id='tabella" + this.anno + this.sezione + "'><tr><th colspan=2>CLASSE " + this.anno + this.sezione + "</th></tr><tr><th>NOME</th><th>COGNOME</th></tr>";
			}
			mostraDatiClasseScolastica() {
				for (let i of this.alunni) {
					this.contenutoTabella += "<tr><td>" + i.nome; + "</td>";
					this.contenutoTabella +="<td>" + i.cognome; + "</td>";
				}
			/*for (let i = 0; i < this.studenti.length; i++) {
				this.studenti[i] 
			}
			*/
			return this.contenutoTabella + "</table><br>";
			}
			aggiungiStudente(nome, cognome) {
				this.alunni.push(new Studente(nome, cognome));
			}
		}

		class Scuola {
			constructor(nomeScuola) {
				this.nomeScuola = nomeScuola;
				this.classiScuola = [];
			}
			mostraDatiScuola() {
				let contenuto = "<h1>" + this.nomeScuola + "</h1>";
				for (let i of this.classiScuola) {
					contenuto += i.mostraDatiClasseScolastica();
				}
				return contenuto;
			}
			aggiungiClasse(anno, sezione) {
				this.classiScuola.push(new ClasseScolastica(anno, sezione));
			}
		}

	let scuola1 = new Scuola("A. De Gasperi");

	scuola1.aggiungiClasse(4, "M");
	scuola1.classiScuola[0].aggiungiStudente("Filippo", "Conte");
	scuola1.classiScuola[0].aggiungiStudente("Ferdinando", "Cervero");
	scuola1.classiScuola[0].aggiungiStudente("Andriy", "Slipets");
	scuola1.classiScuola[0].aggiungiStudente("Federico", "Tomassoni");

	scuola1.aggiungiClasse(2, "S");
	scuola1.classiScuola[1].aggiungiStudente("Laura", "Buccino");
	scuola1.classiScuola[1].aggiungiStudente("Giulia", "Virzi");

	document.getElementById("contenitore").innerHTML += scuola1.mostraDatiScuola();

	let scuola2 = new Scuola("P. Gobetti");

	scuola2.aggiungiClasse(5, "K");
	scuola2.classiScuola[0].aggiungiStudente("Massimo", "Battazza");
	scuola2.classiScuola[0].aggiungiStudente("Erika", "Tracchi");
	scuola2.classiScuola[0].aggiungiStudente("Livio", "Gualtieri");

	scuola2.aggiungiClasse(1, "S");
	scuola2.classiScuola[1].aggiungiStudente("Gesù", "Di Nazareth");

	document.getElementById("contenitore").innerHTML += scuola2.mostraDatiScuola();