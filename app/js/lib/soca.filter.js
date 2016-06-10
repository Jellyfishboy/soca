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
    products: function()
    {
        $('#filter-product-category').on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('filter');
            return $('.mixitup').mixItUp('filter', item);
        });
        $('#sort-product').on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('sort');
            return $('.mixitup').mixItUp('sort', item);
        });
    },
    orders: function()
    {
        $('#filter-order').on('change', function() 
        {
            var item;
            item = $(this).find(':selected').data('filter');
            return $('.mixitup').mixItUp('filter', item);
        });
    }
}