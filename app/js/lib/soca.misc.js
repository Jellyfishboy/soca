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
    },

    taxify: function(value)
    {
        var number, sum;
        number = Number(value);
        sum = number + (number* (parseFloat(taxRate)/100));
        sum = isNaN(sum) ? 0 : sum;
        return sum;
    },

    taxField: function()
    {   
        var $elem = $('.calculate-tax');
        $elem.each(function() 
        {   
            if (!$(this).closest('input').next().hasClass('label-blue'))
            {
                return $(this).closest('input').after('<div class="gross label label-blue">Gross amount: ' + parseFloat(soca.misc.taxify(this.value), 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + '</div>');
            }
        });
        $elem.bind("input", function() 
        {
            return $(this).next('.gross').text('Gross amount: ' + parseFloat(soca.misc.taxify(this.value)).toFixed(2));
        });
    },

    multiSelect: function()
    {
        $('select.chosen').chosen();
    }

}