//jQuery stuff
//define (['jquery','methods'],function($,methods) {
define (['jquery','methods'],function($,whatever) {
	//$('body').html('Hello there from the other side!!')
	//since we have included the 'angular' from the js/config.js file
	//we can use it here too
	
	//using the 'methods' passed value here as part of the AMD
	$('#clickMe').click(function () {
		//methods.showAlert('I was clicked!!');
		whatever.changeHTML('I was clicked!!');
	});
});
