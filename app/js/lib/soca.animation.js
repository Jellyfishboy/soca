soca.animation =
{

    loading: function()
    {
        $('.loading-trigger, input[type=submit]').on('click', function() 
        {
            $('.loading-overlay').css('height', '100%').addClass('active');
            return $('.loading5').addClass('active');
        });
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