# Negozio di Animali

## testo
Il sistema gestisce un negozio di animali. Il negozio vende animali domestici come cani, gatti e uccelli. 
Ogni animale ha un nome, una data di nascita e un prezzo di vendita. I cani hanno anche una razza e un peso. 
I gatti hanno anche un colore del pelo. Gli uccelli hanno anche un tipo di uccello. Il negozio ha anche un elenco di clienti che possono acquistare gli animali. 
Ogni cliente ha un nome, un indirizzo e un numero di telefono. 
Il sistema deve essere in grado di mostrare l'elenco degli animali disponibili per l'acquisto e gli animali venduti e i relativi clienti.

## immagine del diagramma UML
![Negozio di Animali](https://raw.githubusercontent.com/isissmorciano/2223_4M/main/Esercizi%20UML/000_UML_NegoziodiAnimali.svg)


## codice del diagramma UML

``` python
@startuml

class Negozio{
  nome : string
  indirizzo : string
  animali : Animale[]
  animaliVenduti : Animale[]
  clienti : Cliente[]
  getAnimali() : Animale[]
  getAnimaliVenduti() : Animale[]
  getClienti() : Cliente[]
}

class Animale{
  nome : string
  dataDiNascita : Date
  prezzoVendita : float
  cliente : Cliente
  getCliente() : Cliente
}

class Cliente{
  nome : string
  indirizzo : string
  numeroTelefono : string
  animali : Animale[]
  getAnimali() : Animale[]
}

class Cane{
  razza : string
  peso : float
}

class Gatto{
  colorePelo : string
}

class Uccello{
  tipo : string
}

Negozio "1..1" -left- "1..N" Cliente : possiede
Negozio "1..1"--"1..N" Animale : ha venduto
Animale "1..N"--"1..1" Negozio : vende
Cliente "1..1"--"0..N" Animale : acquista
Animale <|-- Cane
Animale <|-- Gatto
Animale <|-- Uccello

@enduml
```

