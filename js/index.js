jQuery(document).ready(function($){
    $('.sub-menu .menu-item a').each(function(){
       if($(this).attr('href') == document.location.href) {
           $(this).parent().addClass('current-menu-item');
       } else {
           $(this).parent().removeClass('current-menu-item');
       }

    });

    $('.sub-menu .menu-item a').on('click', function(){
        $('.sub-menu .menu-item').removeClass('current-menu-item');
        $(this).parent().addClass('current-menu-item');
    });

    $('.sign-up-form-title').on('click', function(){
        $('#container-form').html($('.sign-up-form').parent().html());
        $('#container-form').fadeIn('slow');
    });

    $('.ask-question-form-title').on('click', function(){

        $('#container-form').html($('.ask-question-form').parent().html());
        $('#container-form').fadeIn('slow');
    })
});

function hidePopup() {
    $('#container-form').fadeOut('slow');
}