$(document).ready(function() {
    const amenityId = {};
    $('input:checkbox').click(function () {
        if ($(this).is(":checked")) {
            amenityId.push($(this).attr('data-name'));
        } else {
            const nameIndex = amenityId.indexof($(this).attr('data-name'));
            amenityId.splice(nameIndex. 1);
        }
        $('.amenities h4').text(amenityId.join(', '));
    });
});
$.get("http://0.0.0.0:5001/api/v1/status/", data => {
    $headerDiv = $('DIV#api_status');
    if (data.status == "OK") {
        $headerDiv.addClass("available");
    } else {
        $headerDiv.removeClass("available");
    }
});