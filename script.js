$(function() {
    $('.vegas').vegas({
      slides: [
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv01_pc.jpg' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv02_pc.jpg' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv03_pc.jpg' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv04_pc.jpg' }
      ],
       delay: 7000,
       timer: false,
       transitionDuration: 1000,
       animation: 'kenburns'
    });
    $('.white').delay(500).animate({
      'margin-left':'200%'
    },1000);
    $('.enjoy-wrap').delay(800).animate({
      'margin-left':'0'
    },500);
    $('.white-two').delay(1400).animate({
      'margin-left':'200%'
    },1000);
    $('.white-three').delay(1500).animate({
      'margin-left':'200%'
    },1000);
    $('.white-four').delay(1600).animate({
      'margin-left':'200%'
    },1000);
    $('.white-five').delay(1700).animate({
      'margin-left':'200%'
    },1000);
    $('.name').vegas({
      slides: [
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv01_cap_pc.png' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv02_cap_pc.png' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv03_cap_pc.png' },
       { src: 'https://www.asoview.com/brand/sports-tourism/img/kv04_cap_pc.png' }
      ],
       delay: 7000,
       timer: false,
       transitionDuration: 1000
    });
    $('.orange').css('opacity','0');
    $('.orange').delay(600).animate({
      'margin-left':'0',
      'opacity':'1'
    },600);
    $('.blue-img').css('opacity','0');
    $('.blue-img').delay(800).animate({
      'margin-right':'0',
      'opacity':'1'
    },600);
    $('.tour').delay(1600).css('width','0').animate({
      'width':'150px'
    },600);
    $('.tour-sm').delay(1600).css('width','0').animate({
      'width':'100%'
    },600);
    $('.fadein').delay(1000).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });
    $('.fadein-two').delay(1400).queue(function(){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    });

    $(window).scroll(function (){
        $('.fadein-three,.fadein-four,.fadein-five,.fadein-six').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
              $('.fadein-three').delay(100).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-four').delay(400).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });$('.fadein-five').delay(700).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-six').delay(1000).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
            }
        });
    });
    $(window).scroll(function (){
        $('.white-seven,.back,.top,.triangle-left,.fadein-seven').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
              $('.white-seven').delay(500).animate({
                'margin-left':'100%'
              },600);
              $('.back,.top').animate({
                'margin-left':'0'
              },800);
              $('.triangle-left').delay(1300).animate({
                'margin-left':'0'
              },1000);
              $('.triangle-right').delay(1300).animate({
                'margin-right':'0'
              },1000);
              $('.fadein-seven').delay(2300).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-eight').delay(2800).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
            }
        });
    });
    $(window).scroll(function (){
        $('.fadein-nine,.fadein-ten').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
              $('.white-six').delay(500).animate({
                'margin-left':'100%'
              },600);
              $('.fadein-nine').delay(1500).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-ten').delay(1500).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-eleven').delay(2000).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
              $('.fadein-twelve').delay(2300).queue(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
              });
            }
        });
    });
});
