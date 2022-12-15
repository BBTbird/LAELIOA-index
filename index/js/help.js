$(function() {
    
    // 头部定位
    $('#navlist>li').mouseover(function() {
            $('#navlist>li>a').removeClass('downloadfont')
        }).mouseout(function() {
            $('#navlist>li>a:eq(1)').addClass('downloadfont')
        })
    // 下滑出现
    $('.helpboss').slideDown(500);

    // 放置提示
    $('#help1').hover(
         function() {
                    $('#help00').css('display','none')
                    $('#help11').css('display','block')
                },
         function() {
                    $('#help11').css('display','none')
                    $('#help00').css('display','block')
    });

    $('#help2').hover(
         function() {
                    $('#help00').css('display','none')
                    $('#help22').css('display','block')
                },
         function() {
                    $('#help22').css('display','none')
                    $('#help00').css('display','block')
    })

    $('#help3').hover(
         function() {
                    $('#help00').css('display','none')
                    $('#help33').css('display','block')
                },
         function() {
                    $('#help33').css('display','none')
                    $('#help00').css('display','block')
    })

    $('#help4').hover(
         function() {
                    $('#help00').css('display','none')
                    $('#help44').css('display','block')
                },
         function() {
                    $('#help44').css('display','none')
                    $('#help00').css('display','block')
    })
    
    

})