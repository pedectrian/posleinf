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
        $('#container-form .popup-window').html($('.sign-up-form').parent().html());
        $('#container-form .sign-up-form-title').css('display', 'none');
        $('#container-form, .sign-up-form').fadeIn('slow');
    });

    $('.ask-question-form-title').on('click', function(){

        $('#container-form .popup-window').html($('.ask-question-form').parent().html());
        $('#container-form .ask-question-form-title').css('display', 'none');
        $('#container-form, .ask-question-form').fadeIn('slow');
    })
});

function hidePopup() {
    $('#container-form').fadeOut('slow');
}