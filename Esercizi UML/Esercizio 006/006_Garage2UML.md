# Garage

## Testo
Si realizzi una applicazione JS per la gestione di un garage.
Il garage ha al max 15 posti ognuno dei quali è identificato da un num a partire da 0 e per motivi di capienza può ospitare solo auto; 
Un auto è descritta da :
marca, anno, cilindrata, porte, alimentazione (diesel/benzina);
Definire il metodo ToString in modo che ogni entità possa esternalizzare in forma di stringa tutte le informazioni che la riguardano.
Si implementi una classe che modelli il garage sopradescritto offrendo le seguenti operazioni di gestione
1] immissione di una nuova auto
2] estrazione dal garage di un auto che occupa un determinato posto
3] stampa della situazione corrente dei posti nel garage

## Immagine del diagramma UML
![Garage](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20006/006_Garage2UML.png?raw=true)

## Codice del diagramma UML

``` python
@startuml
class Garage {
  posti_auto : []int
  indirizzo : string
  Situazione_posti() : []int
  Aggiungi_auto() : Auto
  Rimuovi_auto() : Auto
}

class Auto {
  marca : string
  anno : Date
  cilindrata : int
  porte : int
  alimentazione : bool
  ToString() : Auto 
}

Garage "1...1" --> "0...14" Auto : ospita
@enduml
```