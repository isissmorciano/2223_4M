# UML Distributore

## Titolo
Realizzare il modello uml del distributore di bevande

## Immagine del diagramma UML
![Distributore](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20016/016_DistributoreUML.png?raw=true)

## codice del diagramma UML

``` python
@startuml

class Distributore{
  nome : string
  depositi[] : Deposito
  vendiCarburante(tipoCarb, litri) : float
  rifornisciDepositi(tipoDep, litri) : void 
  modificaPrezzoVenditaCarburante(float) : void 
  }

class Deposito{
  capacitaDeposito : int
  carburanteInDeposito : float
  tipoDeposito : bool
  prezzo : float
  }


Distributore "1..1"---"2..2" Deposito : possiede

@enduml
```
