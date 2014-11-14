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
    soca.mobile.disableTooltips();
    soca.mobile.triggerMenu();
    soca.modal.open('.edit-order-modal', '#editOrderModal');

    // example line chart
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    Chart.defaults.global.responsive = true;
    var ctx = $("#lineChart").get(0).getContext("2d");
    var myNewChart = new Chart(ctx).Line(data);
});
$('#editOrderModal').on('shown.bs.modal', function (e) {
    soca.misc.datepicker();
});