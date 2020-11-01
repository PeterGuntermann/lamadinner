
# Entitäten
```json
"Game": {
    "id": string,
    "players": SortedList<Player>,
    "cardManager": CardManager
}

"CardManager": {
    "stack": SortedList<Card>,
    "hands": Map<Player, Set<Card>>,
    "field": SortedList<Card>
}

"Player": {
    "id": string,
    "name": string,
    "score": number
}

"Card": {
    "id": string,
    "value": CardValue
}

"CardValue": Enum = {
    "1", "2", "3", "4", "5", "6", "Lama"
}

"Round": {
    "count": number
}
```


# Events
+ Jemand startet eine Partie Lama.
+ Ein Spieler 
    - registriert sich für das Spiel.
    - legt eine Karte.
    - zieht eine neue Karte.
    - steigt aus der aktuellen Runde aus.
    - legt seine letzte Karte ab und gewinnt die Runde.
+ Der Punktestand eines Spielers
    - wird erhöht.
    - wird verringert.
    - übersteigt 40 und er verliert das Spiel.
+ Der Kartenstapel
    - wird leer.
