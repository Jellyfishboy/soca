soca.mobile =
{
    disableTooltips: function()
    {
        if (!$('html').hasClass('touch')) 
        {
            $('[data-toggle="tooltip"]').tooltip();
        }
    },

    triggerMenu: function()
    {
        new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ));
    }
}