"use strict";
		class Macchina {
			constructor(marca, anno, cilindrata, porte, alimentazione) {
				this.marca = marca;
				this.anno = anno;
				this.cilindrata = cilindrata;
				this.porte = porte;
				this.alimentazione = alimentazione;
			}
		}
		class PostoAuto {
			constructor(nPosto, auto) {
				this.nPosto = nPosto;
				this.auto = auto;
			}
		}
		class Garage {
			constructor() {
				this.postiGarage = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
			}
			aggiungiMacchina() {
				let marca = document.getElementById("marca").value;
				let anno = document.getElementById("anno").value;
				let cilindrata = document.getElementById("cilindrata").value;
				let porte = document.getElementById("porte").value;
				let alimentazione = document.getElementById("alimentazione").value;
				let a = false;
				for (var i = 0; i < this.postiGarage.length; i++) {
					if (this.postiGarage[i] == null) {
						this.postiGarage[i] = new Macchina (marca, anno, cilindrata, porte, alimentazione);
						a = true;
						break;
					}
				}
				if (a == false) {
					alert("Tutti i posti sono occupati!");
				}
			}
			rimuoviMacchina() {
					let cancella = prompt("Scegli il posto auto da liberare: ");
					if (cancella >= 1 && cancella <= 15) {
						cancella--;
						if (this.postiGarage[cancella] == null) {
							alert("Il posto è già libero!");
						} else {
							this.postiGarage[cancella] = null;
						}
					} else {
						alert("Devi inserire un numero compreso tra 1 e 15!");
					}
				}
			GetMacchina(Macchina) {
				if (this.postiGarage[Macchina] != null) {
					return "Posto macchina numero " + (Macchina+1) + ": "+ this.postiGarage[Macchina].marca + "  " + this.postiGarage[Macchina].anno + "  " + this.postiGarage[Macchina].cilindrata + "  " + this.postiGarage[Macchina].porte + "  " + this.postiGarage[Macchina].alimentazione + "<br>";
				} else {
					return "Posto macchina numero " + (Macchina+1) + ": VUOTO<br>";
				}
			}
			GetGarage() {
				let contenuto = "";
				for (var i = 0; i < this.postiGarage.length; i++) {
						contenuto += this.GetMacchina(i);
				}
				return contenuto;
			}
			stampa() {
				document.getElementById("contenitore").innerHTML = "";
				document.getElementById("contenitore").innerHTML += this.GetGarage();
			}
		}

		let garage1 = new Garage();
		garage1.stampa();
		/*
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.aggiungiMacchina("Renault", 2020, 999, 5, "Benzina");
		garage1.rimuoviMacchina(3);
		garage1.aggiungiMacchina("Mercedes-Benz", 2018, 1332, 4, "Gasolio");
		document.getElementById("contenitore").innerHTML += garage1.GetGarage();
		*/