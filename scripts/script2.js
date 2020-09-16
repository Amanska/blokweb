console.log('bladeren js');

// data: het foto boek
var fotos = ['example1.jpg', 'example2.jpg', 'example3.jpg'];
/*eslint 'no-console':0*/
// a. DOM elementen die een rol spelen in dit script
var fotoImg = document.querySelector('#foto2');
var vooruitButton = document.querySelector('#vooruit2');
var achteruitButton = document.querySelector('#terug2');

var huidigFotoNr = 0 ; // initieel op 0
fotoNu();

//eventhandelers 

function fotoNu() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = 'images/' + fotos[huidigFotoNr];
}

function bladerVooruit() {
huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 1 ; // terug naar begin
	}
	fotoNu();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 1 ) { // voorbij het begin 
		huidigFotoNr = fotos.length -1 ; // terug naar einde
	}
	fotoNu();
}


// d. eventlisteners: voor de heen en weer knoppen die de bladerfuncties aanroepen
vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );