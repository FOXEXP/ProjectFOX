/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]')
    const closeBtn = document.querySelector('.modal__close')
    const switchmodal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchmodal);
        });

        closeBtn.addEventListener('click', switchmodal);
    });
    */
   $(document).ready(function() {
       var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

       modalBtn.on('click', function() {
           modal.toggleClass('modal--visible');
        });
        closeBtn.on('click', function() {
            modal.toggleClass('modal--visible');
            console.log(1);
        });
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })

        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');

        next.css('left',prev.width()+10 + bullets.width() + 10 )
        bullets.css('left',prev.width()+10 )

        /*new Window().innerWidth(); */

        $('.modal__form').validate({
            errorClass: "invalid",
            rules: {
                userName: {
                    required: true,
                    minlength: 2
                },
                userPhone: "required",
                userEmail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },
                userPhone: "Телефон обязателен",
                userEmail: {
                    required: "Обязательно укажите e-mail",
                    email: "Введите в формате: name@domain.com"
                }
            },
            submitHandler: function(form) {
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        alert('Форма отправлена, мы свяжемся с вами через 10 минут');
                        $(form)[0].reset();
                        modal.removeClass('modal--visible');
                    },
                    error: function (response) {
                        console.error('Ошибка запроса' + response)
                    }
                });
              }
        });


        // маска для телефона

        $('[type=tel]').mask('+7(000)-000-00-00', { placeholder: "+7(___)-___-__-__" });
        var player;
        $('.video__play').on('click', function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '465',
              width: '100%',
              videoId: 'x9VrQimFwIE',
              events: {
                'onReady': videoPlay,
              }
            });
          })

          function videoPlay(event) {
              event.target.playVideo();
          }

    });
    