;
(function($, window, document, undefined) {

    /**
     * Flyout Widget
     */
    $.widget('nsm.ephemeralContent', {

        /**
         * Options
         */
        options: {
            showOnClick: true,
            showOnHover: true,
            hideOnClick: true,
            my: 'left top',
            at: 'left bottom',
            showTransition: 'fadeIn',
            hideTransition: 'fadeOut',
            showTransitionDuration: 0,
            hideTransitionDuration: 50,
            classes: {
                flyoutTriggerActive: 'is-active',
                flyoutVisible: 'is-visible',
                flyoutHidden: 'is-hidden'
            }
        },

        /**
         * Widget Events
         */
        _widgetEvents: {
            click: '_onWidgetClick',
            'newBreakpoint': '_checkConfiguration',
            'open': '_show',
            'close': '_hide',
            'toggle': '_toggle',
        },


        /**
         * Create the widget
         *
         * @private
         */
        _create: function() {
            this.options = $.extend(this.options, this.element.data('ephemeralContentOptions'));
            this._on(this._widgetEvents);
        },

        _checkConfiguration: function() {
            console.log("checking the configuration");
        },

        /**
         * Toggle the flyout
         *
         * @param event
         * @private
         */
        _toggle: function(event) {
            this[this.flyoutVisible ? "hide" : "show"](event);
        },

        /**
         * Show the flyout
         *
         * @param event
         */
        show: function(event) {

        },

        /**
         * Hide the flyout
         *
         * @param event
         */
        hide: function(event) {

        }

    });

})(jQuery, window, document);
