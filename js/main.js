(function() {
    // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());


    $('.js-ephemeralContent').ephemeralContent();
    $('.js-ephemeralTrigger').click(function(event) {
        event.preventDefault();
        var $contentBlock = $($(this).data().ephemeralLink);
        console.log($contentBlock);
        $contentBlock.trigger("toggle");
    });

    // Set up the breakpoint function.
    var breakpoint = {};
    breakpoint.refreshValue = function () {
        this.oldValue = this.value;
        this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        if (this.value != this.oldValue) {
            // Broadcast a newBreakpoint event
            $('.js-ephemeralContent').trigger({
                type: "newBreakpoint",
                oldBreakpoint: this.oldValue,
                newBreakpoint: this.value
            });
        }
    };

    // Set up the breakpoint listener.
    $(window).resize(function () {
        breakpoint.refreshValue();
    }).resize();

})();
