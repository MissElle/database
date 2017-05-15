//-----------------------------------------------------------------------------//

// store.js - script for storing and editing JSON in a local array

//-----------------------------------------------------------------------------//
//These watch for button clicks to change the form

$('#add-data').on('click', getData);


//-----------------------------------------------------------------------------//

var chArr= [];

function getData(){
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

	var chart = $('#database-layout');
	var row = $('<div>').addClass('row');
  var col = $('<div>').addClass('col');
	
	var newArrayObj = {name: chName, race: chRace, class: chClass, str: chStr, dex: chDex, con: chCon, int: chInt, wis: chWis, cha: chCha, portrait: chPor};

  chArr.push(newArrayObj);
	$('.data').remove();  //This deletes all chart rows and regenerates them... allows for sorting abilites in the array later
	chArr.forEach(generateTable);
	
	$('input').val('');
	$('select').removeAttr('selected');
	event.preventDefault();
}

function generateTable (chStats){
  var chart = $('#database-layout');
	var row = $('<div>').addClass('row data');
	
	var col = $('<div>').addClass('col').text(chStats.name);
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.race);
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.class);
	row.append(col);
	col = $('<div>').addClass('col').html('<p>Str:'+chStats.str+'</p>'+'<p>Dex:'+chStats.dex+'</p>'+'<p>Con:'+chStats.con+'</p>'+'<p>Int:'+chStats.int+'</p>'+'<p>Wis:'+chStats.wis+'</p>'+'<p>Cha:'+chStats.cha+'</p>');
	row.append(col);
	col = $('<div>').addClass('col').text(chStats.portrait);
	row.append(col);
	col=$('<div>').addClass('col').html('<button id="edit-data">Edit</button><button id="delete-data">delete</button>');
	row.append(col);

	chart.append(row);
	event.preventDefault();
}