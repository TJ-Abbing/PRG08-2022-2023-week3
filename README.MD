Dit model is gemaakt om objecten te herkennen met behulp van de webcam van mijn computer. Het model maakt gebruik van een voorgetraind neuraal netwerk genaamd MobileNet om de kenmerken van de objecten te pakken. Vervolgens train ik een classificatiemodel met behulp van deze kenmerken en de video van mijn webcam.

Om het model te trainen, voeg ik beelden toe aan de verschillende categorieën die ik wil herkennen, zoals "rood", "blauw" en "wit". Telkens wanneer ik op de bijbehorende knop klik, voeg ik een beeld van dat specifieke object toe aan de trainingset van die categorie. Op deze manier leert het model de visuele kenmerken van elk object herkennen.

Nadat ik het model heb getraind, kan ik het gebruiken om objecten in realtime te classificeren. Wanneer ik op de "Play" knop klik, wordt er een willekeurige categorie gekozen en wordt er een bijbehorende tekst gegenereerd die aangeeft welk object ik moet zoeken. Vervolgens kan ik op de "Check" knop klikken om het object te laten classificeren door het model. Het resultaat wordt weergegeven in de tekstuitvoer en wordt ook uitgesproken met behulp van de spraaksynthese van de browser.

Het model kan ook getraind worden op andere categorieën en deze kan worden opgeslagen voor toekomstig gebruik. Het opgeslagen model kan worden geladen met behulp van de "Load" knop.
