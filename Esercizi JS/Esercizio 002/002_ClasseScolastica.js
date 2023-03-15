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
			mostraDati() {
				for (let studente of this.alunni) {
					this.contenutoTabella += "<tr><td>" + studente.nome; + "</td>";
					this.contenutoTabella +="<td>" + studente.cognome; + "</td>";
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

	let classe1 = new ClasseScolastica (4, "M");
	classe1.aggiungiStudente("Filippo", "Conte");
	classe1.aggiungiStudente("Ferdinando", "Cervero");
	classe1.aggiungiStudente("Andriy", "Slipets");
	classe1.aggiungiStudente("Federico", "Tomassoni");
	document.getElementById("contenitore").innerHTML += classe1.mostraDati();

	let classe2 = new ClasseScolastica (2, "S");
	classe2.aggiungiStudente("Laura", "Buccino");
	classe2.aggiungiStudente("Giulia", "Virzi");
	document.getElementById("contenitore").innerHTML += classe2.mostraDati();