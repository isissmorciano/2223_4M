# Azienda di Produzione

## testo
Il sistema gestisce un'azienda di produzione. L'azienda ha un elenco di macchinari, un elenco di dipendenti e un elenco di ordini. 
Ogni macchinario ha un numero univoco di identificazione, un modello e una data di installazione. 
Ogni dipendente ha un nome, un numero di identificazione e un ruolo (operatore, manutentore, amministratore). 
Ogni ordine ha un numero univoco, una data di creazione e una data di consegna. 
I dipendenti possono gestire i macchinari e gli ordini possono essere assegnati ai dipendenti per la loro esecuzione. 
Il sistema deve essere in grado di mostrare l'elenco dei macchinari disponibili, l'elenco dei dipendenti disponibili e l'elenco degli ordini in corso e completati.

## immagine del diagramma UML
![Azienda di Produzione](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/UML%20Azienda%20di%20produzione.png)

## codice del diagramma UML

``` python
@startuml

class Azienda {
  elenco_macchinario : []Macchinario
  elenco_dipendente : []Dipendente
  elenco_ordine : []Ordine
  Mostra_elenco_ordine(): []Ordine
  Mostra_elenco_dipendente(): []Dipendente
  Mostra_elenco_macchinario(): []Macchinario
}

class Macchinario {
  id : int
  modello : string
  data_di_installazione : Date
  }

class Dipendente {
  nome : string
  id : int
  Assegnazione_ordine(Ordine)
  Gestione_Macchinario(Macchinario)
  }

class Ordine {
  id : int
  data_di_creazione : Date
  data_di_consegna : Date
  }

class Operatore {
  }

class Manutentore {
  }

class Amministratore {
  }

Dipendente <|-- Amministratore
Dipendente <|-- Operatore
Dipendente <|-- Manutentore 

Dipendente "1...N" --> "1...1" Azienda : lavora per
Azienda "1...1" --> "1...1" Ordine : ha un elenco di
Azienda "1...1" --> "1...1" Macchinario : ha un elenco di
Azienda "1...1" --> "1...1" Dipendente : ha un elenco di

@enduml
```
