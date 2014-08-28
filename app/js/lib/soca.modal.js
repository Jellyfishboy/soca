soca.modal =
{
    settings: function(target, backdrop, keyboard)
    {
        $(target).modal(
        {
            backdrop: backdrop,
            keyboard: keyboard
        });
    },

    open: function(trigger, target)
    {
        $(trigger).click(function() 
        {
           soca.modal.standard(target);
           return false;
        });
    }
}