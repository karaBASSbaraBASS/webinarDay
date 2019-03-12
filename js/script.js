var frameNavArr = [];
var TEST_IE,
    TEST_MAC,
    onlineTrigger = true,
    is_mapInit = false;
$(document).ready(function() {
    // ie stub
    var $TEST_IE = detectIE(),
        $intIeVersion = parseInt($TEST_IE);

    if ($TEST_IE) {

        if ($intIeVersion <= 10) {
            $(".internet_block").css({"display": "block"});
            $(".wrapper").css({"display": "none"});

        } else {
        }
    }
    // ie stub end

    // show white stub before site will be loaded
    setTimeout(function () {
        $(".whiteShield").css({"display": "none"})
    }, 300);

    $('.productSlider1').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-btn1'),
        nextArrow: $('.next-btn1'),
    });
    $('.productSlider2').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-btn2'),
        nextArrow: $('.next-btn2'),
    });
    $('.productSlider3').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-btn3'),
        nextArrow: $('.next-btn3'),
    });
    $('.productSlider4').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-btn4'),
        nextArrow: $('.next-btn4'),
    });
    $('.productSlider5').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-btn5'),
        nextArrow: $('.next-btn5'),
    });

    // scroll to form start
    $('.arrowDown__link').on('click', function(event) {
        event.preventDefault();
        var firstSect = $('.beadOnley').offset().top;
        $('body, html').animate({scrollTop: firstSect}, 500);
    });
    // scroll to form end
    // scroll to form start
    $('.askQuestion').on('click', function(event) {
        event.preventDefault();
        var orderForm = $('.orderForm').offset().top;
        $('body, html').animate({scrollTop: orderForm}, 500);
    });
    // scroll to form end
    // scroll to form start
    $('.orderBtn').on('click', function(event) {
        event.preventDefault();
        var orderForm = $('.orderForm').offset().top;
        $('body, html').animate({scrollTop: orderForm}, 500);
    });
    // scroll to form end
    // scroll to form start
    $('.headerBtn').on('click', function(event) {
        event.preventDefault();
        var orderForm = $('.orderForm').offset().top;
        $('body, html').animate({scrollTop: orderForm}, 500);
    });
    // scroll to form end


    loadVideo();
      // select all iframes add replace it with pictures




     // detect IE
     // returns version of IE or false, if browser is not Internet Explorer

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');


        var msie11 = ua.indexOf('rv:11');
        if (msie11 > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie11 + 3, ua.indexOf('.', msie11) + 2), 10);
        }

        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {// IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {// Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }// other browser
        return false;
    }

});
$(window).on('load', function () {
    // equalHeights start
    var highestBox = 0;
    $('.otherCardWrap').each(function () {
        if ($(this).height() > highestBox) {
            highestBox = $(this).height();
        }
    });
    $('.otherCardWrap').height(highestBox);
    // equalHeights end
});

// height partners Block
function setSquareHeight() {
        var squareWidth = $(".textSquare:first-child").width();
        $(".textSquare").height(squareWidth);
    }
    /* create floating arrow */
$('.contacts').append('<div class="floatingArrow"></div>');
    $(".floatingArrow").on( "click", function() {
        $('body, html').animate({scrollTop: 0}, 500);
    });
// draw arrow - back to top
    $(window).scroll(function () { // scroll event
        // draw arrow - back to top
        drawFloatingArrow();
    });

    function drawFloatingArrow() {
        // slide page on top

        if ( $(".floatingArrow").length ) {

            var topPos = $(".floatingArrow").offset().top;
            var windHeight = $( window ).height();

            if ( topPos >= windHeight ) {
                $(".floatingArrow").css({"opacity":"0.7", "right":"10px"});
                // console.log("show");
            } else {
                $(".floatingArrow").css({"opacity":"0", "right":"-50px"});
                // console.log("hide");
            }
            /* slide page on top end */
        }
    }

