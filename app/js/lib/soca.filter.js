soca.filter =
{
    tableRowTarget: function()
    {
        $("tbody.mixitup").mixItUp(
        {
            layout: 
            {
                display: "table-row"
            },
            animation: 
            {
                effects: "fade",
                duration: "400"
            }
        });
    },
    standard: function()
    {
        $('.filter').on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('filter');
            return $('.mixitup').mixItUp('filter', item);
        });
        $('.sort').on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('sort');
            return $('.mixitup').mixItUp('sort', item);
        });
    }
}