# E-Commerce
## testo
Il sistema gestisce un negozio online. Il negozio vende dei prodotti informatici come tastiera,mouse. 
Ogni prodotto ha un nome, una marca, la quantita' e  un prezzo di vendita. l'utente ha un nome e cognome, un codice identificativo e una password.  Il negozio ha anche un elenco di clienti che possono acquistare gli animali. 
Il cliente acquista i prodotti mettendoli nel carrello 

## immagine del diagramma UML
![E-Commerce](https://github.com/isissmorciano/2223_4M/blob/main/Esercizi%20UML/Esercizio%20007/007_UML_e-commerce)


## codice del diagramma UML

``` python
@startuml
class Carrello{
nProdotti : int
prezzoTotale : int
'vado a riprendere la classe prodotto, visualizzando pero degli attributi differenti'


getInfoProdotto() : int
  'di info del prodotto vado a prendere lo sconto, il prezzo e la quantita'
aggiungiProdotto() : int
  'aumento la quantita del prodotto nel caso in cui venga aggiunto'
eliminaProdotto() : int
  'diminuisco la quantita del prodotto nel caso in cui venga eliminato'
  'per eliminato non intendo eliminare completamente tutti i prodotti, ma diminuire la quantita di prodotti'

}

class Utente {
username : string
password : int
nome : string
cognome : string

setInfoUtente() : int
}

class Prodotto {
nome : int
  'es. Logitech G502'
codice : int
'es NGHBRY57828'
descrizione : int
  'es. Mouse 23000 DPI'
quantita : int
prezzoScontato : int
sconto : int
  
setInfoProdotto() : int
}

Utente "1..1" -left- "0..N" Prodotto : acquista
Utente "1..1" -- "1..1"Carrello : possiede
Carrello "1..1" -- "0..N" Prodotto : contiene
'è l'utente che acquista un prodotto'


@enduml
```
