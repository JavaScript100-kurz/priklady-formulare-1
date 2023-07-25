console.log('JS funguje');

/*
Formuláře:
- typy polí

Události:
- submit
- input
- change

event.target
*/

const formular = document.querySelector('#formular');
const jmenoEl = document.querySelector('#jmeno');
const prijmeniEl = document.querySelector('#prijmeni');
const souhlasEl = document.querySelector('#souhlas');
const mestoEl = document.querySelector('#mesto');

const zpravaEl = document.querySelector('#zprava');


formular.addEventListener('submit', (event) => {
	// zabranime standardnimu odeslani formulare
	event.preventDefault();

	zpravaEl.textContent = `Tvoje jméno je ${jmenoEl.value} ${prijmeniEl.value} a tvoje směrovací číslo je ${mestoEl.value}`;

	console.log( mestoEl.value );

	console.log( souhlasEl.checked );


	// jmenoEl.value = '';
	// prijmeniEl.value = '';

	console.log('formular odeslan');
});


prijmeniEl.addEventListener('input', () => {
	console.log('input', prijmeniEl.value);
});

prijmeniEl.addEventListener('change', () => {
	console.log('change', prijmeniEl.value);
});



souhlasEl.addEventListener('change', () => {
	console.log(souhlasEl.checked);
});

mestoEl.addEventListener('change', () => {
	console.log(mestoEl.value);
});