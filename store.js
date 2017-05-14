//-----------------------------------------------------------------------------//

// store.js - script for storing and editing JSON in a local array

//-----------------------------------------------------------------------------//
//These watch for button clicks to change the form

$('#submit-data').on('click', getData);


//-----------------------------------------------------------------------------//

var chArr= [];

function getData(stats){
	var chName = $('#data-name').val();
	var chRace = $('#select-race option:selected').val();
	var chClass = $('#select-class option:selected').val();
	var chStr = $('#data-str').val();
	var chDex = $('#data-dex').val();
	var chCon = $('#data-con').val();
	var chInt = $('#data-int').val();
	var chWis = $('#data-wis').val();
	var chCha = $('#data-cha').val();
	var chPor = $('#data-file').val();
	
	chArr.push({name: chName, race: chRace, class: chClass, str: chStr, dex: chDex, con: chCon, int: chInt, wis: chWis, cha: chCha, portrait: chPor});
	
	event.preventdefault();
}