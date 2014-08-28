var taxRate = "20.0";

$(document).ready(function()
{
    soca.animation.loading();
    soca.animation.colourCaveat();
    soca.filter.tableRowTarget();
    soca.filter.products();
    soca.misc.updateTableHeight();
    soca.misc.taxField();
    soca.misc.multiSelect();
    soca.mobile.disableScrolling();
    soca.mobile.disableTooltips();
    soca.modal.open('.edit-order-modal', '#editOrderModal');
});
$('#editOrderModal').on('shown.bs.modal', function (e) {
    soca.misc.datepicker();
});