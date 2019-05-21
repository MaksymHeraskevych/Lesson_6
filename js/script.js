
$('.tabs__btn').click(function () {
	var id = $(this).attr('data-tab'),
	content = $('.tabs__content[data-tab = "' + id + '"]');

 $('.tabs__btn.active').removeClass('active'); 
   $(this).addClass('active'); 
   
   $('.tabs__content.active').removeClass('active'); 
   content.addClass('active'); 
});


// Task 2


$('.accordion__btn').click(function(){
	$('.accordion .accordion__content').not($(this).next()).slideUp(500);
	 $(this).next().slideToggle(1000);
})
