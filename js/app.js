$(document).ready(function(){

	$("#tab-menu").hover(function(){
		$(".menu").toggleClass('visible');
	});

	$(".menu").mouseenter(function(){
		$(this).addClass('visible');
	})
});

