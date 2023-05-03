# UML Registro

## Titolo
Realizzare il modello uml del registro elettronico

## Immagine del diagramma UML
![Registro](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20003/003_RegistroUML.png?raw=true)

## codice del diagramma UML

``` python
@startuml

class Scuola{
  aule : int
  sezioni : string
  studenti : int
  }

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

Scuola "1...N"--"1...1" Classe : e composta 
Classe "1...1"--"1...N" Alunno : e frequentata

@enduml
```
