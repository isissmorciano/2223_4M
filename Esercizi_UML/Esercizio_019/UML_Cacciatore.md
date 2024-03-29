# UML Cacciatore

## Titolo
Realizzare il modello uml del gioco cacciatore

## Immagine del diagramma UML
![Cacciatore](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20019/019_CacciatoreUML.png?raw=true)

## codice del diagramma UML

``` python
@startuml
class Gioco{
  #nome: string
  #partite[]: Partita
  #giocatore[]: Giocatore
  --
  ' costruttore
  constructor(nome)
  ' set
  creaGiocatore(username): Giocatore
  creaPartita(Giocatore,Giocatore): Partita
  ' get
  getNome(): string
  getGiocatori(): Giocatore[]
  getPartite(): Partita[]
  ' altri metodi
  giocaPartita(): void
}

class Partita{
  #id: int ' generato casualmente
  #stato: bool ' true=in corso false=finita
  #turno: bool ' true=giocatore1=rosso false=giocatore2=giallo
  #matrice: int[][] ' 0=vuoto, 1=rosso, 2=giallo
  #giocatore1: Giocatore
  #giocatore2: Giocatore
  
  constructor(Giocatore,Giocatore)
  inserisciPedina(Giocatore): void
  controllaVittoria(): bool
}

class campoDiGioco{
larghezzaScacchiera : int
lunghezzaScacchiera : int
scacchiera : int[n][n]
'scacchiera : Casella[n][n]'
}

class Casella {
}

class Pedina{
}

class Cacciatore{
  #username : string

  constructor(username)
  getUsername(): string
  muoviCacciatore(casella): int
}

class CacciatoreUmano{
}

class CacciatorePc{
}

class Preda{
}

class Ostacolo{
}

class OstacoloSemplice{
}

class OstacoloComposto{
}


Gioco "1-1"-down-"0-N"  Partita : ha
Gioco "1-1"--"0-N"  Cacciatore : ha
Cacciatore "2-2"-left-"0-N"  Partita : gioca
Cacciatore <|-- CacciatorePc
Cacciatore <|-- CacciatoreUmano
Pedina -- Casella
Pedina -- Preda
Ostacolo <|-- OstacoloComposto
Ostacolo <|-- OstacoloSemplice
Ostacolo <|-down- Pedina
campoDiGioco -- Pedina
campoDiGioco -- Gioco

@enduml
```