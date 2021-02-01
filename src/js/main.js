import $ from 'jquery';
window.$ = $;
let lastScrollPosition = 0;
let elementPosition = true;

window.$(document).ready(function() {
    window.$(document).scroll(function(){
        var currentScrollPosition = window.$(this).scrollTop();
        if(currentScrollPosition > lastScrollPosition && elementPosition === true) {
			window.$('h1.bannerTitle').css("transform", "translateY(-25px)");
			elementPosition = false;
		} else if (currentScrollPosition < lastScrollPosition && elementPosition === false) {
			window.$('h1.bannerTitle').css("transform", "translateY(0px)");
			elementPosition = true;
		}
		lastScrollPosition = currentScrollPosition;        
    });

}); 
