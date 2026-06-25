$(document).ready(function() {
    function initJoinSlider() {
        if ($(window).width() < 580) {
            if (!$('.joinTheBrokerNetworkCards').hasClass('slick-initialized')) {
                $('.joinTheBrokerNetworkCards').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 1000,
                    autoplay: true,
                    autoplaySpeed: 2000
                });
            }
        } else {
            if ($('.joinTheBrokerNetworkCards').hasClass('slick-initialized')) {
                $('.joinTheBrokerNetworkCards').slick('unslick');
            }
        }
    }

  
    initJoinSlider();

   
    $(window).on('resize', function() {
        initJoinSlider();
    });
});
