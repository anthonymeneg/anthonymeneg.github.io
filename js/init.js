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

$(function() {
    var content2_1 = new Waypoint({
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