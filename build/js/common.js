$(document).ready(function() {

    //toggling menu
	$('.ms__nav-item').on('click', function () {
        $('.ms__nav-item').removeClass('is-active');
        $(this).addClass('is-active');
        $(this).find('.ms__nested').slideToggle().end().siblings().find('.ms__nested').slideUp();
        event.stopPropagation()
    });

    //hide menu on body-click
    $('body').on('click', function(){
        $('.ms__nav-item').removeClass('is-active');
        $('.ms__nested').slideUp();
    });

    //show-hide subnested lists
    $('.ms__nested-item').hover(function(){
        var subNestedList = $(this).find('.ms__subnested');
        $(subNestedList).toggle()
    });

    //toggling placeholder attribute
    $('.ms__search-query').on('focus',function(){
        $(this).removeAttr('placeholder')
    }).on('focusout', function () {
        $(this).attr('placeholder', 'Search Microsoft.com')
    });


});