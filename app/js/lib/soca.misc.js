soca.misc =
{
    updateTableHeight: function()
    {
        $('td.inner-table').each(function() 
        {
            return $(this).find('table').height($(this).outerHeight());
        });
    },
    datepicker: function()
    {
        $(".datepicker").datepicker(
        {
          format: "dd/mm/yyyy",
          startDate: "0"
        });
    }
}