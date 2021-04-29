// const { random } = require("lodash");
$(function(){
    window.setInterval(getnum(),20000);
});

function getnum(){
    $.ajax({
        type: 'get',                     //GET or POST
        url: "/getnum",
        dataType : 'json',
        data:{_token:'{{csrf_token()}}'}  //請求的頁面
        // cache: false,   //是否使用快取
    }).done(function(data) {
        if(data['status'] == "ok"){
            registerNum = data['num'];
            return registerNum;
        }
    });
};

// 酷酷數字
(function ($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: registerNum+10,
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(window).scroll(function() {
    jQuery('.progress-number').each(function() {
        var hT = jQuery('.number').offset().top, //1009
            hH = jQuery('.number').outerHeight(), //215
            dH = jQuery(window).height(), //920
            wS = jQuery(document).scrollTop();
        if (wS > (hT + hH - dH)) {
            jQuery('.progress-number').data('countToOptions', {
                formatter: function(value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });

            // start all the timers
            jQuery('.progress-number').each(count);
            jQuery(window).off("scroll");

            function count(options) {
                var $this = jQuery(this);
                options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        }
    });
});