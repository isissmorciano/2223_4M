# UML Classe Scolastica

## Test
realizzare il modello uml della classe scolastica

## Immagine del diagramma UML
![ClasseScolastica](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20002/002_ClasseScolasticaUML.png?raw=true)

## codice del diagramma UML

``` python
@startuml

class Classe{
  anno : int
  sezione : string
  alunni : []
  creaTabella() : string
  }

class Alunno{
  nome : string
  cognome : string
  getNome() : string
  getCognome() : string
  }

Classe "1...1"---"1...N" Alunno : e frequentata

@enduml
```