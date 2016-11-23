$(document).ready(function(){

	$('button#btn-label').on('click', function(){
		$('#contenu').append('<div class="add-label add-content">Texte du label <input type="text"> <button class="ok">ok</button></div>');
	});

	$('button#btn-zone').on('click', function(){
		$('#contenu').append('<div class="add-id add-content">id de la zone de texte <input type="text"> <button class="ok">ok</button></div>');
	});

	$('button#btn-bouton').on('click', function(){
		$('#contenu').append('<div class="add-button add-content">Texte du bouton <input type="text"> <button class="ok">ok</button></div>');
	});

	$('body').on('click', 'button.ok', function(){

		var parent = $(this).closest('.add-content');
		var div = $('<div></div>');

		var label = $('input', parent).val();
		var id = $('input', parent).val();
		var labelBtn = $('input', parent).val();

		if( parent.hasClass('add-label')){
			$('#gauche').append('<span> ' + label + ' </span>');
			parent.remove();
		}
		if( parent.hasClass('add-id')){
			$('#gauche').append('<input id="'+id+'" type="text">');
			parent.remove();
		}
		if( parent.hasClass('add-button')){
			$('#gauche').append('<button>'+ labelBtn +'</button>');
			parent.remove();
		}
	});

});
