$(function() {
    $('#navlist>li').mouseover(function () {
        $('#navlist>li>a').removeClass('downloadfont')
    }).mouseout(function () {
        $('#navlist>li>a:eq(4)').addClass('downloadfont')
    })

    // $('.smo').fadeIn(500);
    // $('.smo1').fadeIn(500);
    //
    // $('.smofont').fadeIn(1200);
    // $('.smo1font').fadeIn(1200);

    $('#next1').hover(
        function () {
            $('#nextimg2,#nextimg3,#nextimg4,#nextimg5').fadeOut(0)
            $('#nextimg1').fadeIn(300)
            $('.on-head-img-div-img').css('animation','auto')
            
        },
        function() {

        }
    )

    $('#next2').hover(
        function () {
            $('#nextimg1,#nextimg3,#nextimg4,#nextimg5').fadeOut(0)
            $('#nextimg2').fadeIn(300)
            $('.on-head-img-div-img').css('animation','auto')
        },
        function () {

        }
    )

    $('#next3').hover(
        function () {
            $('#nextimg1,#nextimg2,#nextimg4,#nextimg5').fadeOut(0)
            $('#nextimg3').fadeIn(300)
            $('.on-head-img-div-img').css('animation','auto')
        },
        function () {

        }
    )

    $('#next4').hover(
        function () {
            $('#nextimg1,#nextimg2,#nextimg3,#nextimg5').fadeOut(0)
            $('#nextimg4').fadeIn(300)
            $('.on-head-img-div-img').css('animation','auto')
        },
        function () {

        }
    )
    $('#next5').hover(
        function () {
            $('#nextimg1,#nextimg2,#nextimg3,#nextimg4').fadeOut(0)
            $('#nextimg5').fadeIn(300)
            $('.on-head-img-div-img').css('animation','auto')

        },
        function () {

        })

    $('#newbotton-left,#newbotton1').click(function() {
        $('.newold').css('display','none')
        $('.newnone').css('display','block')
        $('#newbotton2').css('background','none')
        $('#newbotton1').css('background','#3db0ff')
    })
    
    
    $('#newbotton-right,#newbotton2').click(function() {
        $('.newnone').css('display','none')
        $('.newold').css('display','block')
        $('#newbotton1').css('background','none')
        $('#newbotton2').css('background','#3db0ff')
    })


    $('#img1').click(function() {
        $('.chengzhen,.jiaoton,.dixing,.shizheng').fadeOut(10)
        $('.bailan').fadeIn(100)
    })
    
    $('#img2').click(function() {
        $('.bailan,.jiaoton,.dixing,.shizheng').fadeOut(10)
        $('.chengzhen').fadeIn(100)
    })
    
    $('#img3').click(function() {
        $('.bailan,.chengzhen,.dixing,.shizheng').fadeOut(10)
        $('.jiaoton').fadeIn(100)
    })
    
    $('#img4').click(function() {
        $('.bailan,.chengzhen,.jiaoton,.shizheng').fadeOut(10)
        $('.dixing').fadeIn(100)
    })
    
    $('#img5').click(function() {
        $('.bailan,.chengzhen,.jiaoton,.dixing').fadeOut(10)
        $('.shizheng').fadeIn(100)
    })

    
    

        
    
    
    
})
            
            
            


