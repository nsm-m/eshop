console.log("Hello");

$(document).ready(function (e) {

    $('#btnValidate').click(function (e) {
        e.preventDefault();

        var sEmail = $('#txtEmail').val();

        if (validateEmail(sEmail)) {
            alert('Email is valid');
        }
        else {
            alert('Invalid Email Address');

        }
    });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

    // var myCarousel = document.querySelector('#myCarousel')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //     interval: 2000,
    //     wrap: false
    // })

    //  carousel();
    var myCarousel = document.querySelector('#banner-caroussel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: false
    })

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
      //  setGallerySize: false,
        imagesLoaded: true
    });

    $(document).ready(function () {
        $('.hotels-slider').slick({
           // setting- name: setting - value

            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
           
        });
    });

});