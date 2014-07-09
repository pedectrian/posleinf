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
        $('.sign-up-form').parent().wrap('<div id="container-form" class="overlay" style="display: none"><div class="popup-window"></div></div>');
        $('#container-form .popup-window').prepend('<div class="close-icon close-sign-up"></div>');
        $('#container-form .sign-up-form-title').css('display', 'none');
        $('#container-form, #container-form .sign-up-form').fadeIn('slow');
    });

    $('.close-sign-up').live('click', function(){
        $('.sign-up-form').css('display', 'none');
        $('#container-form .popup-window').removeClass('popup-window');
        $('#container-form').attr('id', 'blabla');
        $('.sign-up-form-title').css('display', 'block');
        $(this).remove();
    });

    $('.ask-question-form-title').on('click', function(){

        $('.ask-question-form').parent().wrap('<div id="container-form" class="overlay" style="display: none"><div class="popup-window"></div></div>');;
        $('#container-form .popup-window').prepend('<div class="close-icon close-ask-question"></div>');
        $('#container-form .ask-question-form-title').css('display', 'none');
        $('#container-form, #container-form .ask-question-form').fadeIn('slow');
    })

    $('.close-ask-question').live('click', function(){
        $('.ask-question-form').css('display', 'none');
        $('.ask-question-form').unwrap();
        $('.ask-question-form').unwrap();
        $('.ask-question-form-title').css('display', 'block');
        $(this).remove();
    });
});
