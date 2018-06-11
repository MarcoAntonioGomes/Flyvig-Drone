$(document).ready(function () {
    $('.galeria img').click(function () {
        $('.bg').animate({'opacity':'0.60'}, 500, 'linear');
        $('.bg, .lb').css('display','block');

        var id = $(this).attr('id')

        if(id == 'img-1'){
            $('.close').css('left','52%')
        }

        if(id == 'img-2'){
            $('.close').css('left','46%')
        }
        if(id == 'img-3'){
            $('.close').css('left','60%')
        }
        if(id == 'img-4'){
            $('.close').css('left','58%')
        }
        if(id == 'img-5'){
            $('.close').css('left','52%')
            $('.close').css('bottom','94%')
        }

        var big = $(this).attr('src');

        $('.lb img').attr('src',big);
        $('.lb img').animate({'opacity':'1.00'}, 1500, 'linear');
    })

    $('.close').click(function () {
        $('.bg, .lb').css('display','none');
        $('.lb img').css('opacity','0');
    })


});