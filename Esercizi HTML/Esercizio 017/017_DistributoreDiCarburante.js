
            class Distributore {
                #m_nome = null;
                #m_indirizzo = null;
                #m_marca = null;
                #m_depositi = [];
                constructor(nome, indirizzo, marca) {
                    this.nome = nome;
                    this.indirizzo = indirizzo;
                    this.marca = marca;
                    this.#m_depositi = [];
                }

                vendiCarburante(tipo, selezQuantita, quantita) {
                    //tipo = 0 : benzina | 1 : gasolio
                    //selezQuantita = 0 : euro | 1 : litri
                    if((tipo == 0 || tipo == 1) && quantita > 0) {
                        for(let deposito of this.#m_depositi) {
                            if(deposito.carburante != tipo)
                                continue;
                            let litri;
                            let soldi;
                            if(selezQuantita == 0) { // se seleziona euro
                                litri = quantita / deposito.prezzo;
                                soldi = quantita;
                            } else if(selezQuantita == 1) { // se seleziona litri
                                litri = quantita;
                                soldi = quantita * deposito.prezzo;
                            }

                            if(deposito.carburPres < litri) {
                                console.log("non abbastanza litri presenti");
                                break;
                            }
                                deposito.carburPres = deposito.carburPres - litri;
                                console.log("litri venduti: " + litri);
                                console.log("hai speso: " + soldi);
                                console.log("carburante presente: " + deposito.carburPres);
                            }
                        }
                    }
                
                aggiungiDeposito(Deposito) {
                    this.#m_depositi.push(Deposito);
                }
            }

            class Deposito {
                // 0 = benzina | 1 = gasolio
                #m_carburante = null;
                #m_capacita = null;
                #m_prezzo = null;
            constructor(carburante, capacita, prezzo) {
                this.carburante = carburante;
                this.carburPres = 0;
                this.capacita = capacita;
                this.prezzo = prezzo
            }

            modificaPrezzo(nuovoPrezzo) {
                tihs.#m_prezzo = nuovoPrezzo;
            }

            rifornisci() {
                this.carburPres = this.capacita;
            }
            }

            let distributore1 = new Distributore("Scacciacani", "via verdi 12", "ESSO")

            let deposito0 = new Deposito(0,10000,1.75);
            let deposito1 = new Deposito(1,10000,1.70);

            distributore1.aggiungiDeposito(deposito0);
            distributore1.aggiungiDeposito(deposito1);

            deposito0.rifornisci();

            //tipo = 0 : benzina | 1 : gasolio
            //selezQuantita = 0 : euro | 1 : litri
            console.log("gasolio litri");
            distributore1.vendiCarburante(1,1,20);
            console.log("benzina euro");
            distributore1.vendiCarburante(0,0,10);
        </script>
    </body>
</html>
