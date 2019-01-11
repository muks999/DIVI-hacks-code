jQuery(document).ajaxStop(function() {
  jQuery(document).ready(function($){

    $(".divi-hacks-custom-tables .custom-table:not(.no-stacking) table").basictable();
    $(".et-fb.divi-hacks-custom-tables .custom-table:not(.no-stacking):hover table").basictable();
    $(".divi-hacks-custom-tables .custom-table table:has(thead)").addClass("has-header");
    $("html[class*='et-fb-preview'] .divi-hacks-custom-tables .custom-table table:not(.bt)").addClass("bt");
    $("html[class*='et-fb-preview'] .divi-hacks-custom-tables .custom-table:hover table:not(.bt)").addClass("bt");
    $("html.et-fb-preview--desktop .divi-hacks-custom-tables .custom-table table.bt").removeClass("bt");

     $(".divi-hacks-custom-tables .custom-table td").removeAttr("valign");
    var wh = $(window).height();
    $('.divi-hacks-full-height .full-height').css('min-height', wh);
    var mh = $('#main-header').height();
    var th = $('#top-header').height();
    var mf = $('#main-footer').height();
    var sh = wh - mh - th - mf;
    $('body.divi-hacks-footer-on-bottom:not(.admin-bar):not(.et_vertical_nav) #main-content .container, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content .container, .divi-hacks-password-protected:not([class*="divi-hacks-reveal"]):not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results):not(.et_vertical_nav) .post-password-required .et_password_protected_form, .divi-hacks-footer-on-bottom:not(.admin-bar):not(.et_vertical_nav) #main-content, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content').css('min-height', sh);
    var sh_vertical = wh - th - mf;
    $('body.divi-hacks-footer-on-bottom.et_vertical_nav:not(.admin-bar) #main-content .container, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content .container, .divi-hacks-password-protected.et_vertical_nav:not([class*="divi-hacks-reveal"]):not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results) .post-password-required .et_password_protected_form, .divi-hacks-footer-on-bottom.et_vertical_nav:not(.admin-bar) #main-content, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content').css('min-height', sh_vertical);
    var sh_transparent = wh - mf;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav:not(.admin-bar):not(.et_vertical_nav) #main-content, .divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content').css('min-height', sh_transparent);
    var sh_transparent_vert = wh - mf;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav.et_vertical_nav:not(.admin-bar) #main-content, .divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content').css('min-height', sh_transparent_vert);
    var sh1 = wh - mh;
    $('.divi-hacks-full-height:not(.et_vertical_nav) .full-height-minus-main-header').css('min-height', sh1);
    var sh2 = wh - th;
    $('.divi-hacks-full-height .full-height-minus-top-header, .divi-hacks-password-protected.et_vertical_nav[class*="divi-hacks-reveal"]:not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results) .post-password-required .et_password_protected_form').css('min-height', sh2);
    var sh3 = wh - mf;
    $('.divi-hacks-full-height .full-height-minus-main-footer').css('min-height', sh3);
    var sh4 = wh - mh - th;
    $('.divi-hacks-full-height:not(.et_vertical_nav) .full-height-minus-both-headers, .divi-hacks-password-protected[class*="divi-hacks-reveal"]:not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results):not(.et_vertical_nav) .post-password-required .et_password_protected_form').css('min-height', sh4);
    $('.is-desktop:not(.et_vertical_nav) #main-header li.module-in-menu > ul').css('max-height', sh4);
    var ab = wh - mh - th - mf - 32;
    $('.divi-hacks-footer-on-bottom.admin-bar:not(.divi-hacks-autohide-admin-bar):not(.et_vertical_nav) #main-content').css('min-height', ab);
    var ab_vert = wh - th - mf - 32;
    $('.divi-hacks-footer-on-bottom.admin-bar.et_vertical_nav:not(.divi-hacks-autohide-admin-bar) #main-content').css('min-height', ab_vert);
    var ab_transparent = wh - mf - 32;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar:not(.divi-hacks-autohide-admin-bar) #main-content').css('min-height', ab_transparent);
    var allHeaders = mh + th;
    $('body.error404:not(.et_vertical_nav) #divi-hacks-404 #page-content').css ('padding-top', allHeaders);
    var allHeaders_vert = th;
    $('body.error404.et_vertical_nav #divi-hacks-404 #page-content').css ('padding-top', allHeaders_vert);

    var node = $('.et_pb_testimonial.event-box .et_pb_testimonial_meta').contents().filter(function () { return this.nodeType == 3; }).first(),
      text = node.text(),
      first = text.slice(0, text.indexOf(" "));

    if (!node.length)
      return;

    node[0].nodeValue = text.slice(first.length);
    node.before('<span>' + first + '</span>');

    $(".et_pb_testimonial.event-box .et_pb_testimonial_meta").each(function(){
      $(this).html($(this).html().replace(/,/g , '')); 
    });
    
  });
});

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = $(window).width();
      if (ww < 981) {
        $('body:not(.et-fb)').removeClass('is-desktop');
      } else if (ww >= 981) {
        $('body:not(.et-fb)').addClass('is-desktop');
      }
      if ((ww < 768) || (ww > 980)) {
        $('body:not(.et-fb)').removeClass('is-tablet');
      } else if ((ww >= 768) || (ww <= 980)) {
        $('body:not(.et-fb)').addClass('is-tablet');
      }
      if (ww > 767) {
        $('body:not(.et-fb)').removeClass('is-phone');
      } else if (ww <= 767) {
        $('body:not(.et-fb)').addClass('is-phone');
      }
      if (ww > 980) {
        $('body:not(.et-fb)').removeClass('is-mobile');
      } else if (ww <= 980) {
        $('body:not(.et-fb)').addClass('is-mobile');
      }
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();

    $(".divi-hacks-full-width-posts .entry-content").not(':has(#et-boc)').wrap("<div class='dh-fullwidth-post'></div>");

    $('.divi-hacks-custom-tables .custom-table:not(.no-stacking) table, .et-fb.divi-hacks-custom-tables .custom-table:not(.no-stacking):hover table').basictable();
    $('.divi-hacks-custom-tables .custom-table table:has(thead)').addClass('has-header');
    $('html[class*="et-fb-preview"] .divi-hacks-custom-tables .custom-table table:not(.bt), html[class*="et-fb-preview"] .divi-hacks-custom-tables .custom-table:hover table:not(.bt)').addClass('bt');
    $('html.et-fb-preview--desktop .divi-hacks-custom-tables .custom-table table.bt').removeClass('bt');
    $('.divi-hacks-custom-tables .custom-table td').removeAttr("valign");

    $(".et_pb_video.autoplay:not([class*='lightbox-content']) iframe").each(function(){
      var addautoplay = $(this).attr("src")+"&autoplay=1";
      $(this).attr("src",addautoplay);
    });
    $(".et_pb_video.hideinfo iframe").each(function(){
        var hideinfo = $(this).attr("src")+"&showinfo=0";
        $(this).attr("src",hideinfo);
      });
    $(".et_pb_video.hidecontrols iframe").each(function(){
        var hidecontrols = $(this).attr("src")+"&controls=0";
        $(this).attr("src",hidecontrols);
      });
    $("[class*='lightbox-trigger']").on("click", function() { 
        $(".mfp-content").attr("id", "page-container");
        $(".mfp-wrap .et_pb_video.autoplay iframe").each(function(){
            var addautoplay = $(this).attr("src")+"&autoplay=1";
            $(this).attr("src",addautoplay);
          });
        $(".mfp-wrap .et_pb_video .mfp-close").css("display","none");
    });

    $('.divi-hacks-open-links #footer-info a, .divi-hacks-open-links .et-social-icons a').attr('target', '_blank');

    $('body:not(.logged-in)').addClass('logged-out');

    if ($("body").hasClass("divi-hacks-autohide-admin-bar")) {
      $("html").addClass("no-margin");
    }
    if ($("#main-header li").hasClass("module-in-menu")) {
      $("body").addClass("module-inside-menu");
    }

    $('.et_pb_button.tablet-module-align-right').closest('.et_pb_button_module_wrapper').addClass('tablet-module-align-right');
    $('.et_pb_button.tablet-module-align-left').closest('.et_pb_button_module_wrapper').addClass('tablet-module-align-left');
    $('.et_pb_button.tablet-module-align-center').closest('.et_pb_button_module_wrapper').addClass('tablet-module-align-center');
    $('.et_pb_button.phone-module-align-right').closest('.et_pb_button_module_wrapper').addClass('phone-module-align-right');
    $('.et_pb_button.phone-module-align-left').closest('.et_pb_button_module_wrapper').addClass('phone-module-align-left');
    $('.et_pb_button.phone-module-align-center').closest('.et_pb_button_module_wrapper').addClass('phone-module-align-center');

    function dh_collapsible_submenus() {
        var $menu = $('.divi-hacks-collapse-mobile-submenus #mobile_menu'),
            top_level_link = '.divi-hacks-collapse-mobile-submenus #mobile_menu .menu-item-has-children > a';
             
        $menu.find('a').each(function() {
            $(this).off('click');
              
            if ( $(this).is(top_level_link) ) {
                if ($(this).parent().hasClass('always-visitable')) {
                    $('<a class="hover-link"></a>')
                    .attr('href', $(this).attr('href'))
                    .on('click', function(e){ e.stopPropagation(); })
                    .appendTo($(this));
                }

                $(this).attr('href', '#');
            }
              
            if ( ! $(this).siblings('.sub-menu').length ) {
                $(this).on('click', function(event) {
                    $(this).parents('.mobile_nav').trigger('click');
                });
            } else {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    $(this).parent().toggleClass('visible');
                });
            }
        });
    }
      
    $(window).load(function() {
        setTimeout(function() {
            dh_collapsible_submenus();
        }, 0);
    });

    var wh = $(window).height();
    $('.divi-hacks-full-height .full-height').css('min-height', wh);
    var mh = $('#main-header').height();
    var th = $('#top-header').height();
    var mf = $('#main-footer').height();
    var bothHeaders = mh + th;
    $('head').append('<style id="transparent-header-top-padding-fix" type="text/css">.et_transparent_nav:not(.et-fb) #et-main-area > [id^="divi-hacks-"] #page-content > .et_pb_section:not(.et_pb_fullwidth_section):not(.et_pb_section_first):first-child:before, .et_transparent_nav:not(.et-fb) #et-main-area > [id^="divi-hacks-"] #page-content div:not(.mim) > .et_pb_section:not(.et_pb_fullwidth_section):not(.et_pb_section_first):first-child:before, .et_transparent_nav:not(.et-fb) #et-main-area > [id^="divi-hacks-"] #main-content div:not(.mim) > .et_pb_section:not(.et_pb_fullwidth_section):not(.et_pb_section_first):first-child:before, .et_transparent_nav:not(.et-fb) #et-main-area > [id^="divi-hacks-"] #page-content > .et_builder_inner_content > div:not(.et_pb_section_first):first-child:before, .et_transparent_nav:not(.et-fb) #et-main-area #page-content div:not(.mim) > .et_builder_inner_content > div:not(.et_pb_section_first):first-child:before, .et_transparent_nav:not(.et-fb) #et-main-area > [id^="divi-hacks-"] #main-content div:not(.mim) > .et_builder_inner_content > div:not(.et_pb_section_first):first-child:before { position:relative; display:block; content:""; height:'+bothHeaders+'px; }</style>');
    var sh = wh - mh - th - mf;
    $('body.divi-hacks-footer-on-bottom:not(.admin-bar):not(.et_vertical_nav) #main-content .container, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content .container, .divi-hacks-password-protected:not([class*="divi-hacks-reveal"]):not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results):not(.et_vertical_nav) .post-password-required .et_password_protected_form, .divi-hacks-footer-on-bottom:not(.admin-bar):not(.et_vertical_nav) #main-content, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content').css('min-height', sh);
    var sh_vertical = wh - th - mf;
    $('body.divi-hacks-footer-on-bottom.et_vertical_nav:not(.admin-bar) #main-content .container, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content .container, .divi-hacks-password-protected.et_vertical_nav:not([class*="divi-hacks-reveal"]):not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results) .post-password-required .et_password_protected_form, .divi-hacks-footer-on-bottom.et_vertical_nav:not(.admin-bar) #main-content, .divi-hacks-footer-on-bottom.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content').css('min-height', sh_vertical);
    var sh_transparent = wh - mf;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav:not(.admin-bar):not(.et_vertical_nav) #main-content, .divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar.divi-hacks-autohide-admin-bar:not(.et_vertical_nav) #main-content').css('min-height', sh_transparent);
    var sh_transparent_vert = wh - mf;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav.et_vertical_nav:not(.admin-bar) #main-content, .divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar.divi-hacks-autohide-admin-bar.et_vertical_nav #main-content').css('min-height', sh_transparent_vert);
    var sh1 = wh - mh;
    $('.divi-hacks-full-height:not(.et_vertical_nav) .full-height-minus-main-header').css('min-height', sh1);
    var sh2 = wh - th;
    $('.divi-hacks-full-height .full-height-minus-top-header, .divi-hacks-password-protected.et_vertical_nav[class*="divi-hacks-reveal"]:not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results) .post-password-required .et_password_protected_form').css('min-height', sh2);
    var sh3 = wh - mf;
    $('.divi-hacks-full-height .full-height-minus-main-footer').css('min-height', sh3);
    var sh4 = wh - mh - th;
    $('.divi-hacks-full-height:not(.et_vertical_nav) .full-height-minus-both-headers, .divi-hacks-password-protected[class*="divi-hacks-reveal"]:not(.author):not(.archive):not(.blog):not(.category):not(.search-results):not(.search-no-results):not(.et_vertical_nav) .post-password-required .et_password_protected_form').css('min-height', sh4);
    $('.is-desktop:not(.et_vertical_nav) #main-header li.module-in-menu > ul').css('max-height', sh4);
    var ab = wh - mh - th - mf - 32;
    $('.divi-hacks-footer-on-bottom.admin-bar:not(.divi-hacks-autohide-admin-bar):not(.et_vertical_nav) #main-content').css('min-height', ab);
    var ab_vert = wh - th - mf - 32;
    $('.divi-hacks-footer-on-bottom.admin-bar.et_vertical_nav:not(.divi-hacks-autohide-admin-bar) #main-content').css('min-height', ab_vert);
    var ab_transparent = wh - mf - 32;
    $('.divi-hacks-footer-on-bottom.et_transparent_nav.admin-bar:not(.divi-hacks-autohide-admin-bar) #main-content').css('min-height', ab_transparent);
    var allHeaders = mh + th;
    $('body.error404:not(.et_vertical_nav):not(.et_transparent_nav) #divi-hacks-404 #page-content, .divi-hacks-full-width-posts:not(.et_vertical_nav) .dh-fullwidth-post').css ('padding-top', allHeaders);
    var allHeaders_vert = th;
    $('body.error404.et_vertical_nav:not(.et_transparent_nav) #divi-hacks-404 #page-content').css ('padding-top', allHeaders_vert);

    var rmf = $("body.is-desktop.divi-hacks-reveal-main-footer #main-footer").outerHeight();
    var rcf = $("body.is-desktop.divi-hacks-reveal-custom-footer .reveal-footer").outerHeight();
    $("body.is-desktop.divi-hacks-reveal-main-footer:not(.divi-hacks-reveal-custom-footer):not(.et-fb) #et-main-area").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer:not(.divi-hacks-reveal-main-footer):not(.et-fb) #et-main-area").css('margin-bottom', rcf);
    $('body.is-desktop.divi-hacks-reveal-main-footer.divi-hacks-reveal-custom-footer:not(.et-fb) #et-main-area').css('margin-bottom', rmf);

    $("body.is-desktop.divi-hacks-reveal-main-footer.search-results:not(.et-fb) #divi-hacks-search").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-main-footer.search-no-results:not(.et-fb) #divi-hacks-search").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-main-footer.category:not(.et-fb) #divi-hacks-category").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-main-footer.tag:not(.et-fb) #divi-hacks-tag").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-main-footer.blog:not(.et-fb) #divi-hacks-archive").css('margin-bottom', rmf);
    $("body.is-desktop.divi-hacks-reveal-main-footer.author:not(.et-fb) #divi-hacks-author").css('margin-bottom', rmf);

    $("body.is-desktop.divi-hacks-reveal-custom-footer.search-results:not(.et-fb) #divi-hacks-search").css('margin-bottom', rcf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer.search-no-results:not(.et-fb) #divi-hacks-search").css('margin-bottom', rcf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer.category:not(.et-fb) #divi-hacks-category").css('margin-bottom', rcf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer.tag:not(.et-fb) #divi-hacks-tag").css('margin-bottom', rcf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer.blog:not(.et-fb) #divi-hacks-archive").css('margin-bottom', rcf);
    $("body.is-desktop.divi-hacks-reveal-custom-footer.author:not(.et-fb) #divi-hacks-author").css('margin-bottom', rcf);

    $(".module-in-menu > ul > li").wrap("<div class='mim'/>").contents().unwrap();

    // New type of the tag
    var replacementTag = 'div';

    // Replace all li tags with the type of replacementTag
    $('.module-in-menu ul.et_pb_social_media_follow li').each(function() {
      var outer = this.outerHTML;

      // Replace opening tag
      var regex = new RegExp('<' + this.tagName, 'i');
      var newTag = outer.replace(regex, '<' + replacementTag);

      // Replace closing tag
      regex = new RegExp('</' + this.tagName, 'i');
      newTag = newTag.replace(regex, '</' + replacementTag);

      $(this).replaceWith(newTag);
    });

    $('.module-in-menu a > .et_pb_column, .module-in-menu .et_pb_column > a > .et_pb_module, .module-in-menu .et_pb_module a > div, .module-in-menu .post-meta a > *, .module-in-menu .et_pb_module a > h4,  .module-in-menu .et_pb_module a > h2, .module-in-menu .et_pb_module a > p, .module-in-menu a > .et_pb_section, .module-in-menu .mim > a > .et_pb_row, .module-in-menu .mim > a > .et_pb_module, .module-in-menu .mim > a > *, .module-in-menu a > .et_parallax_bg, .module-in-menu .et_pb_login_form form > a > p').each(function() {
      $(this).parent().before(this);
    });
    $(".module-in-menu a").filter(function () {
      return $.trim($(this).html()) == '';
      }).remove();

    $(".divi-hacks-parallax .parallax-fast").paroller({
        factor: 0.2,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.133,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.166,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.2,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground'     // background, foreground
    });
    $(".divi-hacks-parallax .parallax-faster").paroller({
        factor: 0.4,            // multiplier for scrolling speed and offset
        factorXs: 0.3,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.333,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.366,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground'     // background, foreground
    });
    $(".divi-hacks-parallax .parallax-slow").paroller({
        factor: -0.2,            // multiplier for scrolling speed and offset
        factorXs: -0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: -0.133,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: -0.166,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: -0.2,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground'     // background, foreground
    });
    $(".divi-hacks-parallax .parallax-slower").paroller({
        factor: -0.4,            // multiplier for scrolling speed and offset
        factorXs: -0.3,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: -0.333,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: -0.366,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: -0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground'     // background, foreground
    });
    $(".divi-hacks-parallax .parallax-slow-left").paroller({
        factor: 0.2,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.133,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.166,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.2,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground',     // background, foreground
        direction: 'horizontal' // vertical, horizontal
    });
    $(".divi-hacks-parallax .parallax-fast-left").paroller({
        factor: 0.4,            // multiplier for scrolling speed and offset
        factorXs: 0.3,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.333,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.366,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground',     // background, foreground
        direction: 'horizontal' // vertical, horizontal
    });
    $(".divi-hacks-parallax .parallax-slow-right").paroller({
        factor: -0.2,            // multiplier for scrolling speed and offset
        factorXs: -0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: -0.133,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: -0.166,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: -0.2,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground',     // background, foreground
        direction: 'horizontal' // vertical, horizontal
    });
    $(".divi-hacks-parallax .parallax-fast-right").paroller({
        factor: -0.4,            // multiplier for scrolling speed and offset
        factorXs: -0.3,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: -0.333,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: -0.366,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: -0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground',     // background, foreground
        direction: 'horizontal' // vertical, horizontal
    });
    $(".divi-hacks-mobile-parallax.is-mobile .mobile-parallax .et_parallax_bg").paroller({
        factor: 0.4,            // multiplier for scrolling speed and offset
        factorXs: 0.3,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.333,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.366,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'background'     // background, foreground
    });

    $('.sticky-module, .sticky-row').css('z-index', '100');
    $('.sticky-section').css('z-index', '101');
    $('.sticky-module, .sticky-column').closest('.et_pb_row').css('display', 'flex');
    $('.sticky-element').closest('.et_pb_column, .et_pb_section').css('z-index', '999');

    window.onscroll = function(e) {
      $(".divi-hacks-sticky.et_fixed_nav .sticky-element, .divi-hacks-sticky.et_fixed_nav.admin-bar.divi-hacks-autohide-admin-bar .sticky-element").sticky({topSpacing:$('#main-header').height() + $('#top-header').height()});
      $(".divi-hacks-sticky:not(.et_fixed_nav) .sticky-element, .divi-hacks-sticky.admin-bar.divi-hacks-autohide-admin-bar:not(.et_fixed_nav) .sticky-element").sticky({topSpacing:0});
      $(".divi-hacks-sticky.et_fixed_nav.admin-bar:not(.divi-hacks-autohide-admin-bar) .sticky-element").sticky({topSpacing:$('#main-header').height() + $('#top-header').height() + 32});
      $(".divi-hacks-sticky.admin-bar:not(.et_fixed_nav):not(.divi-hacks-autohide-admin-bar) .sticky-element").sticky({topSpacing:32});
    };

    var node = $('.et_pb_testimonial.event-box .et_pb_testimonial_meta').contents().filter(function () { return this.nodeType == 3; }).first(),
        text = node.text(),
        first = text.slice(0, text.indexOf(" "));

    if (!node.length)
        return;

    node[0].nodeValue = text.slice(first.length);
    node.before('<span>' + first + '</span>');

    $(".et_pb_testimonial.event-box .et_pb_testimonial_meta").each(function(){
    $(this).html($(this).html().replace(/,/g , '')); });

});

