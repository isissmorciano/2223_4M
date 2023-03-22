# Banca

## testo

Creare una banca che memorizza i dati di N conti correnti.
Per ogni conto corrente è memorizzato il saldo e il nome dell’intestatario.
Per ogni conto corrente la banca memorizzerà una password affinché solo il cliente intestatario del conto possa accedervi. La password andrà memorizzata all’accensione del conto e non sarà più modificabile.
Le operazioni che i correntisti possono fare sono il prelievo, il deposito o il trasferimento di denaro da un conto corrente a un altro, inoltre si può chiedere il saldo di un conto.
Per il prelievo, il trasferimento e la richiesta del saldo, la banca richiede la password del conto da cui viene preso il denaro o di cui viene chiesto il saldo.

## immagine del diagramma UML
![Banca](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20010/010_BancaUML.png)


## codice del diagramma UML

``` python
@startuml

class Banca{
  nome : string
  indirizzo : string
  clienti[] : Cliente
  --
  getClienti() : Cliente[]
  aggiungiCliente(cliente : Cliente) : bool
  rimuoviCliente(cliente : Cliente) : bool
}
class Cliente{
  nome : string
  cognome : string
  banca : Banca
  contiCorrenti[] : ContoCorrente
  --
  getBanca() : Banca
  getContiCorrenti() : ConteCorrente[]
  aggiungiContoCorrente(contoCorrente : ContoCorrente) : bool
  rimuoviContoCorrente(contoCorrente : ContoCorrente) : bool
}
class ContoCorrente{
  codiceConto : string
  password : string
  cliente : Cliente
  operazioni[] : Operazione
  --
  getCliente() : Cliente
  getOperazioni() : Operazione[]
  aggiungiOperazione(operazione : Operazione) : bool
  rimuoviOperazione(operazione : Operazione) : bool
}
class Operazione{
  codiceOperazione
  contoCorrente : ContoCorrente
  --
  getContoCorrente() : ContoCorrente
}
class Prelievo{
  preleva(ammontare,password): bool
}
class Deposito{
  deposita(ammontare): bool
}
class Trasferimento{
  trasferisci(ammontare,password,contoDestinazione): bool
}
class Saldo{
  stampaSaldo(password): bool
}

Banca "1-1"-right-"0-N"  Cliente : gestisce
Cliente "1-1"--"0-N"  ContoCorrente : possiede
ContoCorrente "1-1"-left-"0-N"  Operazione : effettua

Operazione <|-- Prelievo
Operazione <|-- Deposito
Operazione <|-- Trasferimento
Operazione <|-- Saldo

@enduml
```