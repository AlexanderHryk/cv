$(document).ready(function () {
    $(window).scroll(function () {
        const scrollDistance = $(window).scrollTop();

        if (scrollDistance >= 400) {
            $('#scroll-top-btn').fadeIn(200);
        } else {
            $('#scroll-top-btn').fadeOut(200);
        }

        $('section.nav-section').each(function (i) {
            if ($(this).position().top <= (scrollDistance + $(window).height() / 2)) {
                $('#top-navbar a.active').removeClass('active');
                $('#top-navbar a').eq(i).addClass('active');
            }
        });
    });

    $('#scroll-top-btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });

    $('#top-navbar a').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target;
        });

        return false;
    });

    $('.navbar > button.toggle-nav-btn').first().on('click', function () {
        const icon = $(this).find('i');
        const navContainer = $('.navbar > .nav-container');

        if ($(this).hasClass('opened')) {
            icon.removeClass('fa-times').addClass('fa-bars');
            navContainer.fadeOut(300);
        } else {
            icon.removeClass('fa-bars').addClass('fa-times');
            navContainer.fadeIn(300);
        }

        $(this).toggleClass('opened');
    });
});

$(window).on('load', function () {
    $('#preloader-wrapper').fadeOut();

    displayIntro();
});

function displayIntro() {

    function lineNumber(number) {
        return `<span style="color:#858585;">${number}</span>`;
    }

    function comment(text) {
        return `<span style="color:#6a8a35;">${text}</span>`;
    }

    function kw1(content) {
        return `<span style="color:#358cca;">${content}</span>`;
    }

    function kw2(content) {
        return `<span style="color:#8cdcda;">${content}</span>`;
    }

    function kw3(content) {
        return `<span style="color:#ce915b;">${content}</span>`;
    }

    function kw4(content) {
        return `<span style="color:#dcdc8b;">${content}</span>`;
    }

    const parts = [
        `&nbsp;${lineNumber(1)}${'&nbsp;'.repeat(2)}${comment('// TODO: display about me')}<br>`,
        `&nbsp;${lineNumber(2)}${'&nbsp;'.repeat(2)}${kw1('var')} ${kw2('me')} = {<br>`,
        `&nbsp;${lineNumber(3)}${'&nbsp;'.repeat(6)}${kw2('name:')} ${kw3('\"Oleksandr Hryk\"')},<br>`,
        `&nbsp;${lineNumber(4)}${'&nbsp;'.repeat(6)}${kw2('years:')} ${kw4('24')},<br>`,
        `&nbsp;${lineNumber(5)}${'&nbsp;'.repeat(6)}${kw2('phone:')} ${kw3('\"+38 (098) 606-09-89\"')},<br>`,
        `&nbsp;${lineNumber(6)}${'&nbsp;'.repeat(6)}${kw2('email:')} ${kw3('\"ahryk94@gmail.com\"')},<br>`,
        `&nbsp;${lineNumber(7)}${'&nbsp;'.repeat(6)}${kw2('skype:')} ${kw3('\"alexander.hryk\"')},<br>`,
        `&nbsp;${lineNumber(8)}${'&nbsp;'.repeat(6)}${kw2('skills:')} [${kw3('\"JS\"')}, ${kw3('\"Node.js\"')},<br>`,
        `&nbsp;${lineNumber(9)}${'&nbsp;'.repeat(15)}${kw3('\"jQuery\"')}, ${kw3('\"Angular\"')}]<br>`,
        `${lineNumber(10)}${'&nbsp;'.repeat(2)}};<br>`,
        `${lineNumber(11)}<br>`,
        `${lineNumber(12)}${'&nbsp;'.repeat(2)}${kw4('$')}(${kw3('\"#aboutme\"')}).${kw4('html')}(${kw4('wrap')}(${kw2('me')}));`
    ];

    const intro1 = new Typed('#intro1', {
        strings: [parts.join('')],
        typeSpeed: 50
    });

    const intro2 = new Typed('#intro2', {
        strings: [parts.join('')],
        typeSpeed: 50
    });
}