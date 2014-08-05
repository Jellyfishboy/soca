soca.modal =
{
    open: function(trigger, target)
    {
        $(trigger).click(function() 
        {
           $(target).modal('show');
           return false;
        });
    }
}