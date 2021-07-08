$(document).ready(function () {
    $('.products_carousel').slick({
        speed: 1200,
        autoplay: true,
        vertical: true,
        slidesToShow: 2,
        sliderToScroll: 1,
        verticalSwiping: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="imgs/icons/prev_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="imgs/icons/next_arrow.svg"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                // centerPadding: '40px'
            }
        }]
    });

    $('.carousel_brands').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        touchThreshold: 10,
        nextArrow: '<button type="button" class="slick-next"><img src="imgs/icons/next_arrow.svg" alt="etc"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="imgs/icons/prev_arrow.svg" alt="etc"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    vertical: false,
                    touchThreshold: 10
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    touchThreshold: 10
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: false,
                    dots: true,
                    touchThreshold: 10
                }
            }
        ]
    });

    $('.carousel_news').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        touchThreshold: 10,
        nextArrow: '<button type="button" class="slick-next"><img src="imgs/icons/next_arrow.svg" alt="etc"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="imgs/icons/prev_arrow.svg" alt="etc"></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    touchThreshold: 10
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                    touchThreshold: 10
                }
            }
        ]
    });

    $('.carousel_promo').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        touchThreshold: 10,
        nextArrow: '<button type="button" class="slick-next"><img src="imgs/icons/next_arrow.svg" alt="etc"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="imgs/icons/prev_arrow.svg" alt="etc"></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    touchThreshold: 10
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                    touchThreshold: 10
                }
            }
        ]
    });

    $('ul.products_tabs').on('click', 'li:not(.products_tab_active)', function () {
        $(this)
            .addClass('products_tab_active').siblings().removeClass('products_tab_active')
            .closest('div.container').find('div.products_content').removeClass('products_content_active').eq($(this).index()).addClass('products_content_active');
    });

    // $('.catalog_wrapper').on('click', function (){
    //     $('.leftside_menu').removeClass('leftside_menu_away');
    // });
    // $('.leftside_menu_close').on('click', function (){
    //     $('.leftside_menu').addClass('leftside_menu_away');
    // });
});

// window.addEventListener('DOMContentLoaded', function() {

//     let tabs = document.querySelectorAll('.tabheader_item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', function(event) {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader_item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
// });

window.addEventListener('DOMContentLoaded', function() {
 
    // Tabs
    
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
 
    function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
 
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
 
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();
 
    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});