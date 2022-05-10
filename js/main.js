$(document).ready(function () {

   var flag = 0;
   $('.main--lang').click(function () {
      console.log('123');
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });



   $('.eng').click(function () {
      $('.header__lang__item:nth-child(1) span').text('EN');
      $('#l-1').html('Mobile Application Development and Monetization');
      $('#l-2').html('We offer:');
      $('#l-3').html('Full cycle of unique product development from idea to release ');
      // $('#countdown').removeClass('ru');
      // $('#countdown-2').removeClass('ru');
      $('#l-4').html('Our own marketing department with vast experience');
      $('#l-5').html('We are always open to talented developers, designers, product managers, analysts and marketers');
      // $('.c1').html('read more ➞');
      $('#l-6').html('We are ready to implement the most unusual ideas with the most promising people!');
      $('#l-7').html('Flexy Team - this is many years of experience, unlimited budgets and constant development. There are no analogues of such teams on the market!');
      $('#l-8').html('For more than 10 years, our team has consistently been in the tops of the leaders in arbitrage traffic. During this time, we have gained vast experience and skillfully work with almost all traffic sources, we know all the subtleties and pitfalls.');
      $('#l-9').html('Affiliate marketing');
      $('#l-10').html('Arbitration team');
      $('#l-11').html('Our main <br> advantages:');
      $('#l-12').html('We strive to maximize the KPI of each employee, we stand for long-term partnerships and do not support staff turnover.');
      $('#l-13').html('We have our own technical development department, so we do not experience any problems with apps, as happens in other arbitrage companies.');
      $('#l-14').html('We guarantee reliable traffic schemes, production bundles, process automation, consumables, infrastructure, the best conditions on the market and unlimited budgets.');
      $('#l-15').html('The most important thing is the invaluable experience of working with some of the top specialists in the field of traffic arbitrage. ');
      // $('#l-16').html('<span>Phone Users:</span> Download/Install MetaMask on your phone via Google Play or App Store.');
      $('#l-17').html('We are open <br> to new <br> ideas');
      $('#l-18').html('To stay the best, you need to constantly develop! Our team is ready to support indie developers and small studios on mutually beneficial terms.');
      $('#l-19').html('From us:');
      $('#l-20').html('Infrastructure');
      $('#l-21').html('Expertise');
      $('#l-22').html('Marketing ');
      $('#l-23').html('Investment');
      $('#l-24').html('From you:');
      $('#l-25').html('Ideas');
      $('#l-26').html('Product ');
      $('#l-27').html('Burning eyes');
      $('#l-28').html('You can contact us or <br> fill out the application here');
      // $('#l-29').html('placeholder');
      // $('#l-30').html('FAQ');
      // $('#l-31').html('Who is the owner and developer of the project?');
      $('#l-32').html('Working  <br> in a cozy <br> office');
      $('#l-33').html('Our office is located in the center of St. Petersburg (Petrogradka district) and has everything you need for productive work');
      $('#l-34').html("Flexible schedule and possibility for working on distance");
      $('#l-35').html('Friendly management style');
      $('#l-36').html("Work in an atmosphere of trust and mutual understanding");
      $('#l-37').html("In the kitchen we always have healthy snacks, nuts, fruits, tea, coffee and sweets");
      $('#l-38').html("Dining and lounge area");
      $('#l-39').html("I can't buy a token.");
      $('#l-40').html("Contact us:");
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });
   $('.ru').click(function () {
      $('.header__lang__item:nth-child(1) span').text('RU');

      $('#l-1').html('Разработка и монетизация мобильных приложений');
      $('#l-2').html('Мы предлагаем:');
      $('#l-3').html('Полный цикл разработки уникальных продуктов от идеи до релиза');
      // $('#countdown').addClass('ru');
      // $('#countdown-2').addClass('ru');
      $('#l-4').html('Собственный маркетинговый отдел с огромным опытом');
      $('#l-5').html('Всегда открыты для талантливых разработчиков, дизайнеров, продакт менеджеров, аналитиков и маркетологов');
      // $('.c-1').html('подробнее ➞');
      $('#l-6').html('Мы готовы реализовывать самые необычные идеи с самыми перспективными людьми!');
      $('#l-7').html('<span class="yellow">Flexy Team</span> - это многолетий опыт, безлимитные бюджеты и постоянное развитие. Аналогов таких команд на рынке нет!');
      $('#l-8').html('Наша команда более 10 лет стабильно находится в топах лидеров арбитражного трафика. За это время мы приобрели огромный опыт и умело работаем практически со всеми источниками трафика, знаем все тонкости и подводные камни.');
      $('#l-9').html('Партнерский маркетинг');
      $('#l-10').html('Арбитражная команда');
      $('#l-11').html('Наши главные преимущества');
      $('#l-12').html('Мы нацелены на максимальное повышение КПД каждого сотрудника, выступаем за долгосрочные партнерские отношения и не плодим текучку кадров.');
      $('#l-13').html('Мы располагаем собственным техническим отделом разработки, поэтому не испытываем никаких проблем в приложениях, как это случается в других арбитражных компаниях.');
      $('#l-14').html('Мы гарантируем проверенные схемы отлива, продакшен связок, автоматизацию процессов, расходники, инфраструктуру, лучшие условия на рынке и неограниченные бюджеты');
      $('#l-15').html('Самое главное - это бесценный опыт работы с одними из самых топовых специалистов в сфере арбитража трафика.');
      // $('#l-16').html('идеи');
      $('#l-17').html('Мы открыты для новых идей');
      $('#l-18').html('Чтобы оставаться лучшими - нужно постоянно развиваться! Наша команда готовы поддержать инди разработчиков и небольшие студии на взаимовыгодных условиях.');
      $('#l-19').html('от нас');
      $('#l-20').html('Инфраструктура');
      $('#l-21').html('Экспертиза');
      $('#l-22').html('Маркетинг');
      $('#l-23').html('Инвестиции');
      $('#l-24').html('от вас');
      $('#l-25').html('Идеи');
      $('#l-26').html('Продукт');
      $('#l-27').html('Горящие глаза');
      $('#l-28').html('Можно связаться с нами или <br> оставить заявку тут');
      // $('#l-29').html('  телефон или телеграм"');
      // $('#l-30').html('ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ');
      $('#l-31').html('работа у нас');
      $('#l-32').html('Работа в <br> уютном <br> офисе');
      $('#l-33').html('Наш офис находится в центре Санкт-Петербурга (р-н Петроградка) и имеет все самое необходимое для продуктивной работы');
      $('#l-34').html('Гибкий график и возможность удаленной работы');
      $('#l-35').html('Демократичный стиль управления');
      $('#l-36').html('Работа в атмосфере доверия и взаимопонимания');
      $('#l-37').html('На кухне всегда: здоровые перекусы, орехи, фрукты, чай, кофе и сладости');
      $('#l-38').html('Обеденная и lounge зона');
      $('#l-39').html('Игровая зона с настольным хоккеем, плазмой, PS5, Oculus Quest 2 и многое другое');
      $('#l-40').html('Наши контакты');
      if (flag == 0) {
         flag = 1;
      } else {
         flag = 0;
      }
      $('.header__lang').toggleClass('active');
   });

});
//Валидация и отправка формы

$(document).ready(function () {
   $('[data-submit]').on('click', function (e) {
      e.preventDefault();
      $(this).parent('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );


   // Функция валидации и вывода сообщений
   function valEl(el) {
      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },

         // Начинаем проверку id="" формы
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {

               // Если у формы id="form_message" - делаем:
               case 'form_message':
                  $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize()
                     })
                     .done(function () {
                        console.log('Success');
                     })
                     .fail(function () {
                        console.log('Fail');
                     })
                     .always(function () {
                        console.log('Always');
                        setTimeout(function () {
                           $('#message-for-user').fadeIn();
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);
                        $('#message-for-user').on('click', function (e) {
                           $(this).fadeOut();
                        });

                     });
                  break;
            }
            return false;
         }
      })
   }

   // Запускаем механизм валидации форм, если у них есть класс .js-form
   $('.form-wrapper').each(function () {
      valEl($(this));
   });

});
















var scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 400) {
      $(".header-menu").css({
         "background": "#1b202f"
      })
   }
   if (400 > scrolled) {
      $(".header-menu").css({
         "background": "transparent"
      })
   }

}