/**
 * jQuery plugin paroller.js v1.4.4
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 **/
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define('parollerjs', ['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var working = false;
    var scrollAction = function() {
        working = false;
    };

    var setDirection = {
        bgVertical: function (elem, bgOffset) {
            return elem.css({'background-position': 'center ' + -bgOffset + 'px'});
        },
        bgHorizontal: function (elem, bgOffset) {
            return elem.css({'background-position': -bgOffset + 'px' + ' center'});
        },
        vertical: function (elem, elemOffset, oldTransform) {
            (oldTransform === 'none' ? oldTransform = '' : true);
            return elem.css({
                '-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
                '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
                'transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
                'transition': 'transform linear',
                'will-change': 'transform'
            });
        },
        horizontal: function (elem, elemOffset, oldTransform) {
            (oldTransform === 'none' ? oldTransform = '' : true);
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
                '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
                'transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
                'transition': 'transform linear',
                'will-change': 'transform'
            });
        }
    };

    var setMovement = {
        factor: function (elem, width, options) {
            var dataFactor = elem.data('paroller-factor');
            var factor = (dataFactor) ? dataFactor : options.factor;
            if (width < 576) {
                var dataFactorXs = elem.data('paroller-factor-xs');
                var factorXs = (dataFactorXs) ? dataFactorXs : options.factorXs;
                return (factorXs) ? factorXs : factor;
            }
            else if (width <= 768) {
                var dataFactorSm = elem.data('paroller-factor-sm');
                var factorSm = (dataFactorSm) ? dataFactorSm : options.factorSm;
                return (factorSm) ? factorSm : factor;
            }
            else if (width <= 1024) {
                var dataFactorMd = elem.data('paroller-factor-md');
                var factorMd = (dataFactorMd) ? dataFactorMd : options.factorMd;
                return (factorMd) ? factorMd : factor;
            }
            else if (width <= 1200) {
                var dataFactorLg = elem.data('paroller-factor-lg');
                var factorLg = (dataFactorLg) ? dataFactorLg : options.factorLg;
                return (factorLg) ? factorLg : factor;
            } else if (width <= 1920) {
                var dataFactorXl = elem.data('paroller-factor-xl');
                var factorXl = (dataFactorXl) ? dataFactorXl : options.factorXl;
                return (factorXl) ? factorXl : factor;
            } else {
                return factor;
            }
        },
        bgOffset: function (offset, factor) {
            return Math.round(offset * factor);
        },
        transform: function (offset, factor, windowHeight, height) {
            return Math.round((offset - (windowHeight / 2) + height) * factor);
        }
    };

    var clearPositions = {
        background: function (elem) {
            return elem.css({'background-position': 'unset'});
        },
        foreground: function (elem) {
            return elem.css({
                'transform' : 'unset',
                'transition' : 'unset'
            });
        }
    };

    $.fn.paroller = function (options) {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // default options
        var options = $.extend({
            factor: 0, // - to +
            factorXs: 0, // - to +
            factorSm: 0, // - to +
            factorMd: 0, // - to +
            factorLg: 0, // - to +
            factorXl: 0, // - to +
            type: 'background', // foreground
            direction: 'vertical' // horizontal
        }, options);

        return this.each(function () {
            var $this = $(this);
            var width = $(window).width();
            var offset = $this.offset().top;
            var height = $this.outerHeight();

            var dataType = $this.data('paroller-type');
            var dataDirection = $this.data('paroller-direction');
            var oldTransform = $this.css('transform');

            var type = (dataType) ? dataType : options.type;
            var direction = (dataDirection) ? dataDirection : options.direction;
            var factor = setMovement.factor($this, width, options);
            var bgOffset = setMovement.bgOffset(offset, factor);
            var transform = setMovement.transform(offset, factor, windowHeight, height);

            if (type === 'background') {
                if (direction === 'vertical') {
                    setDirection.bgVertical($this, bgOffset);
                }
                else if (direction === 'horizontal') {
                    setDirection.bgHorizontal($this, bgOffset);
                }
            }
            else if (type === 'foreground') {
                if (direction === 'vertical') {
                    setDirection.vertical($this, transform, oldTransform);
                }
                else if (direction === 'horizontal') {
                    setDirection.horizontal($this, transform, oldTransform);
                }
            }

            $(window).on('resize', function () {
                var scrolling = $(this).scrollTop();
                width = $(window).width();
                offset = $this.offset().top;
                height = $this.outerHeight();
                factor = setMovement.factor($this, width, options);

                bgOffset = Math.round(offset * factor);
                transform = Math.round((offset - (windowHeight / 2) + height) * factor);

                if (! working) {
                    window.requestAnimationFrame(scrollAction);
                    working = true;
                }

                if (type === 'background') {
                    clearPositions.background($this);
                    if (direction === 'vertical') {
                        setDirection.bgVertical($this, bgOffset);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.bgHorizontal($this, bgOffset);
                    }
                }
                else if ((type === 'foreground') && (scrolling <= documentHeight)) {
                    clearPositions.foreground($this);
                    if (direction === 'vertical') {
                        setDirection.vertical($this, transform);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.horizontal($this, transform);
                    }
                }
            });

            $(window).on('scroll', function () {
                var scrolling = $(this).scrollTop();
                documentHeight = $(document).height();

                bgOffset = Math.round((offset - scrolling) * factor);
                transform = Math.round(((offset - (windowHeight / 2) + height) - scrolling) * factor);

                if (! working) {
                    window.requestAnimationFrame(scrollAction);
                    working = true;
                }

                if (type === 'background') {
                    if (direction === 'vertical') {
                        setDirection.bgVertical($this, bgOffset);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.bgHorizontal($this, bgOffset);
                    }
                }
                else if ((type === 'foreground') && (scrolling <= documentHeight)) {
                    if (direction === 'vertical') {
                        setDirection.vertical($this, transform, oldTransform);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.horizontal($this, transform, oldTransform);
                    }
                }
            });
        });
    };
});


// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: '10'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

/*
 * @license jQuery Basictable | MIT | Jerry Low | https://www.github.com/jerrylow/basictable
 */

(function($) {
  $.fn.basictable = function(options) {

    var setup = function(table, data) {
      var headings = [];

      if (data.tableWrap) {
        table.wrap('<div class="bt-wrapper"></div>');
      }

      // Table Header
      if (data.header) {
        var format = '';

        if (table.find('thead tr th').length) {
          format = 'thead th';
        }
        else if (table.find('tbody tr th').length) {
          format = 'tbody tr th';
        }
        else if (table.find('th').length) {
          format = 'tr:first th';
        }
        else {
          format = 'tr:first td';
        }

        $.each(table.find(format), function() {
          var $heading = $(this);
          var colspan = parseInt($heading.attr('colspan'), 10) || 1;
          var row = $heading.closest('tr').index();

          if (!headings[row]) {
            headings[row] = [];
          }

          for (var i = 0; i < colspan; i++) {
            headings[row].push($heading);
          }
        });
      }

      // Table Body
      $.each(table.find('tbody tr'), function() {
        setupRow($(this), headings, data);
      });

      // Table Footer
      $.each(table.find('tfoot tr'), function() {
        setupRow($(this), headings, data);
      });
    };

    var setupRow = function($row, headings, data) {
      $row.children().each(function() {
        var $cell = $(this);

        if (($cell.html() === '' || $cell.html() === '&nbsp;') && (!data.showEmptyCells)) {
          $cell.addClass('bt-hide');
        }
        else {
          var cellIndex = $cell.index();

          var headingText = '';

          for (var j = 0; j < headings.length; j++) {
            if (j != 0) {
              headingText;
            }

            var $heading = headings[j][cellIndex];
            headingText += $heading.text();
          }

          $cell.attr('data-th', headingText);

          if (data.contentWrap && !$cell.children().hasClass('bt-content')) {
            $cell.wrapInner('<span class="bt-content" />');
          }
        }
      });
    };

    var unwrap = function(table) {
      $.each(table.find('td'), function() {
        var $cell = $(this);
        var content = $cell.children('.bt-content').html();
        $cell.html(content);
      });
    };

    var check = function(table, data) {
      // Only change when table is larger than parent if force
      // responsive is turned off.
      if (!data.forceResponsive) {
        if (table.removeClass('bt').outerWidth() > table.parent().width()) {
          start(table, data);
        }
        else {
          end(table, data);
        }
      }
      else {
        if ((data.breakpoint !== null && $(window).width() <= data.breakpoint) || (data.containerBreakpoint !== null && table.parent().width() <= data.containerBreakpoint)) {
      start(table, data);
    }
    else {
      end(table, data);
    }
      }
    };

    var start = function(table, data) {
      table.addClass('bt');

      if (!data.header) {
        table.addClass('bt--no-header');
      }

      if (data.tableWrap) {
        table.parent('.bt-wrapper').addClass('active');
      }
    };

    var end = function(table, data) {
      table.removeClass('bt bt--no-header');

      if (data.tableWrap) {
        table.parent('.bt-wrapper').removeClass('active');
      }
    };

    var destroy = function(table, data) {
      table.removeClass('bt bt--no-header');
      table.find('td').removeAttr('data-th');

      if (data.tableWrap) {
        table.unwrap();
      }

      if (data.contentWrap) {
        unwrap(table);
      }

      table.removeData('basictable');
    };

    var resize = function(table) {
      if (table.data('basictable')) {
        check(table, table.data('basictable'));
      }
    };

    // Get table.
    this.each(function() {
      var table = $(this);

      // If table has already executed.
      if (table.length === 0 || table.data('basictable')) {
        if (table.data('basictable')) {
          // Destroy basic table.
          if (options == 'destroy') {
            destroy(table, table.data('basictable'));
          }
          // Start responsive mode.
          else if (options === 'start') {
            start(table, table.data('basictable'));
          }
          else if (options === 'stop') {
            end(table, table.data('basictable'));
          }
          else {
            check(table, table.data('basictable'));
          }
        }
        return false;
      }

      // Extend Settings.
      var settings = $.extend({}, $.fn.basictable.defaults, options);

      var vars = {
        breakpoint: settings.breakpoint,
        containerBreakpoint: settings.containerBreakpoint,
        contentWrap: settings.contentWrap,
        forceResponsive: settings.forceResponsive,
        noResize: settings.noResize,
        tableWrap: settings.tableWrap,
        showEmptyCells: settings.showEmptyCells,
        header: settings.header
      };
      // Maintain the original functionality/defaults
      if(vars.breakpoint === null && vars.containerBreakpoint === null){
        vars.breakpoint = 980;
      }

      // Initiate
      table.data('basictable', vars);

      setup(table, table.data('basictable'));

      if (!vars.noResize) {
        check(table, table.data('basictable'));

        $(window).bind('resize.basictable', function() {
          resize(table);
        });
      }
    });
  };
 $.fn.basictable.defaults = {
    breakpoint: null,
    containerBreakpoint: null,
    contentWrap: true,
    forceResponsive: true,
    noResize: false,
    tableWrap: false,
    showEmptyCells: false,
    header: true
  };
})(jQuery);