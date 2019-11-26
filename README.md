# Flappy Wasp Game


## Steg 0. Sätt upp miljö

***[[HITTA STARTFILERNA HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-0)***

### Ladda ner projekt
Du hittar startfilerna på https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-0. För att ladda ner projektet så trycker du på en gröna knappen “Clone or download”. Då öppnas en liten ruta. Längst ner till höger står det “Download ZIP”, tryck på den så laddas projektet ner till din dator.

### Installera Visual Studio Code
Du kan ladda ner Visual Studio Code på https://code.visualstudio.com/. Installera och öppna programmet på din dator.

### Installera Live Server-plugin
Du laddar ner Live Server som en plugin till Visual Studio Code. När du har laddat ner pluginen så kan du starta en server genom att trycke på “Go Live” ner i högra hörnet på Visual Studio Code.

Öppna localhost:5500 och du borde nu se en hemsida där det står “Flappy Wasp Game”.


## Steg 1. Lägg till p5.js

***[[SE DEN FÄRDIGA KODEN HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-1)***

Vi börjar med att gå in på https://p5js.org/get-started/ för att ladda ner biblioteket. 

```html
<!DOCTYPE html>
<html>
<head>
<title>Flappy Wasp Game</title>
</head>
<body>
<h1>Flappy Wasp Game</h1>
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
</body>
</html>
```


## Steg 2. Skapa spelet – game.js

***[[SE DEN FÄRDIGA KODEN HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-2)***

Nu när vi har en HTML-sida och kan visa den i webbläsarfönstret med vår server så kan vi gå vidare till att faktiskt skapa själva spelet!

```JavaScript
function init() {
	this.x = 0;
}
```

Lägg till filen i din index.html för att den ska synas på din hemsida.

```html
<!DOCTYPE html>
<html>
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
<script src="game.js"></script>
</html>
```


## Steg 3. Skapa geting – wasp.js

***[[SE DEN FÄRDIGA KODEN HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-3)***

Skapa en ny fil wasp.js.

```JavaScript
function Wasp() {}
```

```html
<!DOCTYPE html>
<html>
<script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
<script src="game.js"></script>
<script src="wasp.js"></script>
</html>
```


## Steg 4. Skapa hinder – pipe.js

***[[SE DEN FÄRDIGA KODEN HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-4)***

Skapa en ny fil pipe.js.

```JavaScript
function Pipe() {}
```


## Steg 5. Skapa poängräknare

***[[SE DEN FÄRDIGA KODEN HÄR]](https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub/tree/steg-5)***

## Idéer till utökningar av spelet
- Visa poängräknare som ökar med tiden.
- Lägg till tidningar som ger extrapoäng.
- Lägg till “aftonbladet” tidningar som tar poäng.
- Spelet ökar gradvis i hastighet ju längre man har spelat.
- Gör en startskärm med Expressen-, Code Pub-, Netlight-loggan och “starta”-knapp.
