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
}