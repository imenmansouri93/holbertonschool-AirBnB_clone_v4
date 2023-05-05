$(document).ready(function() {
    let amenities = {};
    $('INPUT[type="checkbox"]').change(function () {
        if ($(this).is(":checked")) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        $('.amenities h4').text(object.values(amenities).join(', '));
    });
});


$.get("http://0.0.0.0:5001/api/v1/status/", (data) => {
    $headerDiv = $('DIV#api_status');
    if (data.status == "OK") {
        $headerDiv.addClass("available");
    } else {
        $headerDiv.removeClass("available");
    }
});