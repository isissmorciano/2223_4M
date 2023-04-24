## testo 
Si realizzi una applicazione JS per la gestione di un garage secondo le specifiche:
il garage ha al max 15 posti ognuno dei quali è identificato da un num a partire da 0 e per motivi di capienza può ospitare solo auto moto e furgoni partendo dalla classe base veicolo a motore V; la si estenda, realizzando anche le classi che modellano le entità furgone (F) auto (A) e moto (M).
Ridefinire il metodo toString in modo che ogni entità possa esternalizzare in forma di stringa tutte le informazioni che la riguardano.
Si implementi una classe che modelli il garage sopradescritto offrendo le seguenti operazioni di gestione
1] immissione di un nuovo veicolo
2] estrazione dal garage del veicolo che occupa un determinato posto (ritornare l'istanza del veicolo stesso)
3] stampa della situazione corrente dei posti nel garage veicolo:
marca,anno,cilindrata;
auto:porte, alimentazione (diesel/benzina)
moto:tempi
furgone:capacità

![Prova](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/isissmorciano/2223_4M/main/Esercizi%20UML/Esercizio%20005/005_garageUML.iuml)

<!-- ## Immagine del diagramma UML
![Registro](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20003/003_RegistroUML.png?raw=true) -->

## codice del diagramma UML

@startuml

class Auto {
marca: string 
anno : int
cilindrata : int 
porte : int 
alimentazione : string 
}

class Garage {
capienza : int
nAuto : int
toString()
parcheggiaAuto()
estraiAuto()
stampaGarage()
}

Auto "0..15" -- "1..1" Garage

@enduml
