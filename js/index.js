jQuery(document).ready(function($){
    $('.sub-menu .menu-item a').each(function(){
       if($(this).attr('href') == document.location.href) {
           $(this).parent().addClass('current-menu-item');
       } else {
           $(this).parent().removeClass('current-menu-item');
       }

    });

    $('.sub-menu .menu-item a').on('click', function(){
        $('.sub-menu .menu-item a').each(function(){
            if($(this).attr('href') == document.location.href) {
                $(this).parent().addClass('current-menu-item');
            } else {
                $(this).parent().removeClass('current-menu-item');
            }
        });
    });

});