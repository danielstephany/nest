
$("#toggle").click(function() {
	$("body").toggleClass("open");
});

$(".foot-nav-target").click(function() {
	$(this).parent().parent().toggleClass("foot-nav-open");
});