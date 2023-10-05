(function ($) {
  'use strict';

  $(function () {
    //menu sandwich
    document
      .querySelector('.ob-menu-sandwich')
      .addEventListener('click', function (e) {
        e.preventDefault();
        $('.ob-catalog-menu__block').slideToggle();
        $('.ob-catalog-menu-sub:visible').slideUp();
        document
          .querySelectorAll('.ob-catalog-menu__item.active')
          .forEach(function (item) {
            item.classList.remove('active');
          });
      });

    //header dropdown
    const headerOS = document.querySelector('#headerOS');
    const sellerHeader_rs = document.querySelector('#sellerHeader_rs');
    let overTimeoutId;
    document
      .querySelectorAll('.bj-page-header__sub-item.i-menu')
      .forEach(function (item) {
        item.addEventListener('mouseenter', function (e) {
          //hide sidenav
          $('.ob-catalog-menu__block').slideUp();

          //hide cart dropdown
          if (window.cartDropdownFlag) {
            window.cartDropdownFlag = false;
            setTimeout(function () {
              if (!window.cartDropdownFlag) {
                $('.bj-page-header__cart-dropdown article')
                  .slideUp()
                  .removeClass('i-animate');
                $('#cartDropdown').removeClass('i-loaded');
              }
            }, 100);
          }

          //open sub menu
          const subMenu = item.querySelector('.bj-page-header__sub-menu');

          subMenu.classList.add('i-show');
          sellerHeader_rs.classList.add('i-show-submenu');

          setTimeout(function () {
            subMenu.classList.add('i-visible');
          }, 100);

          clearTimeout(overTimeoutId);
          overTimeoutId = setTimeout(function () {
            sellerHeader_rs.classList.add('i-visible-submenu');
          }, 100);
        });

        item.addEventListener('mouseleave', function (e) {
          const subMenu = item.querySelector('.bj-page-header__sub-menu');
          subMenu.classList.remove('i-visible');
          sellerHeader_rs.classList.remove('i-visible-submenu');

          setTimeout(function () {
            subMenu.classList.remove('i-show');
          }, 300);

          clearTimeout(overTimeoutId);
          overTimeoutId = setTimeout(function () {
            sellerHeader_rs.classList.remove('i-show-submenu');
          }, 300);
        });
      });

    //OBCatalogMenu
    if (window.matchMedia('(max-width: 1024px)').matches) {
      document
        .querySelectorAll('.ob-catalog-menu__link')
        .forEach(function (elem) {
          elem.addEventListener('click', function (e) {
            if (elem.className.search('i-link') !== -1) {
              return;
            }
            e.preventDefault();

            if (
              elem
                .closest('.ob-catalog-menu__item')
                .className.search('active') < 0
            ) {
              //slide up
              document
                .querySelectorAll('.ob-catalog-menu__item.active')
                .forEach(function (menuItem) {
                  menuItem.classList.remove('active');
                });
              $('.ob-catalog-menu-sub:visible').slideUp();
            }

            //show current
            elem.closest('.ob-catalog-menu__item').classList.toggle('active');
            $(
              elem.parentNode.querySelector('.ob-catalog-menu-sub')
            ).slideToggle();
          });
        });

      document
        .querySelectorAll('.ob-catalog-menu__title')
        .forEach(function (elem) {
          elem.addEventListener('click', function (e) {
            e.preventDefault();
            elem.classList.toggle('active');
            $(
              elem.parentNode.querySelector('.ob-catalog-menu__block')
            ).slideToggle();

            if (
              document.querySelectorAll('.ob-catalog-menu__item.active').length
            ) {
              document
                .querySelectorAll('.ob-catalog-menu__item.active')
                .forEach(function (menuItem) {
                  menuItem.classList.remove('active');
                });
              $('.ob-catalog-menu-sub:visible').slideUp();
            }
          });
        });
    }

    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });
})(jQuery);
