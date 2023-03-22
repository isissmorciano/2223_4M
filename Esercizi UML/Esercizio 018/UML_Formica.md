# Formica

## testo
Implementare una classe formica, che rappresenta
un essere (con un nome), che si muove un passo alla volta in
modo casuale in una delle 4 direzioni: NORD, SUD, EST, OVEST.
Ad ogni passo consuma dell'energia. Se ha consumato tutta
l'energia a disposizione, muore e non si puo' piu' muovere.
La formica puo' mangiare, in tal caso, incrementa l'energia.

La formica si muove in un sistema di riferimento cartesiano, quindi
la posizione è rappresentata da un punto (x,y);  

esempio di pseudocodice(NO JS :   

pseudocodice: un linguaggio che ci permette di descrivere programmi usando una sintassi naturale, umana, senza le rigide regole di un linguaggio di programmazione    ):    
         
direzione = GeneraDirezioneCasuale();  // scelgo una direzione                                                
// la formica si sposta nella direzione scelta:       
if (direzione == NORD)            
        posY += passo;        
else if (direzione == SUD)           
        posY -= passo;        
if (direzione == EST)           
        posX += passo;       
if (direzione == OVEST)          
        posX -= passo;

## immagine del diagramma UML
![Formica](https://raw.githubusercontent.com/isissmorciano/2223_4M/main/Esercizi%20UML/Esercizio%20018/018_UML_Formica.png)


## codice del diagramma UML

``` python
@startuml

'Il movimento come variabile
'booleana assume true se la
'formica cammina e false se non
'cammina.

'L'energia consumata è associata
'al movimento per determinare
'quanta energia è stata consumata.

'Muovi genera un valore casuale tra 0 e 3 e muove la formica,
'la formica si muove solo se c'è energia.

'Controlla_energia è un metodo che determina se la formica si
'può muovere oppure no. La stessa cosa vale per il metodo
'Mangia che si attiva solo se Controlla_energia non rileva
'nessuna energia nella formica.

'Il metodo Muovi si attiva solo se Controlla_energia determina che la
'formica abbia energia: se c'è n'è la formica si muove e viceversa.

class Formica {
  nome : string
  movimento : bool
  energia_attuale : int
  energia_consumata : int
  energia_residua = energia_attuale - energia_consumata : int
  Mangia() : int
  Muovi() : int
  Controlla_energia() : int
}

@enduml
```

