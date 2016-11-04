jQuery(document).ready(function () {
    jQuery(".national-button").on("click", function (event) {
        jQuery(".national").show();
        jQuery(".state").toggle('hide');
        jQuery(".local").toggle('hide');
    });
});

jQuery(document).ready(function () {
    jQuery(".state-button").on("click", function (event) {
        jQuery(".state").show();
        jQuery(".national").toggle('hide');
        jQuery(".local").toggle('hide');
    });
});

jQuery(document).ready(function () {
    jQuery(".local-button").on("click", function (event) {
        jQuery(".local").show();
        jQuery(".state").toggle('hide');
        jQuery(".national").toggle('hide');
    });
});