function loadVideo() {
    var youtube = document.querySelectorAll( "iframe" );
    for (var i = 0; i < youtube.length; i++) {
        var currentElement = youtube[i],
            mainWrapper = currentElement.parentElement,
            address = youtube[i].getAttribute("src"),
            videoCode = address.split('/embed/'),
            codeNumber = videoCode[1],
            source = "https://img.youtube.com/vi/"+ codeNumber +"/0.jpg",
            largeBlock = '<div class="youtubeWrapper"><div class="youtube" data-posNumber="'+ i +'" data-embed="'+ codeNumber +'"><div class="play-button"></div></div></div>',
            image = document.createElement("img");
        // create new block with image and play button
        mainWrapper.insertAdjacentHTML('afterbegin', largeBlock);
        // make cover image from first slide in a video
        image.src = source;
        image.addEventListener( "load", function() {
            $(".youtube")[i].appendChild( image );
        }( i ) );
        // remove old YOUTUBE iframes to prevent loading players
        youtube[i].remove();

        frameNavArr.push(codeNumber);

        $(".youtube")[i].addEventListener( "click", function() {
            var that = this;
            createVideo(that);
        });
    }
}
// part of loadVideo script
function createVideo(that) {
    // console.log('click');
    var iframe = document.createElement( "iframe" ),
        curItem = parseInt(that.getAttribute('data-posnumber'));

    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ frameNavArr[curItem] +"?rel=0&showinfo=0&autoplay=1" );
    that.innerHTML = "";
    that.appendChild( iframe );
}
// create video end

// sendForm start
function validateSubscribeForm(form) {

    var inputName = form.firstUName.value;
    var inputPhone = form.firstPhone.value;
    var inputEmail = form.firstEmail.value;

    if ( checkEmail(inputEmail) ) {
        if (!$('#firstEmail').hasClass("error")) {
            $('#firstEmail').addClass("error");
        }
    } else {
        if ($('#firstEmail').hasClass("error")) {
            $('#firstEmail').removeClass("error");
        }
    }
    if ( checkName(inputName) ) {
        if (!$('#firstUName').hasClass("error")) {
            $('#firstUName').addClass("error");
        }
    } else {
        if ($('#firstUName').hasClass("error")) {
            $('#firstUName').removeClass("error");
        }
    }
    if ( checkPhone(inputPhone) ) {
        if ($('#firstPhone').hasClass("error")) {
            $('#firstPhone').removeClass("error");
        }
    } else {
        if (!$('#firstPhone').hasClass("error")) {
            $('#firstPhone').addClass("error");
        }
    }

    if ($(".mainCTAForm").find(".error").length > 0) {
        //console.log("form has errors");

    } else {

        disableButton();
        setTimeout(function() {
            enableButton();
        }, 5000);
        var data = $(form).serialize();
        var dataUrl = $(form).attr('data-url');

        //console.log("still validating");

        $.ajax({
            type: "POST",
            url: 'mailContacts.php',
            data: data,
            success: function (data, jqXHR, textStatus, errorThrown) {
                // console.log(data);
                showSucsessMsg( "Сообщение успешно отправлено! Теперь вы получите 100грн скидку при покупке комплекта." );
                clearFields();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showSucsessMsg( "Возникла проблема при работе с почтовым сервером." );
                console.log( textStatus );
                //setTimeout(mailCallback(), 2000);
            }
        });
    }
}

