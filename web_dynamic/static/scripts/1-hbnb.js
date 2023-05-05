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
