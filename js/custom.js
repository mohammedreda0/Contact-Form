$(function(){
    'use strict';

    var userError  = true;
    var emailError = true;
    var msgError   = true;


    $('.username').blur(function(){
        if($(this).val().length <= 3){
            $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
            userError = true;
        }else{
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
            userError = false;
        }

    });

    $('.email').blur(function(){
        if($(this).val() === ''){
            $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
            emailError = true;
        }else{
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
            emailError = false;
        }

    });

    $('.message').blur(function(){
        if($(this).val().length <= 10){
            $(this).css('border', '1px solid #F00').parent().find('.custom-alert').fadeIn(300).end().find('.asterisx').fadeIn(100);
            msgError = true;
        }else{
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(300).end().find('.asterisx').fadeOut(100);
            msgError = false;
        }

    });

    $('.contact-form').submit(function(e){
        if(userError === true || emailError === true || msgError === true){
            e.preventDefault();
            $('.username, .email, .message').blur();
        }
    });
});