function validateOrderForm(form) {

    var inputName = form.orderName.value;
    var inputPhone = form.orderPhone.value;
    var inputEmail = form.orderEmail.value;
    var inputText = form.textMessage.value;

    if ( checkEmail(inputEmail) ) {
        if (!$('#orderEmail').hasClass("error")) {
            $('#orderEmail').addClass("error");
        }
    } else {
        if ($('#orderEmail').hasClass("error")) {
            $('#orderEmail').removeClass("error");
        }
    }
    if ( checkName(inputName) ) {
        if (!$('#orderName').hasClass("error")) {
            $('#orderName').addClass("error");
        }
    } else {
        if ($('#orderName').hasClass("error")) {
            $('#orderName').removeClass("error");
        }
    }
    if ( checkPhone(inputPhone) ) {
        if ($('#orderPhone').hasClass("error")) {
            $('#orderPhone').removeClass("error");
        }
    } else {
        if (!$('#orderPhone').hasClass("error")) {
            $('#orderPhone').addClass("error");
        }
    }
    // if ( checkComment(inputText) ) {
    //     if (!$('#textMessage').hasClass("error")) {
    //         $('#textMessage').addClass("error");
    //     }
    // } else {
    //     if ($('#textMessage').hasClass("error")) {
    //         $('#textMessage').removeClass("error");
    //     }
    // }

    if ($(".orderForm").find(".error").length > 0) {
        //console.log("form has errors");

    } else {

        disableButton();
        setTimeout(function() {
            enableButton();
        }, 5000);
        var data = $(form).serialize();
        var dataUrl = $(form).attr('data-url');

        //console.log("still validating");

        $.ajax({
            type: "POST",
            url: 'mailOrder.php',
            data: data,
            success: function (data, jqXHR, textStatus, errorThrown) {
                // console.log(data);
                showSucsessMsg( "Сообщение успешно отправлено! Мы свяжемся с Вами в ближайшее время." );
                clearFields();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showSucsessMsg( "Возникла проблема при работе с почтовым сервером." );
                console.log( textStatus );
                //setTimeout(mailCallback(), 2000);
            }
        });
    }
}
// sendForm end
// show popup
function mailCallback() {
    setTimeout(function(){
        $(".popup").removeClass("active")
    }, 3000);
    $(".popup").addClass("active")
    $('.contactForm').val('');
}
// validation
function checkEmail(field) {
    var patternEmail = /^[^\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e][a-zA-Z0-9\-\_\.\+]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z]{2,10}$/;
    var testEmail = patternEmail.test(field);
    if (testEmail) {
        return false;
    } else {
        return true;
    }
}
function checkName(field) {
    var patternText = /^[^\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e\d]{3,20}$/;
    var testCharacters = patternText.test(field);
    if (testCharacters) {
        return false;
    } else {
        return true;
    }
}
// function checkComment(field) {
//     //console.log("comment check");
//     var patternText = /^[^\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e\d]{5,}$/;
//     var testCharacters = patternText.test(field);
//     if (!testCharacters) {
//         return false;
//     } else {
//         return true;
//     }
// }
function checkPhone(field) {
    //console.log("phone check");
    var patternText = /^\d[\d\(\)\ -]{4,14}\d$/; ///^([+]?[0-9\s-\(\)]{3,25})*$/;
    var testCharacters = patternText.test(field);
    var cheker = typeof(field);
    //console.log(cheker == "")
    if (!testCharacters) {
        return false;
    } else {
        return true;
    }
}
function showSucsessMsg(textMessage) {
    //var textMessage = data.message;
    $('.mailMsg.Sucsess').append("<span>" + textMessage + "</span>");
    $('.sucsessModal').addClass('active');
    callShowTime();
}
function callShowTime() {
    function showMsg() {
        $('.sucsessModal').removeClass('active');
        $('.mailMsg.Sucsess span').remove();
    }
    setTimeout(showMsg, 5000);
}
function PopUpShow() {
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
}
function clearFields() {
    $("form").find("input, textarea").val("");
}
function disableButton(){
    var btn = $("form .btn-primary");
    btn.attr('onclick', "");
    btn.addClass("disabled");
}
function enableButton(){
    var btn = $("form .btn-primary");
    btn.attr('onclick', "validateSubscribeForm(form)");
    btn.removeClass("disabled");
}


    // calcCss(75,22,1024,320);
    // calcCss(22,16,1024,320);
    // calcCss(80,20,1024,320);
    // calcCss(18,16,1024,320);
    // calcCss(40,20,1024,320);
    // calcCss(22,16,1024,320);
    // calcCss(50,40,1024,320);
    // calcCss(100,20,1024,320);
    // calcCss(34,20,1024,320);
    // calcCss(50,15,1024,320);
    // calcCss(80,60,1024,320);
    // calcCss(20,16,1024,320);
    // calcCss(30,15,1024,320);
    // calcCss(24,19,1024,320);
    // calcCss(30,15,1024,320);
    // calcCss(40,30,1024,320);
    // calcCss(36,20,1024,320);
    //
    // function calcCss($max,$min,$resMax,$resMin) {
    //     var coff_m = ($max - $min)/($resMax - $resMin);
    //     var coff_b = $min - coff_m.toFixed(4) * $resMin;
    //     console.log( "calc( "+ coff_m.toFixed(4) +"* 100vw +"+ Math.round(coff_b)+"px )" );
    // }