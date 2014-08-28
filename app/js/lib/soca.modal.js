soca.modal =
{
    open: function(trigger, target)
    {
        $(trigger).click(function() 
        {
           $(target).modal(
            {
                backdrop: 'static',
                keyboard: false
            });
           return false;
        });
    }
}