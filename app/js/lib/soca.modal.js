soca.modal =
{
    standard: function(target)
    {
        $(target).modal(
        {
            backdrop: 'static',
            keyboard: false
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