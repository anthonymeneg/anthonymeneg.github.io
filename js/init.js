$.stellar({
    horizontalScrolling: false,
    verticalScrolling: true,
    responsive: true,
    // Select which property is used to calculate scroll.
    // Choose 'scroll', 'position', 'margin' or 'transform',
    // or write your own 'scrollProperty' plugin.
    scrollProperty: 'scroll',

    // Select which property is used to position elements.
    // Choose between 'position' or 'transform',
    // or write your own 'positionProperty' plugin.
    positionProperty: 'transform',
});

jQuery.extend(jQuery.easing, {
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    }
});

$(function() {
    $('#logo').on('click', function() {
        $('html, body').stop().animate({
        scrollTop: 0
    }, 1000, 'easeInOutCirc');
        return false;
    });

    var content2_0 = new Waypoint({
        element: document.getElementById('content2'),
        handler: function(direction) {
            if (direction == 'down') {
                $('#logo').addClass('active');
            } else {
                $('#logo').removeClass('active');
            }
        },
        offset: '50%'
    }), content2_1 = new Waypoint({
        element: document.getElementById('content-2-animations'),
        handler: function(direction) {
            $(this.element).find('.paused').removeClass('paused').addClass('animate');
        },
        offset: '80%'
    }),
    content2_2 = new Waypoint({
        element: document.getElementById('content-2-mobile'),
        handler: function(direction) {
            $(this.element).find('.paused').removeClass('paused').addClass('animate');
        },
        offset: '80%'
    });
});