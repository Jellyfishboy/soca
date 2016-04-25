soca.animation =
{

    loading: function()
    {
        $('.loading-trigger, .form-action input[type=submit]').on('click', function() 
        {
            $('.loading-overlay').css('height', '100%').addClass('active');
            return $('.loading5').addClass('active');
        });
        $('body').on('click', '.modal form .modal-footer input[type=submit]', function()
        {
            $('.modal .loading-overlay').css('height', '100%').addClass('active');
            return $('.modal .loading5').addClass('active');
        });
    },

    loaded: function()
    {
        $('.loading-overlay').css('height', '0%').removeClass('active');
        return $('.loading5').removeClass('active');
    },

    colourCaveat: function()
    {
        $(".user-menu ul li:first-child a").hover((function() 
        {
            return $(".user-menu .fa-caret-up").css('color', '#2f363d');
        }), function() 
        {
            return $(".user-menu .fa-caret-up").css('color', '#ffffff');
        });
    },

    alert: function(beforeElement, alertType, uniqueClass, message, delayCount)
    {
        $(beforeElement).before('<div class="alert alert-' + alertType + ' animated fadeInDown ' + uniqueClass + '">' + message + '</div>').delay(delayCount).queue(function(next)
        {
            $('.' + uniqueClass).addClass('fadeOutUp').delay(800).hide(1);
            next();
        });
    },

    sidebarExtension: function()
    {
        $('#extend-sidebar').on('click', function()
        {
            var $body = $('body');
            if ($body.hasClass('open-sidebar'))
            {
                $('header #logo, #extend-sidebar').css({'width' : '60px'});
                $('.main').css({ 'margin-left' : '60px' });
                $body.removeClass('open-sidebar');
                $('[data-toggle=tooltip]').tooltip('enable')
            } else {
                $body.addClass('open-sidebar')
                var sidebarWidth = $('#sidebar').width();
                $('header #logo, #extend-sidebar').css({'width' : sidebarWidth + 'px'});
                $('.main').css({ 'margin-left' : sidebarWidth + 'px' });
                $('[data-toggle=tooltip]').tooltip('disable');
            }
        });
    }
}