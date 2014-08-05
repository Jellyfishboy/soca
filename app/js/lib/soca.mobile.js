soca.mobile =
{
    disableScrolling: function()
    {
        $('#menu-trigger-input').change(function() 
        {
            if (this.checked) 
            {
                return $('body').css('overflow', 'hidden');
            } else {
                return $('body').css('overflow', 'auto');
            }
        });
    },
    disableTooltips: function()
    {
        if (!$('html').hasClass('touch')) 
        {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }
}