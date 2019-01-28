$(document).ready(function(){

	$("#tab-menu").click(function(){
		$(".menu").toggleClass('visible');
		});

	$(".menu").click(function(){
		$(this).toggleClass('visible');
	})
});
