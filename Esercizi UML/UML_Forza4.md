# UML Forza4

testo dell'esercizio

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
  --
  constructor(Giocatore,Giocatore)
  inserisciPedina(Giocatore): void
  controllaVittoria(): bool
}
class Giocatore{
  #username : string
  --
  constructor(username)
  getUsername(): string
  inserisciPedina(colonna): bool
}

Gioco "1-1"-down-"0-N"  Partita : ha
Gioco "1-1"--"0-N"  Giocatore : ha
Giocatore "2-2"-left-"0-N"  Partita : gioca

@enduml
```

