$(document).ready(function() {
    //toggling meny
	$('.ms__nav-item').on('click', function () {
        $('.ms__nav-item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.ms__nested').slideUp();
        $(this).find('.ms__nested').slideToggle();
        $('.ms__nav-item.is-active').click(function(){

        });
        //
        //var nestedLists = $('.ms__nested');
        //var thisNestedList = $(this).find('.ms__nested');
        //
        //$(nestedLists).slideUp();
        //$(this).toggleClass('is-active');
        //$(thisNestedList).slideToggle();
    });


    $('.ms__nested-item').hover(function(){
        var subNestedList = $(this).find('.ms__subnested');
        $(subNestedList).toggle()

    })


});