import $ from 'jquery';
window.$ = $;

window.$(document).ready(function() {
	window.$('.buttonCard').mouseover(function(){
		window.$(this).find('.favorit').css('opacity', 0);
		if (localStorage.getItem("resep" + window.$(this).closest('.card').attr('id'))) {
			window.$(this).find('.heart').html('<i class="fas fa-heart"></i>');	
		} else {
			window.$(this).find('.heart').html('<i class="far fa-heart"></i>');
		}
		window.$(this).find('.heart').css('opacity', 1);
		
	});
	window.$('.buttonCard').mouseout(function(){
		window.$(this).find('.favorit').css('opacity', 1);
		window.$(this).find('.heart').css('opacity', 0);
	});

	window.$('.buttonCard').click(function(){
		let id = window.$(this).closest('.card').attr("id");
		if (localStorage.getItem("resep" + id)) {
			localStorage.removeItem("resep" + id);
			window.$(this).find('.heart').html('<i class="far fa-heart"></i>');
		} else {
			localStorage.setItem("resep" + id, 1);
			window.$(this).find('.heart').html('<i class="fas fa-heart"></i>');
		}
	});
});