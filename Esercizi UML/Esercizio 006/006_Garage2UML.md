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
![Garage](https://raw.githubusercontent.com/isissmorciano/2223_4M/main/Esercizi%20UML/Esercizio%20003/003_RegistroUML.png)

## Codice del diagramma UML

``` python
@startuml
class Veicolo{
marca : string
anno : int
cilindrata : int
}

class Auto {
porte : int
alimentazione : string
}

class Moto{
tempi : int
}

class Furgone{
capacita : int
}

Moto -|> Veicolo
Auto -|> Veicolo
Furgone -|> Veicolo
@enduml
```