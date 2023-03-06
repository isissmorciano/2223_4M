	"use strict;"
	class Alunno {
		constructor(nome, cognome, classe) {
			this.nome = nome;
			this.cognome = cognome;
			this.classe = classe;
		}
		mostraDati() {
			document.getElementById("tabella").innerHTML += "<tr><td>" + this.nome + "</td><td>" + this.cognome + "</td><td>" + this.classe + "</td></tr>";
		}
	}
	let alunno1 = new Alunno("Filippo", "Conte", "4M");
	let alunno2 = new Alunno("Mattia", "Battistelli", "1K");
	let alunno3 = new Alunno("Daniele", "Esposito", "3B");
	alunno1.mostraDati();
	alunno2.mostraDati();
	alunno3.mostraDati();