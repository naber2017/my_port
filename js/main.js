var header_bg_height;
var service_bg_height;
var contact_bg_height;
var header_height = $('#section1').outerHeight(true);
var img_hov = $('.img_hover').outerHeight(true);
var portfolio_h = $('.proj_logo').outerHeight(true);
var portfolio_w = $('.proj_logo').outerWidth(true);
var portfolio_length = document.getElementsByClassName('proj_logo').length;
console.log(portfolio_length);



/*---------------WINDOW ONCHANGE RESIZE HEADER----------------------------------*/
var resize = function(e){
    var h = $('#section1').outerHeight(true);
		//console.log('h1='+h);
	    header_bg_height = $('#header-bg').outerHeight(true);
		service_bg_height = $('#service-bg').outerHeight(true);
		contact_bg_height = $('#contact-bg').outerHeight(true);
	    portfolio_h = $('.proj_logo').outerHeight(true);
		portfolio_w = $('.proj_logo').outerWidth(true);
		//console.log("ser_changed "+service_bg_height);
		img_hov = $('.img_hover').outerHeight(true);
	    document.getElementsByClassName('img_hover')[0].style.height = header_bg_height + 'px';
		document.getElementById('section1').style.height=header_bg_height+'px';
		document.getElementById('services').style.height = service_bg_height+'px';
		document.getElementById('contacts').style.height = contact_bg_height-5+'px';
	
	
		for(var i = 0; i < portfolio_length; i++ ){
			document.getElementsByClassName('proj_hover')[i].style.height = portfolio_h +'px';
			document.getElementsByClassName('proj_hover')[i].style.width = portfolio_w +'px';
			}
	   // console.log("image_res = "+header_bg_height);
};



(function(){
var time;
window.onresize = function(e){
  if (time)
    clearTimeout(time);
    time = resize(e);
 
}
})();
/*---------------WINDOW ONCHANGE RESIE HEADER----------------------------------*/

/*---------------WINDOW ONLOAD RESIZE HEADER-----------------------------------*/
(function(){

window.onload = function(e){
    
	header_bg_height = $('#header-bg').outerHeight(true);
	service_bg_height = $('#service-bg').outerHeight(true);
	contact_bg_height = $('#contact-bg').outerHeight(true);
	portfolio_h = $('.proj_logo').outerHeight(true);
	portfolio_w = $('.proj_logo').outerWidth(true);
	//console.log(contact_bg_height);
	//console.log("ser"+service_bg_height);
	//console.log("image = "+header_bg_height);
    	
		if(header_bg_height != header_height){
			for(var i = 0; i < portfolio_length; i++ ){
			document.getElementsByClassName('proj_hover')[i].style.height = portfolio_h +'px';
			document.getElementsByClassName('proj_hover')[i].style.width = portfolio_w +'px';
			}
			document.getElementById('section1').style.height=header_bg_height+'px';
		    document.getElementsByClassName('img_hover')[0].style.height = header_bg_height + 'px';
			document.getElementById('services').style.height = service_bg_height+'px';
			document.getElementById('contacts').style.height = contact_bg_height-5+'px';
		}
}
}
)();
/*---------------WINDOW ONLOAD RESIZE HEADER-----------------------------------*/


/*---------------SCROLL -------------------------------------------------------*/
 $(".header_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top+-70+'px'}, 1200);
    });

/*---------------SCROLL-------------------------------------------------------*/

/*---------------SHOW LANGUAGES--------------------------------------------------*/
 
$('.languages').mouseover(function(){
	$('.languages_list').fadeIn();
});
 
$('.languages_list').mouseleave(function(){
	$('.languages_list').fadeOut();
})
$('body').click(function(){
	$('.languages_list').fadeOut();
	//console.log('click!');
});


 



/*---------------SHOW LANGUAGES--------------------------------------------------*/

/*-------------------------PORTFOLIO---------------------*/
 



/*-------------------------PORTFOLIO---------------------*/