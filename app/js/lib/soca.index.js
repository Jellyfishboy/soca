soca.index =
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
    filter: function(elem_id)
    {
        $(elem_id).on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('filter');
            return $('.mixitup').mixItUp('filter', item);
        });
    },
    sort: function(elem_id)
    {
        $(elem_id).on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('sort');
            return $('.mixitup').mixItUp('sort', item);
        });
    }
}