var taxRate = "20.0";

$(document).ready(function()
{
    soca.animation.loading();
    soca.animation.colourCaveat();
    soca.animation.sidebarExtension();
    soca.index.tableRowTarget();
    soca.index.filter("#filter-product-category");
    soca.index.sort("#sort-product");
    soca.misc.updateTableHeight();
    soca.misc.taxField();
    soca.misc.multiSelect();
    soca.mobile.disableTooltips();
    soca.mobile.triggerMenu();
    soca.modal.open('.edit-order-modal', '#editOrderModal');
    soca.modal.open('#add-stock-adjustment-button', '#stock-adjustment-form');
    soca.modal.open('#sku-variant-options-button', '#sku-variants-form');
    soca.modal.open('#add-sku-button', '#sku-form');
    soca.modal.open('#add-image', '#attachment-form');



    // example charts
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(141,199,63,0.2)",
                strokeColor: "rgba(141,199,63,1)",
                pointColor: "rgba(141,199,63,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(141,199,63,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(205,38,38,0.2)",
                strokeColor: "rgba(205,38,38,1)",
                pointColor: "rgba(205,38,38,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(205,38,38,1)",
                data: [6, 2, 8, 2, 3, 11, 5]
            }
        ]
    };
    var pieData = [
        {
            value: 70,
            color:"#00aff1",
            highlight: "",
            label: "PayPal"
        },
        {
            value: 20,
            color: "#8DC73F",
            highlight: "",
            label: "Cheque"
        },
        {
            value: 10,
            color: "#F7941D",
            highlight: "",
            label: "Bank transfer"
        }
    ];
    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    Chart.defaults.global.responsive = true;
    var ctx = $("#lineChart").get(0).getContext("2d");
    var myNewChart = new Chart(ctx).Line(data);
    var ctx2 = $("#pieChart").get(0).getContext("2d");
    var myDoughnutChart = new Chart(ctx2).Doughnut(pieData);
    var ctx3 = $("#barChart").get(0).getContext("2d");
    var myBarChart = new Chart(ctx3).Bar(barData);
});
$('#editOrderModal').on('shown.bs.modal', function (e) {
    soca.misc.datepicker();
});